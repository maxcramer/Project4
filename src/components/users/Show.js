import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class UsersShow extends React.Component {
  state = {}

  deleteTag = (tagId) => {
    return () => {
      console.log(`Delete tag ${tagId}`);
      const userId = this.props.match.params.id;
      axios.delete(`/api/user/${userId}/tags/${tagId}`)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log('Error Deleting.', err));
    };
  }

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
    console.log(Auth.bearerHeader());
    console.log('This is the props', this.props.match.params.id);
    axios.post(`/api/users/${this.props.match.params.id}/followers`, null, Auth.bearerHeader())
      .then(res => this.setState({ user: res.data }, () => console.log('These are the followers', res.data)));
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id){
      axios.get(`/api/users/${this.props.match.params.id}`)
        .then(res => this.setState({ user: res.data }));
    }
  }

  createTag = (event) => {
    event.preventDefault();
    const userId = this.props.match.params.id;
    const tagData = {
      tagname: this.state.newTag,
      addedBy: Auth.currentUserId()
    };
    axios.post(`/api/users/${userId}/tags`, tagData )
      .then(res => this.setState({
        user: res.data, showNewTagForm: false, newTag: ''
      }))
      .catch(err => console.log(err));
  }

  render() {
    // console.log('Console log is',  Auth.currentUserId());
    // console.log('This is the state', this.state.user);
    // console.log('We are the logged in user', Auth.currentUserId() === this.state.user.id);
    const user = this.state.user;
    return (
      <section>
        {user &&
            <div className="journeyIndex">
              <div className="is-multiline userName">
                <p className="label userName">{user.username}</p>
              </div>
              <div className="imgDiv">
                <img className="profilePic" src={user.profileImg} />
              </div>
              <div className="followDiv">
                <p className="title is-4 borderFix follow">Followers: {user.followers.length}</p>
                <p className="title is-4 follow">Following: {user.following.length}</p>
              </div>
              <p className="label">Board Image: </p>
              <img className="profileBoardImg" src={user.boardImg} />
              <div className="container">
                <div className="profileText">
                  <p className="label">Email: {user.email}</p>
                  <p className="label">Board Type: {user.boardType}</p>
                  <p className="label">Ride Style: {user.ridingStyle}</p>
                  {user.boardMods.map((mod) =>
                    <p key={mod._id} className="label">Board Modifications: {mod.tagname}</p>
                  )}
                </div>
              </div>
              {/* <div>
                <span onDoubleClick={this.toggleNewTagForm}>Tags: </span>
                {this.state.showNewTagForm ?
                  <form onSubmit={this.createTag}>
                    <input name="newTag" onChange={this.handleChange} value={this.state.newTag || ''} />
                  </form>
                  :
                  user.tags.map(tag =>
                    <span key={tag._id} className="tag">
                      {tag.tagname} <button className="delete" onClick={this.deleteTag(tag._id)}></button>
                    </span>
                  )}
              </div> */}
              {Auth.currentUserId() === user._id.toString() &&
              <div className="columns buttons profileButton has-text-centered">
                <div className="column is-half ">
                  <Link to={`/users/${user._id}/edit`} className="button is-warning is-rounded is-outlined">Edit</Link>
                </div>
                <div className="column is-half">
                  <button onClick={this.handleDelete} className="button is-danger is-rounded is-outlined">Delete</button>
                </div>
              </div>
              }
              {Auth.currentUserId() !== user._id.toString() &&
                <div className="column is-center profileButton has-text-centered">
                  <button onClick={this.handleFollow} className="button is-info is-rounded is-outlined">Follow</button>
                </div>
              }
            </div>
        }
      </section>
    );
  }
}


export default UsersShow;
