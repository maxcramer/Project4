import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class JourneysIndex extends React.Component {
  state = {}

  componentDidMount() { // gets all of the journeys
    axios.get('/api/journeys')

      .then(res => {
        console.log(res.data);
        this.setState({ journeys: res.data });
      });
  }
  render() {
    const journeys = this.state.journeys || [];

    return(
      <section>
        <main>
          { journeys && journeys.map(journey =>
            <div className="columns is-multiline" key={journey._id}>
              <Link to={`/journeys/${journey._id}`}
                className="column is-10 card">
                <h3 className="title is-3"
                  style={{ color: 'steelblue' }}>
                  {journey.journeyName}
                </h3>
                <img src={ journey.journeyImage }/>
              </Link>
            </div>
          )}
        </main>
      </section>
    );
  }
}


export default JourneysIndex;
