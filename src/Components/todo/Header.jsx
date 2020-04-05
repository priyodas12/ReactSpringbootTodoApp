import React, { Component } from 'react'
import Loxagon from './loxagon.png';
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
          <header>
            <nav className='navbar navbar-expand-sm bg-primary navbar-dark'>
              <section className="one-fourth" id="html">
                  <img src={Loxagon} />
              </section>
              <a href='https://www.github.com/priyodas12' class='navbar-brand'>loxagon.io</a>
              <ul className='navbar-nav'>
                <li>
                  <Link className='nav-link' to='/welcome/priyodas12'>Home</Link>
                </li>
                <li>
                  <Link className='nav-link' to='/todos'>Todos</Link>
                </li>
              </ul>
              <ul className='navbar-nav navbar-collapse justify-content-end'>
                <li>
                  <Link className='nav-link' to='/login'>Sign in</Link>
                </li>
                <li>
                  <Link className='nav-link' to='/logout'>Logout</Link>
                </li>
              </ul>
            </nav>
          </header>
        )
    }
}

export default Header
