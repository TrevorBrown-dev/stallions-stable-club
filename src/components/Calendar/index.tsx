import { useCallback, useContext, useEffect, useState } from "react";
import moment from "moment";
import { CalendarCell } from "./CalendarCell";
import { CalendarContext, CalendarEventsProps } from "../../contexts/CalendarContext";
import { CalendarEvent, useCalendar } from "../../models/calendar";
import { CalendarModalContext } from "../../contexts/CalendarModalContext";
import { CalendarModal } from "./CalendarModal";
const PrivateCalendar: React.FC = () => {


    const MONTHS = Object.freeze(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    const DAYS = Object.freeze(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    const [currentMoment, setMoment] = useState(moment());

    //First day of the month, Sunday = 0, Monday = 1, ..., Saturday = 6
    const shiftMonth = useCallback((amount: number) => {
        setMoment(moment(currentMoment.add(amount, 'M')));
    }, [currentMoment, setMoment]);

    const generateCalendarGrid = useCallback(() => {
        let dayCount = 0;
        const daysInMonth = moment().daysInMonth();
        const firstDayOfMonth = moment(`${currentMoment.month() + 1}-1-${currentMoment.year()}`).day();
        const grid: JSX.Element[] = [];
        for (let y = 0; y < 6 && dayCount < daysInMonth; y++) {
            const row: JSX.Element[] = [];
            for (let x = 0; x < 7; x++) {
                if ((dayCount === 0 && x === firstDayOfMonth) || (dayCount > 0 && dayCount < daysInMonth)) {
                    const date = moment(`${currentMoment.month() + 1}-${dayCount + 1}-${currentMoment.year()}`).format('MM-DD-YYYY')
                    row.push(<CalendarCell day={date} text={`${dayCount + 1}`} key={date} date={date} />);
                    dayCount++;
                } else {

                    row.push(<CalendarCell day="" text={``} key={`${x}-${y}`} date="" />);
                }

            }
            grid.push(
                <div className="calendar-row" key={y}>
                    {row}
                </div>
            );
        }
        return grid;
    }, [currentMoment]);

    const modal = useContext(CalendarModalContext);
    return (
        <div className="calendar" style={{ fontSize: '1em' }}>
            {modal?.eventInModal && <CalendarModal event={modal.eventInModal} />}
            <div className="calendar-month flex" >
                <div className="calendar-arrows flex">
                    <div className="arrow-left hoverable-half"
                        onClick={() => shiftMonth(-1)}
                    >&lt;</div>
                    <div className="arrow-right hoverable-half" onClick={() => shiftMonth(1)}>&gt;</div>
                </div>
                <button className="today-button" onClick={() => setMoment(moment())}>Today</button>
                <h5>{MONTHS[currentMoment.month()]}</h5>
                <div className="year" style={{ flex: '1' }}>{currentMoment.year()}</div>
            </div>
            <div className="calendar-grid">
                <div className="calendar-row calendar-days" style={{ textAlign: 'center' }}>
                    {DAYS.map((d) => <span key={d}>{d}</span>)}
                </div>
                {generateCalendarGrid().map((c) => {
                    return c;
                })}
            </div>
        </div>
    );
}



export const Calendar = () => {
    const [iCalEvents,] = useCalendar('mq933te8jm95j3ea17i7tp25cg@group.calendar.google.com');
    const [events, setEvents] = useState<CalendarEventsProps>(iCalEvents);
    const [eventInModal, setEventInModal] = useState<CalendarEvent | null>(null);
    useEffect(() => {
        setEvents({ ...iCalEvents });
    }, [iCalEvents])

    return (
        <CalendarModalContext.Provider value={{ eventInModal, setEventInModal }}>

            <CalendarContext.Provider value={{ events, setEvents }}>
                <PrivateCalendar />
            </CalendarContext.Provider>
        </CalendarModalContext.Provider>
    );
}