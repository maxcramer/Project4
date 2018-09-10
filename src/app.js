import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './scss/style.scss';

// COMPONENTS
import SecureRoute from './components/common/SecureRoute';
import Header from './components/Header';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import UsersShow from './components/users/Show';
import JourneysIndex from './components/journeys/Index';
import EventsIndex from './components/events/Index';
import JourneysShow from './components/journeys/Show';
import EventsShow from './components/events/Show';
import EventEdit from './components/events/Edit';
import JourneysEdit from './components/journeys/Edit';
import JourneysNew from './components/journeys/New';
import EventsNew from './components/events/New';



class App extends React.Component {
  render() {
    return(
      <main>
        <Header />
        <Switch>
          <Route exact path="/login" component={AuthLogin} />
          <Route exact path="/register" component={AuthRegister} />
          <Route path="/user/:id" component={UsersShow} />
          <Route exact path="/events" component={EventsIndex} />
          <Route exact path="/journeys" component={JourneysIndex} />
          <Route path="/journeys/new" component={JourneysNew} />
          <Route path="/events/new" component={EventsNew} />
          <Route path="/journeys/:id/edit" component={JourneysEdit} />
          <Route path="/events/:id/edit" component={EventEdit} />
          <Route path="/journeys/:id" component={JourneysShow} />
          <Route path="/events/:id" component={EventsShow} />
        </Switch>
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
