import React from 'react';
import axios from 'axios';

import Auth from '../../lib/Auth';
import EventForm from './Form';

class EventsEdit extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    const eventId = this.props.match.params.id;
    console.log('Form Submitted!', this.state); // event.target is the form itself
    axios.put(`/api/events/${eventId}`, this.state, Auth.bearerHeader())
      .then(() => this.props.history.push(`/events/${eventId}`));
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }


  render() {
    console.log('this.state is', this.state);
    return (
      <section>
        <h2 className="title is-2">Edit Event</h2>
        <EventForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          event={this.state}
        />
      </section>
    );
  }
}


export default EventsEdit;
