import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class AuthRegister extends React.Component {
  state = {
    passwordHidden: true,
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
      <section className="regpadding">
        <div className="has-text-centered ">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <input className="bars has-text-centered" name="email" placeholder="example@email.com" onChange={this.handleChange} value={this.state.email || ''} />
              <span style={{ color: 'red' }}>{this.state.errors.email}</span>
            </div>

            <div className="field">
              <label className="label">Username</label>
              <input className="bars has-text-centered" name="username" placeholder="e.g. Pete" onChange={this.handleChange} value={this.state.username || ''} />
              <span style={{ color: 'red' }}>{this.state.errors.username}</span>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <input className="bars has-text-centered" name="password" type={this.state.passwordHidden ? 'password' : 'text'} placeholder="password" onChange={this.handleChange} value={this.state.password || ''} />
              <span style={{ color: 'red' }}>{this.state.errors.password}</span>
            </div>

            <div className="field">
              <label className="label">Password Confirmation</label>
              <input className="bars has-text-centered" name="passwordConfirmation" type={this.state.passwordHidden ? 'password' : 'text'} placeholder="Confirm your password" onChange={this.handleChange} value={this.state.passwordConfirmation || ''} />
              <span style={{ color: 'red' }}>{this.state.errors.passwordConfirmation}</span>
            </div>

            <div className="field">
              <button className="button is-danger is-rounded is-outlined" onClick={this.togglePasswordShow}>Show Password 👁</button>
            </div>

            {/* Needs to be dropdown menu! */}
            <div className="field">
              <label className="label">Please choose your Board bellow</label>
              <select className="bars has-text-centered" name="boardType" placeholder="Please choose from an option below" onChange={this.handleChange} value={this.state.boardType} >
                <option value="">Select from bellow 🔽</option>
                <option value="OneWheel Original">OneWheel Original</option>
                <option value="OneWheel Plus">OneWheel Plus</option>
                <option value="OneWheel XR">OneWheel XR</option>
              </select>
            </div>

            <div className="field">
              <label className="label">Please choose prefered riding style bellow</label>
              <select className="bars has-text-centered" name="ridingStyle" placeholder="Please choose from bellow 🔽" onChange={this.handleChange} value={this.state.ridingStyle} >
                <option value="">Select from bellow 🔽</option>
                <option value="Street">Street</option>
                <option value="Off-Road">Off-Road</option>
                <option value="Freestyle / Tricks">Freestyle / Trick</option>
              </select>
            </div>


            <div className="submitButton">
              <button className="button is-info is-rounded is-outlined">Submit</button>
            </div>
            <p className="subtitle is-5 label haveaccount">Already have an account? <a href="/login">Click here</a> to login</p>
          </form>
        </div>
      </section>
    );
  }

}



export default AuthRegister;
