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


  render() {
    console.log(this.state.user);
    const user = this.state.user;
    return (
      <section>
        {user &&
          <h1>
            {this.state.currentUserId === this.state.user.id &&
            <div className="has-text-centered">
              <img src={user.profileImg} />
              <p className="title is-2">{user.email}</p>
              <p className="title is-2">{user.username}</p>
              <p className="has-text-centered">{user.boardType}</p>
              <img src={user.boardImg} />
              <p className="has-text-centered">{user.ridingStyle}</p>
              {user.boardMods.map((mod) =>
                <p key={mod._id} className="has-text-centered">{mod.tagname}</p>
              ) }
              <div className="columns buttons">
                <div className="column is-half">
                  <Link to={`/users/${user._id}/edit`} className="button is-warning is-rounded is-outlined">Edit</Link>
                </div>
                <div className="column is-half">
                  <button onClick={this.handleDelete} className="button is-danger is-rounded is-outlined">Delete</button>
                </div>
              </div>
            </div>
            }
            {!Auth.isAuthenticated() && this.state.currentUserId === this.state.user.id &&
                  <div className="has-text-centered">
                    <img src={user.profileImg}/>
                    <p className="title is-2">{user.email}</p>
                    <p className="title is-2">{user.username}</p>
                    <p className="has-text-centered">{user.boardType}</p>
                    <img src={user.boardImg} />
                    <p className="has-text-centered">{user.ridingStyle}</p>
                    {user.boardMods.map((mod) =>
                      <p key={mod._id} className="has-text-centered">{mod.tagname}</p>
                    ) }
                    <div className="columns buttons">
                      <div className="column is-half">
                        <Link to={`/users/${user._id}/edit`} className="button is-warning is-rounded is-outlined">Edit</Link>
                      </div>
                      <div className="column is-half">
                        <button onClick={this.follow} className="button is-danger is-rounded is-outlined">Follow</button>
                      </div>
                      <div className="column is-half">
                        <button onClick={this.handleDelete} className="button is-danger is-rounded is-outlined">Delete</button>
                      </div>
                    </div>
                  </div>

            }
          </h1>
        }
      </section>
    );
  }
}


export default UsersShow;
