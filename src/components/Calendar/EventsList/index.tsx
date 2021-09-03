import { useEffect } from "react";
import { useContext, useState } from "react";
import { CalendarContext } from "../../../contexts/CalendarContext";
import { EventItem } from "./EventItem";

export const EventsList: React.FC = () => {

    const [listItems, setListItems] = useState<JSX.Element[]>([]);
    const _events = useContext(CalendarContext);
    useEffect(() => {
        if (!_events) return;
        const { events } = _events;
        const list: JSX.Element[] = [];
        for (const day in events) {
            events[day].map(e => {
                list.push(<EventItem {...e} />);
            });
        }
        setListItems(list);

    }, [_events, setListItems])
    return (
        <div className="events-list">
            {listItems}
        </div>
    );
}