import "./EventCard.scss";

function EventCard({events}) {
  return (
<>
    {events.map(event =>
    <li key={event.id} className="events-card">

      <div className="events-card__wrapper">
        <div className="events-card__user-info">
          <h3 className="events-card__location">{event.location}</h3>
          <p className="events-card__date">{event.date}</p>
        </div>
        <p className="events-card__description">{event.description}</p>
      </div>
    </li>
    )}
    </>
  );
}

export default EventCard;