import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './AdminData.css';
import { Link } from 'react-router-dom';

const AdminData = ({ newUser }) => {
    
  const handleDeleteTask = (id) => {
    fetch(`http://localhost:5000/adminDelete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className='d-flex justify-content-between mt-1 mx-3'>
      <p>{newUser.newVolunteer.name}</p>
      <p>{newUser.newVolunteer.email}</p>
      <p>{new Date(newUser.startingDate).toDateString('dd/MM/yyyy')}</p>
      <p>{newUser.newVolunteer.task}</p>
      <p>
        <Link>
          <button
            onClick={() => handleDeleteTask(`${newUser._id}`)}
            className='color-white'
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </Link>
      </p>
    </div>
  );
};

export default AdminData;
