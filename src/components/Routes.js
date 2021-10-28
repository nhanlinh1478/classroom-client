import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import About from './About'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Navbar from './Navbar'
import NotFound from './NotFound'

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute path="/about" component={About} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
