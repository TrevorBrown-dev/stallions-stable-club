import { createContext } from 'react';
import { CalendarEvent } from '../models/calendar';
export interface CalendarEventsProps {
    [key: string]: CalendarEvent[];
}
export interface CalendarContextProps {
    events: CalendarEventsProps;
    setEvents: React.Dispatch<React.SetStateAction<CalendarEventsProps>>;
}
export const CalendarContext = createContext<CalendarContextProps | null>(null);
