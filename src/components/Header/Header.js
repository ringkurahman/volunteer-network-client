import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <header className='header-hero'>
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
                  to='/task'
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
                <Link
                  to='/login'
                  className='btn btn-primary btn-lg button-font ml-md-5'
                >
                  <span className='ml-2 mr-2 text-white font-weight-bold letter-spacing'>
                    {loggedInUser.email
                      ? loggedInUser.name.slice(0, 6)
                      : 'Register'}
                  </span>
                </Link>
                <Link
                  to='/admin'
                  className='btn btn-dark btn-lg button-font ml-2'
                >
                  <span className='ml-2 mr-2 text-white font-weight-bold letter-spacing'>
                    Admin
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className='text-center text-uppercase mt-lg-5'>
          I Grow by Helping People in Need.
        </h1>
        <div className='input-group col-md-6 m-auto mt-lg-4'>
          <input
            type='text'
            name='search'
            className='form-control'
            placeholder='search'
          />
          <div className='input-group-append'>
            <button
              type='submit'
              className='input-group-text bg-primary text-white input-round'
            >
              <FontAwesomeIcon icon={faSearch} />
              <span className='ml-1'>Search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
