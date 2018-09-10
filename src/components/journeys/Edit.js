import React from 'react';
import axios from 'axios';

import Auth from '../../lib/Auth';
import JourneyForm from './Form';

class JourneysEdit extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    const journeyId = this.props.match.params.id;
    console.log('Form Submitted!', this.state); // event.target is the form itself
    axios.put(`/api/journeys/${journeyId}`, this.state, Auth.bearerHeader())
      .then(() => this.props.history.push(`/journeys/${journeyId}`));
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios.get(`/api/journeys/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }


  render() {
    console.log('this.state is', this.state);
    return (
      <section>
        <h2 className="title is-2">Edit Journey</h2>
        <JourneyForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          journey={this.state}
        />
      </section>
    );
  }
}


export default JourneysEdit;
