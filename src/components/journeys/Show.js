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
          <div className="has-text-centered">
            <h2 className="title is-2">{journey.journeyName},</h2>
            <h2 className="title is-2">{journey.city}</h2>
            <img src={journey.journeyImage} />
            <p className="has-text-centered">{journey.description}</p>
            <p className="has-text-centered">{journey.distance}</p>
            <p className="has-text-centered">{journey.boardRode}</p>
            <div className="columns buttons">
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
