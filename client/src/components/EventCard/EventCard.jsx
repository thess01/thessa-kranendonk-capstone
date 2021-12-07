import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";
import Slide from 'react-reveal/Slide';
import "./EventCard.scss";
import map from '../../assets/images/map.png'


function EventCard({eventName, location, description, website, date, id}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
 
   <Slide bottom>
    <ul className="events-card">
     <li key={id} className="events-card__list">
       <a onClick={handleOpen}>
      <div className="events-card__wrapper">
        <div className="events-card__events-info">
          <h3 className="events-card__location">{location}</h3>
          <p className="events-card__date">{date}</p>
        </div>
        <div className="event-card__description-wrapper">
          <h3 className="events-card__event-name">{eventName}</h3>
          <p className="events-card__description">{description}</p>
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
                  <h3 className="events-card__modal-location">{location}</h3>
                  <p className="events-card__modal-date">{date}</p>
                  <p className="events-card__modal-description">{description}</p>
                  <p className="events-card__website">{website}</p>
                  <img className="events-card__map" src={map} alt='Event map'/>

                </Box>
              </Modal>
    
      </div>
      </li>
      </ul>
      </Slide>
  );
}

export default EventCard;