import React from 'react'
import { useAuth } from './AuthContext'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest}) {
  const { loggedUser } = useAuth()
  return (
    <Route 
    {...rest}
    render={(props) => {
       loggedUser ? <Component {...props} /> : <Redirect to='/login' />
    }}
    ></Route>
  )
}
