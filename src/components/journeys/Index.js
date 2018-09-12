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
          <div className="field has-text-centered">
            { journeys && journeys.map(journey =>
              <div className="columns has-text-centered is-multiline journeyIndex" key={journey._id}>
                <Link to={`/journeys/${journey._id}`}
                  className="column is-10 padder">
                  <h3 className="indexText">
                    {journey.journeyName}
                  </h3>
                  <h3 className=" indexText">
                    {journey.city}
                  </h3>
                  <img src={ journey.journeyImage }/>
                </Link>
              </div>
            )}

          </div>
        </main>
      </section>
    );
  }
}


export default JourneysIndex;
