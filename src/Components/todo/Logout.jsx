import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

export class Logout extends Component {
    render() {
        return (
            <div>
                <h3>Your are logged out!</h3>
                <div className='container'>
                    Thanks for Visiting!
                </div>
            </div>
        )
    }
}

export default Logout
