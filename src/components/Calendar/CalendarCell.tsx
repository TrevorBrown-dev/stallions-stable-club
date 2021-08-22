import { useContext } from "react";
import { CalendarContext } from "../../contexts/CalendarContext";
import { EventRibbon } from "./EventRibbon";

interface CalendarCellProps {
    text: string;
    day: string;
}




export const CalendarCell: React.FC<CalendarCellProps> = ({ text, day }) => {
    //These are the individual cells for the calendar, they will be filled with an
    //analagous 2d array of strings or objects containing calendar info
    const calendar = useContext(CalendarContext);
    const events = calendar?.events[day];
    return (<div className="calendar-cell" id={day}>
        <div className="cell-text">
            <div className="day" style={{ padding: '.2em' }}>
                {text}
            </div>
            {events && events.map(event => <EventRibbon event={event} />
            )}
        </div>
    </div>);
}

