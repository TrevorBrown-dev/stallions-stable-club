import { useContext } from "react";
import { CalendarContext } from "../../../contexts/CalendarContext";

interface CalendarCellProps {
    text: string;
    day: string;
    img?: string;
}
export const CalendarCell: React.FC<CalendarCellProps> = ({ text, img, day }) => {
    //These are the individual cells for the calendar, they will be filled with an
    //analagous 2d array of strings or objects containing calendar info
    const calendar = useContext(CalendarContext);
    const event = calendar?.events[day];

    return (<div className="calendar-cell">
        <div className="cell-text">
            <div className="day">
                {text}
            </div>
            <div className="time">
                {event?.times && event.times[0] + "-" + event.times[1]}
            </div>
            <br />
            <div className="title">{event?.title}</div>
            <div className="text">

                {event?.text}
            </div>
        </div>
        {img &&
            <img src={img} alt={text} className="cell-image" />
        }
    </div>);
}