import React, { Component } from 'react'


export class Header extends Component {
    render() {
        return (
          <header>
            <nav className='navbar navbar-expand-md'>
              <a href='#' class='navbar-brand'>Priyo</a>
              <ul className='navbar-nav'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>todos</li>
              </ul>
              <ul className='navbar-nav'>
                <li className='nav-link'>login</li>
                <li className='nav-link'>logout</li>
              </ul>
            </nav>
          </header>
        )
    }
}

export default Header
