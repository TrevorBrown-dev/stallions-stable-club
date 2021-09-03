import moment from 'moment';
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';
import { EventRibbon } from './EventRibbon';

export interface CalendarCellProps {
    text: string;
    day: string;
    date: string;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({ text, day, date }) => {
    //These are the individual cells for the calendar, they will be filled with an
    //analagous 2d array of strings or objects containing calendar info
    const calendar = useContext(CalendarContext);
    const events = calendar?.events[day];
    events?.sort((a, b) => {
        return moment(a.start as string).hour() - moment(b.start as string).hour();
    });

    return (
        <div className='calendar-cell' id={day}>
            <div className='cell-text'>
                <div className={`day `} id={moment().format('MM-DD-YYYY') === moment(date).format('MM-DD-YYYY') ? 'today' : ''}>
                    <span>{text}</span>
                </div>
                {events && events.map((event, index) => <EventRibbon event={event} key={index} />)}
            </div>
        </div>
    );
};
