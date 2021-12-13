import React from 'react';
import { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './components/Auth';
import './App.css';
import { UserContext } from './context/UserProvider';
import Profile from './components/Profile';

function App() {

  const { token, logout } = useContext(UserContext)

  return (
    <div>
      {<Navbar logout={logout}/>}
      <Switch>
        <Route
        exact path = '/'
        render = {() => token ? <Redirect to='/profile' /> : <Auth/>}
        />
        <Route
        path = '/Profile'
        render = {() => <Profile/>}
        />
        <Route
        path = '/Issues'
        render = {() => <Issues/>}
        />
      </Switch>
    </div>
  );
}

export default App;
