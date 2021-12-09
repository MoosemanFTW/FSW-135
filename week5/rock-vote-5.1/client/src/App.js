import React from 'react';
import { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './components/Auth';
import './App.css';
import { UserContext } from './context/UserProvider';
import Profile from './components/Profile';

function App() {

  const { token } = useContext(UserContext)

  return (
    <div>
      {<Navbar/>}
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
