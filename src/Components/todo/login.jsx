import React, { Component } from 'react'

export class Login extends Component {
      constructor(props) {
        super(props)

        this.state = {
           username:'priyodas12@gmail.com',
           password:'ashjdkask'
         }
         {/*this.usernameChangeHandler=this.usernameChangeHandler.bind(this);
         this.passwordChangeHandler=this.passwordChangeHandler.bind(this);*/}
         this.loginEventHandler=this.loginEventHandler.bind(this)
       }

        loginEventHandler(event){
            console.log(event.target.value)
                this.setState({
                  [event.target.name]:event.target.value
                })
              }

       
       render() {
          return (
            <div className='login'>
                <p>Login Component</p>
                Username:
                <input type='text' name='username' value={this.state.username} onChange={this.loginEventHandler}/><br/><br/>
                Password:
                <input type='password' name='password' value={this.state.password} onChange={this.loginEventHandler}/> <br/><br/>
                <button>login</button>
            </div>
        )
    }
}

export default Login
