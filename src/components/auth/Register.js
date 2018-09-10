import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class AuthRegister extends React.Component {
  state = {
    passwordHidden: true,
    username: 'Max',
    email: 'max@email.com',
    password: 'pass',
    errors: {}
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.password !== this.state.passwordConfirmation){
      const errors = this.sate.errors;
      errors.passwordConfirmation = 'Passwords do not match, please try again';
      return this.setState({ errors });
    }
    axios.post('/api/register', this.state)
      .then(res => {
        const token = res.data.token;
        Auth.setToken(token); // store token on local storage
        this.props.history.push('/journeys');
      })
      .catch(err => {
        const errors = { ...this.state.errors, ...err.response.data.errors };
        this.setState({ errors });
      });
  }

  togglePasswordShow = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState({ passwordHidden });
  }

  handleChange = (event) => {
    const { target: {name, value} } = event;
    const errors = this.state.errors;
    delete errors[name]; // remove the error field
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input name="email" placeholder="example@email.com" onChange={this.handleChange} value={this.state.email || ''} />
          <span style={{ color: 'red' }}>{this.state.errors.email}</span>
          <input name="username" placeholder="e.g. Pete" onChange={this.handleChange} value={this.state.username || ''} />
          <span style={{ color: 'red' }}>{this.state.errors.username}</span>
          <input name="password" type={this.state.passwordHidden ? 'password' : 'text'} placeholder="password" onChange={this.handleChange} value={this.state.password || ''} />
          <span style={{ color: 'red' }}>{this.state.errors.password}</span>
          <input name="passwordConfirmation" type={this.state.passwordHidden ? 'password' : 'text'} placeholder="Confirm your password" onChange={this.handleChange} value={this.state.passwordConfirmation || ''} />
          <span style={{ color: 'red' }}>{this.state.errors.passwordConfirmation}</span>
          {/* Needs to be dropdown menu! */}
          <input name="boardType" placeholder="Please choose from an option below" onChange={this.handleChange} value={this.state.boardType} />
          <input name="ridingStyle" placeholder="Please choose from an option below" onChange={this.handleChange} value={this.state.ridingStyle} />
          <button>Submit</button>
        </form>
        <button onClick={this.togglePasswordShow}>👁</button>
      </section>
    );
  }

}



export default AuthRegister;
