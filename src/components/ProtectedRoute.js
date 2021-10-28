import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axiosClient from '../axiosClient'
import Navbar from './Navbar'

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = !!localStorage.getItem('token')
  axiosClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <div>
            <Navbar />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default ProtectedRoute
