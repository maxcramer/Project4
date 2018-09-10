import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {
  state = {
    passwordHidden: true,
    email: 'max@email.com',
    password: 'pass'
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(res => {
        const token = res.data.token;
        Auth.setToken(token); //Stores token to Local Storage
        Flash.setMessage('info', res.data.message);
        this.props.history.push('/journeys');
      })
      .catch(err => {
        console.log(err.response);
        Flash.setMessage('danger', 'Invalid email or password');
        // 'redirect' to the current page
        this.props.history.push(this.props.location.pathname);
      });
  }

  togglePasswordShow = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState({ passwordHidden });
  }

  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input name="email" placeholder="example@email.com" onChange={this.handleChange} value={this.state.email} />
          <input name="password" type={this.state.passwordHidden ? 'password' : 'text'} placeholder="password" onChange={this.handleChange} value={this.state.password} />
          <button>Submit</button>
        </form>
        <button onClick={this.togglePasswordShow}>👁</button>
      </section>
    );
  }
}


export default AuthLogin;
