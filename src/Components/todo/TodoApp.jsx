import React, { Component } from 'react'
import Login from './Login'

export class TodoApp extends Component {
    render() {
        return (
            <div className='todoApp'>
              <p>Todo Application!</p>
              <Login />
            </div>
        )
    }
}

export default TodoApp
