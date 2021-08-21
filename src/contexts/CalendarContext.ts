import { createContext } from 'react';
interface EventProps {
    times?: [string, string];
    title?: string;
    text?: string;
}
export interface CalendarEventsProps {
    [key: string]: EventProps;
}
export interface CalendarContextProps {
    events: CalendarEventsProps;
    setEvents: React.Dispatch<React.SetStateAction<CalendarEventsProps>>;
}
export const CalendarContext = createContext<CalendarContextProps | null>(null);
