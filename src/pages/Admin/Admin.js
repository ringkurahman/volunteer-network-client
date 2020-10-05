import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';
import userIcon from '../../logos/users-alt1.png';
import plushIcon from '../../logos/plus1.png';
import './Admin.css';
import AdminData from '../../components/AdminData/AdminData';


const Admin = () => {

    const [allNewTask, setAllNewTask] = useState([])

    useEffect(() => {
      fetch('https://blooming-refuge-85311.herokuapp.com/allVolunteer')
        .then((res) => res.json())
        .then((data) => setAllNewTask(data));
    }, [allNewTask]);

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
            <p>Volunteer Register List</p>
          </div>
          <div className='mt-5 bg-light p-3'>
            <div className='bg-white p-3'>
              <div className='mb-5 bg-light p-3'>
                <table style={{ width: '60vw' }}>
                  <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Registration date</th>
                    <th>Volunteer list</th>
                    <th>Action</th>
                  </tr>
                </table>
              </div>
              <div>
                {allNewTask.map((newTask) => (
                  <AdminData newUser={newTask} key={newTask._id}></AdminData>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
