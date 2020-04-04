
import React, { Component } from 'react'

export class WelcomePage extends Component {
    render() {
        return (
            <div>
                <p>welcome to {this.props.match.params.name}@workspace.io</p>
            </div>
        )
    }
}

export default WelcomePage
