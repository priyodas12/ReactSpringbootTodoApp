
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'

export class WelcomePage extends Component {
    render() {
        return (
            <div>
                <p>welcome to {this.props.match.params.name}@workspace.io</p>
                You can manage your <Link to='/todos'>todo Here</Link>
            </div>
        )
    }
}

export default WelcomePage
