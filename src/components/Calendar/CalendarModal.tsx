import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { CalendarModalContext } from '../../contexts/CalendarModalContext';
import { CalendarEvent } from '../../models/calendar';
import { isAllDay } from './EventRibbon';

interface CalendarModalProps {
    event: CalendarEvent;
}
export const CalendarModal: React.FC<CalendarModalProps> = ({ event }) => {
    const [closing, setClosing] = useState(false);
    const modal = useContext(CalendarModalContext);
    useEffect(() => {
        console.log(event);
    }, [event]);
    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            modal?.setEventInModal(null);
        }, 300);
    };

    return (
        <div className='calendar-modal' onClick={(e) => closeModal()}>
            <div className={`content ${closing ? 'close' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className='times'>
                    {!isAllDay(event.start as string, event.end as string) ? `${moment(event.start as string).format('h:mma')}-${moment(event.end as string).format('h:mma')}` : 'All Day'}
                </div>
                {event.summary && <h5 className='summary'>{event.summary}</h5>}
                {event.description && <div className='description' dangerouslySetInnerHTML={{ __html: event.description || '' }}></div>}
                <button onClick={() => closeModal()} className='close-button'>
                    <span className='material-icons'>keyboard_double_arrow_up</span>
                </button>
            </div>
        </div>
    );
};
