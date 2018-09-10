import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class EventsIndex extends React.Component {
  state = {}

  componentDidMount() { // gets all of the journeys
    axios.get('/api/events')

      .then(res => {
        console.log(res.data);
        this.setState({ events: res.data });
      });
  }
  render() {
    const events = this.state.events || [];
    console.log(events);
    return(
      <section>
        <main>
          { events && events.map(event =>
            <div className="columns is-multiline" key={event._id}>
              <Link to={`/events/${event._id}`}
                className="column is-10 card">
                <h3 className="title is-3"
                  style={{ color: 'steelblue' }}>
                  {event.eventName}
                </h3>
                <img src={ event.eventImage }/>
              </Link>
            </div>
          )}
        </main>
      </section>
    );
  }
}


export default EventsIndex;
