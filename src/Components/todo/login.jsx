import React, { Component } from 'react'
import ShowSuccessMessageDetails from './ShowSuccessMessageDetails'
import ShowInvalidCredentails from './ShowInvalidCredentails'

class Login extends Component {
      constructor(props) {
        super(props)

        this.state = {
           username:'priyodas12',
           password:'ashjdkask',
           hasLoginFailed:false,
           showSuccessMessage:false
         }
         {/*this.usernameChangeHandler=this.usernameChangeHandler.bind(this);
         this.passwordChangeHandler=this.passwordChangeHandler.bind(this);*/}
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
            {/*console.log("login Successfull!")*/}
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({hasLoginFailed:false})
            this.setState({showSuccessMessage:true})
          }else{
            {/*console.log("login Failed!")*/}
            {/*this.props.history.push('/error')*/}
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
          }

        }

        render() {
          return (
            <div className='login-box'>
                <h1>Login Component</h1>
                <div className='userMessage'>
                    {/*<ShowInvalidCredentails hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowSuccessMessageDetails showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {/*is first variable is true then below expression will return 2nd string variable value*/}
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
