import React, { Component } from 'react'
import ShowSuccessMessageDetails from './ShowSuccessMessageDetails'
import ShowInvalidCredentails from './ShowInvalidCredentails'

class Login extends Component {
      constructor(props) {
        super(props)

        this.state = {
           username:'priyodas12@gmail.com',
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
            console.log(event.target.value)
                this.setState({
                  [event.target.name]:event.target.value
                })
              }
        loginHandler(){
          if(this.state.username==='priyodas12@gmail.com' && this.state.password==='ashjdkask' ){
            {/*console.log("login Successfull!")*/}
            this.setState({hasLoginFailed:false})
            this.setState({showSuccessMessage:true})
          }else{
            {/*console.log("login Failed!")*/}
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
          }

        }

        render() {
          return (
            <div className='login'>
                <p>Login Component</p>
                <div className='userMessage'>
                    <ShowInvalidCredentails hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowSuccessMessageDetails showSuccessMessage={this.state.showSuccessMessage}/>
                </div>
                Username:
                <input type='text' name='username' value={this.state.username} onChange={this.loginEventHandler}/><br/><br/>
                Password:
                <input type='password' name='password' value={this.state.password} onChange={this.loginEventHandler}/> <br/><br/>
                <button onClick={this.loginHandler}>login</button>
            </div>
        )
    }
}

export default Login
