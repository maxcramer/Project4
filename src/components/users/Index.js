import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';


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
          { users && users.map(user =>
            <div className="columns is-multiline" key={user._id}>
              <Link to={`/users/${user._id}`}>
                <img src={user.profileImg} />
                <h3 className="title is-3"
                  style={{ color: 'steelblue' }}>
                  {user.username}
                </h3>
              </Link>
            </div>
          )}
        </main>
      </section>
    );
  }
}


export default UsersIndex;
