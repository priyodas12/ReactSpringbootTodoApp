import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class Login extends Component {
      constructor(props) {
        super(props)

        this.state = {
           username:'priyodas12',
           password:'ashjdkask',
           hasLoginFailed:false,
           showSuccessMessage:false
         }
         this.loginEventHandler=this.loginEventHandler.bind(this)
         this.loginHandler=this.loginHandler.bind(this)
       }

        loginEventHandler(event){
            //console.log(event.target.value)
                this.setState({
                  [event.target.name]:event.target.value
                })
              }
        loginHandler(){
          if(this.state.username==='priyodas12' && this.state.password==='ashjdkask' ){
            AuthenticationService.registerSuccessLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({hasLoginFailed:false})
            this.setState({showSuccessMessage:true})
          }else{
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
          }

        }

        render() {
          return (
            <div className='login-box'>
                <h1>Login Component</h1>
                <div className='userMessage'>

                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div className="alert alert-success">Login Successful</div>}
                </div>
                <form>
                  <div className="form-group">
                          <label>Username:</label>
                          <div>
                              <input type='text' name='username' value={this.state.username} onChange={this.loginEventHandler}/><br/><br/>
                          </div>
                          <label>Password:</label>
                          <div>
                              <input type='password' name='password' value={this.state.password} onChange={this.loginEventHandler}/> <br/><br/>
                          </div>
                          <button className='btn btn-success' onClick={this.loginHandler}>login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
