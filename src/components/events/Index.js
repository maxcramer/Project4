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
          <div className="field">
            { events && events.map(event =>
              <div className="columns is-multiline journeyIndex" key={event._id}>
                <Link to={`/events/${event._id}`}
                  className="column is-10 padder">
                  <div className="has-text-centered">
                    <img src={ event.eventImage }/>
                  </div>
                  <h3 className="indexText">
                    {event.eventName}
                  </h3>
                  <h3 className="subtitle is-3 eventText">
                    Meet at: {event.startLocation}
                  </h3>
                  <h3 className="subtitle is-3 eventText">
                    Start Time: {event.startTime}
                  </h3>
                </Link>
              </div>
            )}
          </div>
        </main>
      </section>
    );
  }
}


export default EventsIndex;
