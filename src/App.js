import React, { useState } from 'react';
import NewTask from './NewTask';
import TaskList from './TaskList';
import './index.css';

function App() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);


const handleChange = ({ target }) => {
  const { name, value } = target;
  setNewTask((prev)=> ({...prev, id:Date.now(), [name]: value}))
}

const handleSubmit = (e) => {
  e.preventDefault();
  setAllTasks([...allTasks, newTask]);
  setNewTask ({})
}


const handleDelete = (taskIdToRemove) => {
  setAllTasks((prev) => prev.filter(
    (task) => task.id !== taskIdToRemove
  ));
}



  return (
    <div className="MainApp">
      <img src='https://i.ytimg.com/vi/0KaKNna5ACY/mqdefault.jpg'/>
      <h1 className = "App">
        To do List
      </h1>
      <div className = "app-container" >
      <NewTask
      newTask = {newTask}
      handleChange = {handleChange}
      handleSubmit = {handleSubmit}
      />
      <TaskList
      allTasks = {allTasks}
      handleDelete = {handleDelete}
      />
      </div>
    </div>
  );
}

export default App;
