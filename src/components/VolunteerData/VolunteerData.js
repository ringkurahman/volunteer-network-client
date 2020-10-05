import React, { useEffect, useState } from 'react';
import VolunteerTasks from '../VolunteerTasks/VolunteerTasks';
import './VolunteerData.css';

const VolunteerData = () => {
  
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => setAllTasks(data));
  }, [])

  return (
    <div className='container mb-5' id='task-container'>
      <div className='row justify-content-center'>
        {allTasks.map((task) => (
          <VolunteerTasks task={task} key={task._id}></VolunteerTasks>
        ))}
      </div>
    </div>
  );
};

export default VolunteerData;
