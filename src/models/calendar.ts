import { useEffect, useState } from 'react';
import ical from 'ical';
import moment from 'moment';
import axios from 'axios';
interface iCalEvents {
    [key: string]: ical.CalendarComponent;
}
export const useCalendar = (calendarID: string): [iCalEvents, React.Dispatch<React.SetStateAction<iCalEvents>>] => {
    const [events, setEvents] = useState<iCalEvents>({});
    const fetchLocal = () => {
        fetch('basic.ics')
            .then((r) => r.text())
            .then((text) => {
                const cal = ical.parseICS(text);
                parseData(cal);
            });
    };
    const fetchRemote = async () => {
        axios
            .get(`https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/?key=${process.env['CALENDAR_API_TOKEN']}`)
            .then(({ data }) => {
                //First we need to format the information properly
                const obj: { [key: string]: any } = {};
                const items = data.items as any[];
                items.forEach((item) => {
                    obj[item['id']] = { ...item, start: item.start.dateTime, end: item.start.dateTime };
                });
                parseData(obj);
            })
            .catch((err) => {
                console.log('Fetching calendar data failed', err);
                fetchLocal();
            });
    };
    const parseData = (data: any) => {
        for (const event in data) {
            events[moment(data[event].start).format('MM/DD/YYYY')] = data[event];
        }

        setEvents({ ...events });
    };
    useEffect(() => {
        try {
            fetchRemote();
        } catch (error) {}
    }, []);
    return [events, setEvents];
};
