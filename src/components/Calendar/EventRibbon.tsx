import moment from "moment";
import { useCallback, useContext, useMemo } from "react";
import { CalendarModalContext } from "../../contexts/CalendarModalContext";
import { CalendarEvent } from "../../models/calendar";

interface EventRibbonProps {
    event: CalendarEvent;
}



export const isAllDay = (startTime: string, endTime: string) => (moment(startTime).hour() === moment(endTime).hour());


export const EventRibbon: React.FC<EventRibbonProps> = ({ event }) => {
    const modal = useContext(CalendarModalContext);
    const allDay = useMemo(() => isAllDay(event.start as string, event.end as string), [event.start, event.end]);
    const handleRibbonClick: React.MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        modal?.setEventInModal(event);
    }, [event])


    return (
        <div className={`event-ribbon ${(allDay) ? '' : 'timed'}`} onClick={handleRibbonClick}>
            {!allDay &&
                <>
                    <span className="bullet">&bull;</span>
                    <span className="time">{moment(event.start as string).format('ha')}</span>
                </>
            }
            <span>{event?.summary &&
                <div className="title">{event.summary}</div>
            }</span>
        </div>
    );
}
