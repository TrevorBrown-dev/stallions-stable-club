import { useCallback, useContext } from "react";
import { CalendarModalContext } from "../../contexts/CalendarModalContext";
import { CalendarEvent } from "../../models/calendar";

interface EventRibbonProps {
    event: CalendarEvent;
}




export const EventRibbon: React.FC<EventRibbonProps> = ({ event }) => {
    const modal = useContext(CalendarModalContext);


    const handleRibbonClick: React.MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        modal?.setEventInModal(event);
    }, [event])


    return (
        <div className="event-ribbon" onClick={handleRibbonClick}>
            <span>{event?.summary &&
                <div className="title">{event.summary}</div>
            }</span>
        </div>
    );
}
