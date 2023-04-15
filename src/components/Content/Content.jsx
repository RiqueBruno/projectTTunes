import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Search from '../../pages/Search/Search';
import Album from '../../pages/Album/Album';
import Favorites from '../../pages/Favorites/Favorites';
import Profile from '../../pages/Profile/Profile';
import ProfileEdit from '../../pages/Profile/ProfileEdit';
import NotFound from '../../pages/NotFound/NotFound';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
