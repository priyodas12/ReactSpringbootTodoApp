import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { BrowserRouter as Router,Redirect, Route,Switch,Link} from 'react-router-dom'

export class AuthenticatedRoute extends Component {
    render() {
        if(AuthenticationService.isUserLoggedIn()){
          return <Route {...this.props}/>
        }else {
          return <Redirect to='/login'/>
        }
    }
}

export default AuthenticatedRoute
