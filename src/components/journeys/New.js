import React from 'react';
import axios from 'axios';

// Components
import Auth from '../../lib/Auth';
import JourneyForm from './Form';



class JourneysNew extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted!', this.state); // event.target is the form itself
    axios.post('/api/journeys', this.state, Auth.bearerHeader())
      .then(() => this.props.history.push('/journeys'));
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  render() {
    console.log('this.state is', this.state);
    return (
      <section>
        <h2 className="title is-2">Upload A Journey</h2>
        <JourneyForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          journey={this.state}
        />
      </section>
    );
  }
}

export default JourneysNew;
