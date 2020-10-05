import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Default from './pages/Default/Default';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TaskRegisterForm from './pages/TaskRegisterForm/TaskRegisterForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Task from './pages/Task/Task';
import Event from './pages/Event/Event';
import Blog from './pages/Blog/Blog';
import Admin from './pages/Admin/Admin';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [tasks, setTasks] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, tasks, setTasks]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/taskRegisterForm'>
          <TaskRegisterForm />
          </PrivateRoute>
          <PrivateRoute path='/task'>
            <Task />
          </PrivateRoute>
          <Route path='/events'>
            <Event />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
        <Route path='*'>
          <Default />
        </Route>
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
