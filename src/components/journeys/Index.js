import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class JourneysIndex extends React.Component {
  state = {}

  componentDidMount() { // gets all of the journeys
    let journeys;
    axios.get('/api/journeys')
      .then(res => {
        journeys = res.data;
        axios.get(`/api/users/${Auth.currentUserId()}`)
          .then(res => {
            console.log('This is the res.data', Auth.currentUserId());
            this.setState({journeys: journeys, user: res.data});
          });
      });
  }


  render() {
    if(!this.state.journeys || !this.state.user) return null;
    const journeys = this.state.journeys.filter(journey => (
      this.state.user.following.filter(user => user.username === journey.username).length) || []
    );
    console.log('This is the journeys', journeys);
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
