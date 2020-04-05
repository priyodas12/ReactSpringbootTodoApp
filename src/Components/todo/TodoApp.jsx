import React, { Component } from 'react'
import Login from './Login'
import WelcomePage from './WelcomePage'
import ErrorPage from './ErrorPage'
import InvalidPage from './InvalidPage'
import ListTodoPage from './ListTodoPage'
import Header from './Header'
import Footer from './Footer'
import Logout from './Logout'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'

import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'

export class TodoApp extends Component {
    render() {

        return (
            <div className='todoApp'>
              <Router>
                <Header/>
                  <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" component={Login}/>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomePage}/>
                    <AuthenticatedRoute path="/todos" exact component={ListTodoPage}/>
                    <AuthenticatedRoute path="/logout" exact component={Logout}/>
                    {/*<Route path="/error" exact component={ErrorPage}/>*/}
                    <Route path="" exact component={InvalidPage}/>
                  </Switch>
                <Footer/>
              </Router>
              {/*<Login />
              <WelcomePage/>*/}
            </div>
        )
    }
}

export default TodoApp
