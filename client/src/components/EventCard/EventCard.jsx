import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./EventCard.scss";


function EventCard({events}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <section className="events-card">
    <h1 className="events-card__header">Events</h1>
    {events.map(event =>
    <ul className="events-card__ul">
     <li key={event.id} className="events-card__list">
       <a onClick={handleOpen}>
      <div className="events-card__wrapper">
        <div className="events-card__events-info">
          <h3 className="events-card__location">{event.location}</h3>
          <p className="events-card__date">{event.date}</p>
        </div>
        <div className="event-card__description-wrapper">
          <h3 className="events-card__event-name">{event.eventName}</h3>
          <p className="events-card__description">{event.description}</p>
        </div>
      </div>
      
      </a>
     
      <div className="events-card__modal-wrapper">
     
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="events-card__modal-box">
                  <h2 className="events-card__modal-header">Event Details</h2>
                  <h3 className="events-card__modal-location">{event.location}</h3>
                  <p className="events-card__modal-date">{event.date}</p>
                  <p className="events-card__modal-description">{event.description}</p>
                  <p className="events-card__emails">{event.email}</p>
                  <img className="events-card__map" src={event.map_image} alt='Event map'/>

                </Box>
              </Modal>
    
      </div>
      </li>
      </ul>
    )}
    </section>
  );
}

export default EventCard;