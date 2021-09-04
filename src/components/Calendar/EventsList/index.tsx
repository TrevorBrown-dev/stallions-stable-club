import moment from "moment";
import { useCallback, useEffect } from "react";
import { useContext, useState } from "react";
import { CalendarContext } from "../../../contexts/CalendarContext";
import { CalendarEvent } from "../../../models/calendar";
import { EventItem } from "./EventItem";

export const EventsList: React.FC = () => {
    const [listItems, setListItems] = useState<JSX.Element[]>([]);
    const _events = useContext(CalendarContext);

    const sortEvents = useCallback((eventsList: CalendarEvent[]) => {
        eventsList.sort((a, b) => {
            //Sort the events by order of day and then start time.
            return moment(a.start as string).diff(moment(b.start as string));
        })

    }, [])


    useEffect(() => {
        console.log(_events);
        const eventsList: CalendarEvent[] = [];
        for (const day in _events?.events) {
            _events?.events[day].map((e, i) => {
                eventsList.push(e);
            });
        }
        sortEvents(eventsList);
        //After sorting map ver them assigning jsx then set the list Items
        const list = eventsList.map((e) => <EventItem {...e} />)
        setListItems(list);
    }, [_events, setListItems])

    return (
        <div className="events-list">
            {listItems}
        </div>
    );
}