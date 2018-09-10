import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class EventsShow extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data }));
  }

  handleDelete = () => {
    axios.delete(`/api/events/${this.props.match.params.id}`, Auth.bearerHeader())
      .then(() => this.props.history.push('/events'));
  }

  render() {
    const event = this.state.event;
    return(
      <section>
        {event &&
          <div className="has-text-centered">
            <h2 className="title is-2">{event.eventName}</h2>
            {/* <h2 className="title is-2">{event.startLocation}</h2> WONT RENDER WITH THIS, ARRAYS?*/}
            <img src={event.eventImage} />
            <p className="has-text-centered">Start time: {event.startTime}</p>
            <p className="has-text-centered">End time: {event.endTime}</p>
            {/* <p className="has-text-centered">{event.endLocation}</p> WONT RENDER WITH THIS, ARRAYS?*/}
            <div className="columns buttons">
              <div className="column is-half">
                <Link to={`/events/${event._id}/edit`} className="button is-warning is-rounded is-outlined">Edit</Link>
              </div>
              <div className="column is-half">
                <button onClick={this.handleDelete} className="button is-danger is-rounded is-outlined">Delete</button>
              </div>
            </div>
          </div>
        }
      </section>
    );
  }
}

export default EventsShow;
