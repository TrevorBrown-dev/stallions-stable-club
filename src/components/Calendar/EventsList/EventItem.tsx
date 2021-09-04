import moment from "moment";
import { CalendarEvent } from "../../../models/calendar";
import { isAllDay } from "../EventRibbon";

export const EventItem: React.FC<CalendarEvent> = (event) => {

    return (
        <article className="event-item">
            <div className="content">
            <div className='times'>
                    {moment(event?.start as string).format('MMMM Do, YYYY')}<br />
                    {
                        !isAllDay(event.start as string, event.end as string) ?
                            `${moment(event.start as string).format('h:mma')}-${moment(event.end as string).format('h:mma')}`
                            : 'All Day'
                    }
                </div>
                {event.summary && <h5 className='summary'>{event.summary}</h5>}
                {event.description && <div className='description' dangerouslySetInnerHTML={{ __html: event.description || '' }}></div>}
            </div>
        </article>

    );
}