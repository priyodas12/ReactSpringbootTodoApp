import React, { Component } from 'react'

export class ListTodoPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
             todos:[
               {id:1,name:'get up @8am',isDone:false,timeline:new Date()},
               {id:2,name:'finish react project',isDone:false,timeline:new Date()},
               {id:3,name:'cook on time',isDone:true,timeline:new Date()},
               {id:4,name:'go to market',isDone:false,timeline:new Date()}
             ]
        }
    }

    render() {
        return (
            <div>
              <h3>List ToDos</h3>
              <div className='container'>
                <table className="table table-striped table-borderless">
                    <thead className='thead-dark'>
                        <tr>
                            <th>Id</th>
                            <th>Desc</th>
                            <th>Status</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.todos.map(todo=>
                          <tr key={todo.id}>
                              <td>{todo.id}</td>
                              <td>{todo.name}</td>
                              <td>{todo.isDone.toString()}</td>
                              <td>{todo.timeline.toString()}</td>
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
