import { Link } from "react-router-dom";
import { Component } from "react";
import EventList from '../../components/EventList/EventList';
import axios from "axios";
import "./EventPage.scss";


class EventPage extends Component {
  state = {
      events: null
  }


  componentDidMount() {
    axios
      .get("/api/events")
      .then((response) => {
        this.setState({
          events: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    const { events } = this.state;

    if (this.state.events === null) {
      return (
        <div>
          <h1 className="loading">Loading events...</h1>
        </div>
      );
    }

    return (
      <>
  
        <EventList events={events} />
    </>
    );
  }
}

export default EventPage;