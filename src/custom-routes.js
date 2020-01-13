import React from 'react'
import { Route } from 'react-router-dom'
import SignupForm from './forms/signup-form'

export default [
  <Route key='signup' path='/signup' component={SignupForm} noLayout />
]
