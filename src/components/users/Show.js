import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class UsersShow extends React.Component {
  state = {}

  componentDidMount() {
    console.log('This is the props', this.props.match.params.id);
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log('This is the state', this.state)));
  }

  handleDelete = () => {
    axios.delete(`/api/user/${this.props.match.params.id}`, Auth.bearerHeader())
      .then(() => this.props.history.push('/user'));
  }

  handleFollow = () => {
    axios.post(`/api/users/${this.props.match.params.id}/followers`)
      .then(res => this.setState({ user: res.data }, () => console.log('These are the followers', res.data)));
  }


  render() {
    // console.log('Console log is',  Auth.currentUserId());
    // console.log('This is the state', this.state.user);
    // console.log('We are the logged in user', Auth.currentUserId() === this.state.user.id);
    const user = this.state.user;
    return (
      <section>
        {user &&
            <div className="has-text-centered">
              <img src={user.profileImg} />
              <p>Followers: {user.followers.length}</p>
              <p>Following: {user.following.length}</p>

              <p className="title is-2">{user.username}</p>
              <p className="title is-2">{user.email}</p>
              <p className="has-text-centered">{user.boardType}</p>
              <img src={user.boardImg} />
              <p className="has-text-centered">{user.ridingStyle}</p>
              {user.boardMods.map((mod) =>
                <p key={mod._id} className="has-text-centered">{mod.tagname}</p>
              )}
              {Auth.currentUserId() === user._id.toString() &&
              <div className="columns buttons">
                <div className="column is-half">
                  <Link to={`/users/${user._id}/edit`} className="button is-warning is-rounded is-outlined">Edit</Link>
                </div>
                <div className="column is-half">
                  <button onClick={this.handleDelete} className="button is-danger is-rounded is-outlined">Delete</button>
                </div>
              </div>
              }
              {Auth.currentUserId() !== user._id.toString() &&
                <div className="column is-half">
                  <button onClick={this.handleFollow} className="button is-danger is-rounded is-outlined">Follow</button>
                </div>
              }
            </div>
        }
      </section>
    );
  }
}


export default UsersShow;
