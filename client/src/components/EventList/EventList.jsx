import EventCard from '../EventCard/EventCard';
import './EventList.scss'

export default function EventList( { events } ) {
    return (
        <>
        <section className="event-card-list">
        <h1 className="event-card-list__header">Events</h1>
            {
                events.map(event=> 
                <EventCard
                    id={event.id}
                    eventName={event.eventName}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    email={event.email}
                    image={event.map_image}
                />)
            }
            </section>
        </>
    )
}