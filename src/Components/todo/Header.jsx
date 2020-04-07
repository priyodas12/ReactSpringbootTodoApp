import React, { Component } from 'react'
import Loxagon from './loxagon.png';
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';

export class Header extends Component {
    render() {
      const userStatus=AuthenticationService.isUserLoggedIn();
      console.log(userStatus);
        return (
          <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-secondary'>
              <a href="#">
                  <img src={Loxagon} style={{width:85, marginTop: -5}} alt='loxagon-img' />
              </a>
              <a href='https://www.github.com/priyodas12' className='navbar-brand' alt='github link'>loxagon.io</a>
              <ul className='navbar-nav'>
                <li>
                {userStatus && <Link className='nav-link' to='/welcome/priyodas12'>Home</Link>}
                </li>
                <li>
                  {userStatus && <Link className='nav-link' to='/todos'>Todos</Link>}
                </li>
              </ul>
              <ul className='navbar-nav navbar-collapse justify-content-end'>
                <li>
                  {!userStatus &&<Link className='nav-link' to='/login'>Sign in</Link>}
                </li>
                <li>
                  {userStatus && <Link className='nav-link' to='/logout' onClick={AuthenticationService.logout}>Logout</Link>}
                </li>
              </ul>
            </nav>
          </header>
        )
    }
}

export default withRouter(Header)
