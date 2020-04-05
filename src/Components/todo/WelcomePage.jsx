
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorld.js'

export class WelcomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message:""
        }
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
    }

    render() {
        return (
          <div>
            <div className='container'>
                <p>welcome to {this.props.match.params.name}@loxagon.io</p>
                You can manage your <Link to='/todos'>todo Here</Link>
            </div>
            <div className='container'>
                <p>CLick here to get customized greetings!</p>
                <button onClick={this.retrieveWelcomeMessage} className='btn btn-success'>Get WelcomeMessage</button>
            </div>
            <div className='container'>
                {this.state.message}
            </div>
          </div>
        )
    }
    retrieveWelcomeMessage(){
      console.log('welcome')
      {/*HelloWorldService.executeHelloWorldService()
      .then(response=>this.handleSuccessfulResponse(response))*/}

      {/*HelloWorldService.executeHelloWorldBeanService()
      .then(response=>this.handleSuccessfulResponse(response))*/}

      HelloWorldService.executeHelloWorldPathService(this.props.match.params.name)
      .then(response=>this.handleSuccessfulResponse(response))
    }

    handleSuccessfulResponse(response){
      console.log(response)
      this.setState({
        message:response.data.beanId
      }
    )

    }
}



export default WelcomePage
