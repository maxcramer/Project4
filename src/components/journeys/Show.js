import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class JourneysShow extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`/api/journeys/${this.props.match.params.id}`)
      .then(res => this.setState({ journey: res.data }));
  }

  handleDelete = () => {
    axios.delete(`/api/journeys/${this.props.match.params.id}`, Auth.bearerHeader())
      .then(() => this.props.history.push('/journeys'));
  }

  render() {
    const journey = this.state.journey;
    return(
      <section>
        {journey &&
          <div className="journeyIndex">
            <div className="has-text-centered">
              <img className="journeyImg" src={journey.journeyImage} />
            </div>
            <div className="journeyText">
              <h2 className="title is-1 eventText">{journey.journeyName}</h2>
              <h2 className="title is-2 eventText">City: {journey.city}</h2>
              <p className="title is-2 eventText">Description: {journey.description}</p>
              <p className="title is-2 eventText">Distance: {journey.distance}KM</p>
              <p className="title is-2 eventText">Board Rode: {journey.boardRode}</p>
              <p className="title is-2 eventText">Uploaded By: {journey.username}</p>
            </div>
            <div className="columns buttons has-text-centered haveaccount">
              <div className="column is-half">
                <Link to={`/journeys/${journey._id}/edit`} className="button is-warning is-rounded is-outlined">Edit</Link>
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

export default JourneysShow;
