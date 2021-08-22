import { createContext } from 'react';
import { CalendarEvent } from '../models/calendar';

export interface CalendarModalContextProps {
    eventInModal: CalendarEvent | null;
    setEventInModal: React.Dispatch<React.SetStateAction<CalendarEvent | null>>;
}
export const CalendarModalContext = createContext<CalendarModalContextProps | null>(null);
