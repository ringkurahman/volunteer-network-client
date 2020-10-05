import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';

const Nav = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
      <div className='container pt-3'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link to='/' className='navbar-brand'>
            <img className='brand-logo' src={logo} alt='logo' />
          </Link>
          <div className='collapse navbar-collapse show ml-sm-5 justify-content-end'>
            <ul className='navbar-nav'>
              <li className='navbar-item active'>
                <Link to='/' className='navbar-link text-dark letter-spacing'>
                  Home
                </Link>
                <Link
                  to='/destination'
                  className='navbar-link ml-md-5 ml-sm-2 text-dark letter-spacing'
                >
                  Destination
                </Link>
                <Link
                  to='/events'
                  className='navbar-link ml-5 text-dark letter-spacing'
                >
                  Events
                </Link>
                <Link
                  to='/blog'
                  className='navbar-link ml-5 text-dark letter-spacing'
                >
                  Blog
                </Link>
                <span className='ml-5 text-dark letter-spacing'>
                  <strong>{loggedInUser.name}</strong>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default Nav;