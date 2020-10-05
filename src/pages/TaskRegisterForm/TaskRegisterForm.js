import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';
import { useForm } from 'react-hook-form';
import './TaskRegisterForm.css';

const TaskRegisterForm = () => {
  const [loggedInUser, setLoggedInUser, tasks, setTasks] = useContext(UserContext);

  const { register, handleSubmit, watch, errors } = useForm();

  let history = useHistory();
  const photo = tasks.pic;

  const onSubmit = (data) => {

    const taskDetails = { photo, newVolunteer: data, startingDate: new Date() };
    fetch('https://blooming-refuge-85311.herokuapp.com/newVolunteer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push('/task');
      });

  };

  return (
    <div className='text-center bg-light form-container'>
      <div className='py-4'>
        <Link to='/' className='navbar-brand'>
          <img className='brand-logo' src={logo} alt='logo' />
        </Link>
      </div>
      <div className='register-form text-left'>
        <h4 className='mb-4'>
          <strong>Register as a Volunteer</strong>
        </h4>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <input
            name='name'
            defaultValue={loggedInUser.name}
            ref={register({ required: true })}
            placeholder='Full Name'
          />
          {errors.name && <span className='error'>Name is required</span>}

          <input
            name='email'
            defaultValue={loggedInUser.email}
            ref={register({ required: true })}
            placeholder='Username or Email'
          />
          {errors.email && <span className='error'>Email is required</span>}

          <input type='date' name='date' placeholder='Date' require />

          <input
            name='description'
            ref={register({ required: true })}
            placeholder='Description'
          />
          {errors.description && (
            <p className='error'>Description is required</p>
          )}

          <input
            name='task'
            defaultValue={tasks.name}
            ref={register({ required: true })}
            placeholder='Organize books at the library'
          />
          {errors.task && <p className='error'>Task Name is required</p>}

          <input
            className='btn btn-primary'
            type='submit'
            value='Registration'
          />
        </form>
      </div>
    </div>
  );
};

export default TaskRegisterForm;
