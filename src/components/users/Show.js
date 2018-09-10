import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class UsersShow extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));
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
          <div className="has-text-centered">
            <img src={user.profileImg}/>
            <p className="title is-2">{user.email}</p>
            <p className="title is-2">{user.username}</p>
            <p className="has-text-centered">{user.boardType}</p>
            <img src={user.boardImg} />
            <p className="has-text-centered">{user.ridingStyle}</p>
            <p className="has-text-centered">{user.boardMods}</p>
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
      </section>
    );
  }
}


export default UsersShow;
