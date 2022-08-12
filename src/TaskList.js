import React from 'react';


export default function TaskList({ allTasks, handleDelete }) {
    return (
      <ul>
        {allTasks.map(({ title, description, id }) => (
          <li key={id}>
            <div className='task_list'>
              <img width="50px" height="50px" src='https://yt3.ggpht.com/ytc/AMLnZu9roh85gUlRfcJWqqe-F-P-iS3kprPnL8tTPppcog=s900-c-k-c0x00ffffff-no-rj'></img>
              <h2>{title}</h2>
              <button onClick={() => handleDelete(id)} className = "btn btn-primary">Delete Task</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }