import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

export class ListTodoPage extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
             todos:[]
        }
    }
    componentWillUnmount(){
      console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log('shouldComponentUpdate');
      console.log(nextProps);
      console.log(nextState);
      return false
    }

    componentDidMount(){
      console.log('componentDidMount');
      let username=AuthenticationService.getLoggedInUsername()
      TodoDataService.rerieveAllTodos(username)
      .then(
        response=>{
          console.log(response)
          this.setState({
            todos:response.data
          })
        }
      )

    }

    render() {
         console.log('render')
         return (
            <div>
              <h3>List ToDos</h3>
              <div className='container'>
                <table className="table table-striped table-borderless">
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>desc</th>
                            <th>TargetDate</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.todos.map(todo=>
                          <tr key={todo.id}>
                              <td>{todo.id}</td>
                              <td>{todo.desc}</td>
                              <td>{todo.targetDate}</td>
                              <td>{todo.status.toString()==='true'?'Done':'Pending'}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
              </div>
            </div>
        )
    }
}

export default ListTodoPage
