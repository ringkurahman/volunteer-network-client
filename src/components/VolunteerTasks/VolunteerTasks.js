import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const VolunteerTasks = ({ task }) => {

  const [loggedInUser, setLoggedInUser, tasks, setTasks] = useContext(UserContext);

 const handleClick = (event) => {
    setTasks(event)
  }

    return (
      <div className='card m-2' style={{ width: '16rem' }}>
        <Link to='/taskRegisterForm' onClick={() => handleClick(task)}>
          <img
            className='card-img-top'
            style={{ height: '300px' }}
            src={require(`../../images/${task.pic}`)}
            alt=''
          />
          <div className='card-body text-center'>
            <h4>{task.name}</h4>
          </div>
        </Link>
      </div>
    );
};

export default VolunteerTasks;
