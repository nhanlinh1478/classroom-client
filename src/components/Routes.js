import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import About from './pages/About'
import Home from './pages/Home.js'
import Register from './authentication/Register'
import Login from './authentication/Login'
import ActivationEmail from './authentication/ActivationEmail'
import NotFound from './pages/NotFound'
import DetailClassroom from './pages/DetailClassroom'
import JoinClassroom from './classroom/JoinClassroom'
import AcceptInvite from './classroom/AcceptInvite'
import UserList from './classroom/UserList'
import Profile from './Profile'
<<<<<<< HEAD
=======

>>>>>>> 5083ada360cd6f56e7fcab9786b83000f45c4230
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
          <Route path="/activateEmail/:activation_token">
            <ActivationEmail />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute path="/about" component={About} />
          <ProtectedRoute path="/profile" component={Profile} />
<<<<<<< HEAD
          <ProtectedRoute path="/classrooms/join" component={JoinClassroom} />

=======
          <ProtectedRoute
            exact
            path="/classrooms/join"
            component={JoinClassroom}
          />
          <ProtectedRoute
            exact
            path="/classrooms/join/accept-token"
            component={AcceptInvite}
          />
>>>>>>> 5083ada360cd6f56e7fcab9786b83000f45c4230
          <ProtectedRoute
            exact
            path="/classrooms/:id"
            component={DetailClassroom}
          />
          <ProtectedRoute
            exact
            path="/classrooms/:id/user-list"
            component={UserList}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
