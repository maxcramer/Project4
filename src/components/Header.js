import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';
import SearchBar from './common/SearchBar';
// import FilterSelect from './common/FilterSelect';
import _ from 'lodash';
import Options from '../lib/Options';
import axios from 'axios';

class Header extends React.Component {
  state = {
    toggleNav: false
  }

  componentDidMount() { // sets all journeys onto the state?
    axios.get('/api/journeys')
      .then(res => this.setState({ journeys: res.data, filteredJourneys: res.data, userId: Auth.currentUserId() }));
  }

  componentDidUpdate() {
    if(Auth.currentUserId() !== this.state.userId){
      console.log('Current User ID has changed!' );
      this.setState({ userId: Auth.currentUserId() });
    }
  }

  sortJourneys = (journeys) => {
    const [ fieldName, direction ] = this.state.sortString.split('|');
    return _.orderBy(journeys, fieldName, direction);
  }

  filterBySearch = (journeys) => {
    const { searchTerm } = this.state;
    return journeys.filter(journey =>
      [journey.city].some(field => {
        const re = new RegExp(searchTerm, 'i');
        return re.test(field);
      })
    );
  }


  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSortChange = (event) => {
    Options.set('sortString', event.target.value);
    this.setState({ sortString: event.target.value });
  }

  handleSelectAll = (event) => {
    const filterOptions = this.state.filterOptions.slice();
    // Set the 'active' of every filterOption
    filterOptions.forEach(option => {
      option.active = event.target.checked;
    });
    this.setState({ filterOptions });
  }

  handleToggle = () => {
    const toggle = !this.state.toggleNav;
    this.setState({ toggleNav: toggle });
  };

  handleLogout = () => {
    Auth.removeToken();
    this.props.history.push('/login');
  }








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
      <header>
        {/* <div className="columns column">
          <div className="column is-8">
            <SearchBar
              handleChange={ this.handleSearchChange }
              searchTerm={ this.state.searchTerm }
              ng-model="$parent.searchBox"
            />
          </div>
        </div> */}
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
                  {Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <div><Link className="navbar-item" to="/journeys">Home</Link></div>
                  </div>
                  }
                  {Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/journeys/new">New Journey</Link>
                  </div>
                  }
                  {Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/events">Events</Link>
                  </div>
                  }
                  {Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/events/new">Create Event</Link>
                  </div>
                  }
                  {Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to={`/users/${this.state.userId}`}>Profile</Link>
                  </div>
                  }
                  {Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/users">Find Friends to Follow</Link>
                  </div>
                  }
                  {!Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/login">Log in</Link>
                  </div>
                  }
                  {!Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <Link className="navbar-item" to="/register">Register</Link>
                  </div>
                  }
                  {Auth.isAuthenticated() &&
                  <div className="navbar-item">
                    <a className="navbar-item" onClick={this.handleLogout}>Log out</a>
                  </div>
                  }
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
