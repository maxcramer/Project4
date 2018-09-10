import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';


class Header extends React.Component {
  state = {
    toggleNav: false
  }
  handleToggle = () => {
    const toggle = !this.state.toggleNav;
    this.setState({ toggleNav: toggle });
  };


  // toggleNav = () => {
  //   const burger = document.getElementsByClassName('navbar-burger')[0];
  //   const dropdown = document.getElementsByClassName('dropdown')[0];
  //   const options = document.getElementsByClassName('navbar-item');
  //   const ToggleDropdown = function() {
  //     burger.class.toggle('is-active');
  //     dropdown.class.toggle('is-active');
  //   };
  // burger.addEventListener('click', ToggleDropdown);
  // for (let i=0; i < options.length; i++ ) {
  //   options[i].addEventListener('click', ToggleDropdown);
  // }
  // }
  render() {
    console.log(this.state.toggleNav);
    return(
      <header className="navbar">
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="mobile">
              <nav className="navbar mobile" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <a role="button" className={`navbar-burger ${this.state.toggleNav? 'is-active' : ''}`} aria-label="menu" aria-expanded="false"  data-target="navMenu" onClick={this.handleToggle}>
                    <span className="burger-color" aria-hidden="true"></span>
                    <span className="burger-color" aria-hidden="true"></span>
                    <span className="burger-color" aria-hidden="true"></span>
                  </a>
                </div>
                <div className={`navbar-menu ${this.state.toggleNav ? 'is-active' : ''}`}>
                  <div className="navbar-item">
                    <div><Link className="navbar-item" to="/journeys">Home</Link></div>
                  </div>
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/journeys/new">New Journey</Link>
                  </div>
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/events">Events</Link>
                  </div>
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/events/new">Create Event</Link>
                  </div>
                  {Auth.isAuthenticated &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to={`/user/${Auth.currentUserId()}`}>Profile</Link>
                  </div>
                  }
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/users">Find Friends to Follow</Link>
                  </div>
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/login">Log in</Link>
                  </div>
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/register">Register</Link>
                  </div>
                  <div className="navbar-item">
                    <a className="navbar-item" onClick={this.handleLogout}>Log out</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
