import React from 'react';
import axios from 'axios';

import Auth from '../../lib/Auth';
import UserForm from './Form';

class UsersEdit extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    const userId = this.props.match.params.id;
    console.log('Form Submitted!', this.state); // event.target is the form itself
    axios.put(`/api/users/${userId}`, this.state, Auth.bearerHeader())
      .then(() => this.props.history.push(`/users/${userId}`));
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }


  render() {
    console.log('this.state is', this.state);
    return (
      <section>
        <h2 className="title is-2 pad label">Edit Your Profile</h2>
        <UserForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          user={this.state}
        />
      </section>
    );
  }
}


export default UsersEdit;
