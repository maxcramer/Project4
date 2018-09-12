import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Auth from '../../lib/Auth';


class UsersIndex extends React.Component {
  state = {}

  componentDidMount() { // gets all of the journeys
    axios.get('/api/users')

      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      });
  }

  render() {
    const users = this.state.users || [];

    return(
      <section>
        <main>
          <span>
            { users && users.map(user =>
              <div className=" is-multiline userIndexPad" key={user._id}>
                <Link to={`/users/${user._id}`}>
                  <h3 className="subtitle is-2 label">{user.username} </h3>
                  <img className="profileImg" src={user.profileImg} /><img className="userIndexBI" src={user.boardImg}/>

                </Link>
                <hr/>
              </div>
            )}
          </span>
        </main>
      </section>
    );
  }
}


export default UsersIndex;
