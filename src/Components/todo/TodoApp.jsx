import React, { Component } from 'react'
import Login from './Login'
import WelcomePage from './WelcomePage'
import ErrorPage from './ErrorPage'
import InvalidPage from './InvalidPage'
import ListTodoPage from './ListTodoPage'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'

export class TodoApp extends Component {
    render() {
        return (
            <div className='todoApp'>
              <p>Todo Application!</p>
              <Router>
                <Switch>
                  <Route path="/" exact component={Login}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/welcome/:name" component={WelcomePage}/>
                  <Route path="/todos" exact component={ListTodoPage}/>
                  {/*<Route path="/error" exact component={ErrorPage}/>*/}
                  <Route path="" exact component={InvalidPage}/>

                </Switch>
              </Router>
              {/*<Login />
              <WelcomePage/>*/}
            </div>
        )
    }
}

export default TodoApp
