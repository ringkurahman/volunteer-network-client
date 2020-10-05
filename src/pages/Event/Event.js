import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import userIcon from '../../logos/users-alt1.png';
import plushIcon from '../../logos/plus1.png';
import { useForm } from 'react-hook-form';

const Event = () => {
  const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {

    const taskEvent = { ...data };
        
    fetch('http://localhost:5000/newEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskEvent),
    })
      .then((res) => res.json())
        .then((data) => {
          alert('Event successfully submitted but image issue thats why limited homepage task upload');
      });
  };

  return (
    <div className='' style={{ width: '90vw' }}>
      <div className='row admin-container justify-content-lg-between'>
        <div className='m-3 col-md-3'>
          <Link to='/' className='navbar-brand'>
            <img className='brand-logo' src={logo} alt='logo' />
          </Link>
          <div className='mt-4 text-primary'>
            <Link to='/admin'>
              <img style={{ height: '25px' }} src={userIcon} alt='' />
              <span className='pl-2'>Volunteer Register List</span>
            </Link>
          </div>
          <div className='mt-4'>
            <Link to='/events'>
              <img style={{ height: '25px' }} src={plushIcon} alt='' />
              <span className='pl-2 text-dark'>Add Event</span>
            </Link>
          </div>
        </div>
        <div className='col-md-9 mt-4 ml-4'>
          <div>
            <p>Add Event</p>
          </div>
          <div className='mt-5 bg-light p-3'>
            <form action='' onSubmit={handleSubmit(onSubmit)}>
              <div className='bg-white p-3 d-flex'>
                <div className='col-md-6'>
                  <p>Event Title:</p>
                  <input name='name' ref={register({ required: true })} />
                  {errors.name && (
                    <span className='error'>Title is required</span>
                  )}

                  <p>Description:</p>
                  <textarea name='message' cols='30' rows='5'></textarea>
                </div>
                <div className='col-md-6'>
                  <p>Event Date:</p>
                  <input type='date' name='date' placeholder='Date' require />
                  <p>Banner:</p>
                  <input type='file' name='uploadfile' id='' />
                </div>
              </div>
              <input
                className='btn btn-primary my-2'
                type='submit'
                value='Submit'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
