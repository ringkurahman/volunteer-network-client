import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Nav from '../../components/Nav/Nav';
import VolunteerTask from '../../components/VolunteerTask/VolunteerTask';

const Task = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  const [newTasks, setNewTasks] = useState([]);

  useEffect(() => {
    fetch(
      'https://blooming-refuge-85311.herokuapp.com/newVolunteer?email=' +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setNewTasks(data));
  }, [newTasks]);

  return (
    <div className='bg-light'>
      <Nav></Nav>
      <div className='container my-5'>
        <div className='row justify-content-center'>
          {newTasks.map((newTask) => (
            <VolunteerTask newTask={newTask} key={newTask._id}></VolunteerTask>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
