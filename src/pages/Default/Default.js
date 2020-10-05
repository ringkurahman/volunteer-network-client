import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => {
    return (
      <div className='container-fluid'>
        <div className='row align-items-center header-hero'>
          <div className='col text-center'>
            <h1 className='text-dark text-uppercase display-3 letter-spacing'>
              404!
            </h1>
            <p className='text-dark display-4'>
              Your choice does not match any volunteer task
            </p>
            <Link
              to='/'
              className='text-uppercase btn btn-secondary btn-lg mt-3'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Default;