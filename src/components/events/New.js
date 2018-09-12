import React from 'react';
import axios from 'axios';

// Components
import Auth from '../../lib/Auth';
import EventForm from './Form';



class EventsNew extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted!', this.state); // event.target is the form itself
    axios.post('/api/events', this.state, Auth.bearerHeader())
      .then(() => this.props.history.push('/events'));
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  render() {
    console.log('this.state is', this.state);
    return (
      <section>
        <h2 className="title is-1 label pad">Create an Event</h2>
        <EventForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          event={this.state}
        />
      </section>
    );
  }
}

export default EventsNew;
