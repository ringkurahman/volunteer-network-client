import React, { useState } from 'react';
import './VolunteerTask.css';


const VolunteerTask = ({ newTask }) => {
  const date = newTask.startingDate;

    const [update, setUpdate] = useState();

    const handleDeleteTask = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
    }

  return (
    <div className='col-md-6'>
      <div className='card m-2 flex-md-row'>
        <div>
          <img
            className='card-img-top p-3'
            style={{ width: '200px' }}
            src={require(`../../images/${newTask.photo}`)}
            alt=''
          />
        </div>
        <div className='card-body'>
          <h4>{newTask.newVolunteer.task}</h4>
          <p>{new Date(newTask.startingDate).toDateString('dd/MM/yyyy')}</p>
        </div>
        <div className='p-2'>
          <button
            onClick={() => handleDeleteTask(`${newTask._id}`)}
            className='btn btn-secondary'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerTask;
