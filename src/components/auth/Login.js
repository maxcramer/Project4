import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {
  state = {
    passwordHidden: true
  }

  togglePasswordShow = () => {
    const passwordHidden = !this.state.passwordHidden;
    this.setState({ passwordHidden });
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

  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div className="field has-text-centered boxpadding">
            <div className="field">
              <label className="label" >Email</label>
              <input className="bars has-text-centered" name="email" placeholder="example@email.com" onChange={this.handleChange} value={this.state.email} />
            </div>
            <div className="field">
              <label className="label" >Password</label>
              <input className="bars has-text-centered" name="password" type={this.state.passwordHidden ? 'password' : 'text'} placeholder="password" onChange={this.handleChange} value={this.state.password} />
            </div>
            <button className="button is-danger is-rounded is-outlined" onClick={this.togglePasswordShow}>Show Password 👁</button>
            <div className="submitButton">
              <button className="button is-info is-rounded is-outlined">Submit</button>
            </div>
            <p className="subtitle is-5 label noaccount">Don't have an account? <a href="/register">Click here</a> to sign up</p>
          </div>
        </form>

      </section>
    );
  }
}


export default AuthLogin;
