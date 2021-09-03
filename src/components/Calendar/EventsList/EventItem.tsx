import { CalendarEvent } from "../../../models/calendar";

export const EventItem: React.FC<CalendarEvent> = (event) => {
    return (
        <article className="event-item">
            <header className="summary">
                {event.summary}
            </header>

            <div className="description">
                {event.description}
            </div>

        </article>
    );
}