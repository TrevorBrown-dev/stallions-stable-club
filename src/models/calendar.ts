import { useCallback, useEffect, useState } from 'react';
import ical from 'ical';
import moment from 'moment';
import { calendarApi } from '../apis/calendarApi';

interface CalendarAttachments {
    fileId: string;
    fileUrl: string;
    title: string;
    iconLink: string;
    mimeType: string;
}
export interface CalendarEvent {
    id?: string;
    summary?: string;
    description?: string;
    start?: CalendarDateObj;
    end?: CalendarDateObj;
    attachments?: CalendarAttachments[];
}

interface CalendarDateObj {
    date?: string;
    dateTime?: string;
}
type UnknownObject = { [key: string]: any };
const mapItem = (item: UnknownObject): CalendarEvent => {
    const event: CalendarEvent = {
        attachments: item?.attachments || [],
        id: item?.id || '',
        summary: item?.summary || '',
        description: item?.description || '',
        start: item.start.dateTime ? item.start.dateTime : item.start.date,
        end: item.end.dateTime ? item.end.dateTime : item.end.date,
    };
    return event;
};
interface iCalEvents {
    [key: string]: CalendarEvent[];
}
export const useCalendar = (calendarID: string): [iCalEvents, React.Dispatch<React.SetStateAction<iCalEvents>>] => {
    const [events, setEvents] = useState<iCalEvents>({});
    const fetchLocal = useCallback(() => {
        fetch('basic.ics')
            .then((r) => r.text())
            .then((text) => {
                const cal = ical.parseICS(text);
                parseData(cal);
            });
    }, []);

    const fetchRemote = useCallback(async () => {
        calendarApi
            .get(`/calendars/${calendarID}/events`)
            .then(({ data }) => {
                //First we need to format the information properly
                const obj: { [key: string]: any } = {};
                const items = data.items as any[];
                items.forEach((item) => {
                    const mappedItem = mapItem(item);
                    obj[item['id']] = { ...mappedItem };
                });
                parseData(obj);
            })
            .catch((err) => {
                console.log('Fetching calendar data failed', err);
                fetchLocal();
            });
    }, [calendarID, fetchLocal]);
    const parseData = (data: any) => {
        const parsedEvents: iCalEvents = {};
        for (const event in data) {
            //this is the key for the objects.
            const date = moment(data[event].start).format('MM-DD-YYYY');

            if (parsedEvents[date] !== undefined) {
                //We already have an event for this day, add it to the array
                parsedEvents[date].push(data[event]);
            } else {
                //We do not have an event so we need to create a new array
                parsedEvents[date] = [data[event]];
            }
        }
        setEvents({ ...parsedEvents });
    };

    useEffect(() => {
        try {
            fetchRemote();
        } catch (error) {}
    }, [fetchRemote]);
    return [events, setEvents];
};
