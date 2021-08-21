import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { CalendarCell } from "./CalendarCell";
import { CalendarContext, CalendarEventsProps } from "../../contexts/CalendarContext";
import { useCalendar } from "../../models/calendar";
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
        const firstDayOfMonth = moment(`${currentMoment.month() + 1}/1/${currentMoment.year()}`).day();
        const grid: JSX.Element[] = [];
        for (let y = 0; y < 6 && dayCount < daysInMonth; y++) {
            const row: JSX.Element[] = [];
            for (let x = 0; x < 7; x++) {
                if ((dayCount === 0 && x === firstDayOfMonth) || (dayCount > 0 && dayCount < daysInMonth)) {
                    const date = moment(`${currentMoment.month() + 1}/${dayCount + 1}/${currentMoment.year()}`).format('MM/DD/YYYY')
                    row.push(<CalendarCell day={date} text={`${dayCount + 1}`} key={date} />);
                    dayCount++;
                } else {

                    row.push(<CalendarCell day="" text={``} key={`${x}-${y}`} />);
                }

            }
            grid.push(
                <div className="calendar-row" key={y}>
                    {row}
                </div>
            );
        }
        return grid;
    }, [currentMoment, setMoment]);


    return (
        <div className="calendar" style={{ fontSize: '1em' }}>
            <header className="calendar-title">
                {/* <h3>The Stable Club</h3> */}
            </header>
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
    const [iCalEvents, setIcalEvents] = useCalendar('trevorbrown.dev@gmail.com');
    const [events, setEvents] = useState<CalendarEventsProps>({
        "08/20/2021": { title: 'Home Game', text: 'The Stallions vs the Devils', times: ["4pm", "9pm"] },
        "08/25/2021": { title: 'Wine Tasting', text: 'Wine tasting courtesy of Vineyard Vines', times: ["11am", "3pm"] },
        "08/30/2021": { title: 'After Game Party', text: 'Come celebrate with us after the game', times: ["5pm", "9pm"] },
    });
    useEffect(() => {
        const realEvents: CalendarEventsProps = {};
        for (const event in iCalEvents) {
            const calEvent = iCalEvents[event];
            realEvents[event] = {
                text: calEvent.description,
                title: calEvent.summary,
            }
        }
        setEvents({ ...realEvents });
    }, [iCalEvents])
    return <CalendarContext.Provider value={{ events, setEvents }}><PrivateCalendar /></CalendarContext.Provider>
}