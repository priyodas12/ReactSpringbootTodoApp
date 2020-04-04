import React, { Component } from 'react'
import Login from './Login'
import WelcomePage from './WelcomePage'
import ErrorPage from './ErrorPage'
import { BrowserRouter as Router, Route} from 'react-router-dom'

export class TodoApp extends Component {
    render() {
        return (
            <div className='todoApp'>
              <p>Todo Application!</p>
              <Router>
                  <Route path="/" exact component={Login}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/welcome" component={WelcomePage}/>
                  <Route path="/error" exact component={ErrorPage}/>
              </Router>
              {/*<Login />
              <WelcomePage/>*/}
            </div>
        )
    }
}

export default TodoApp
