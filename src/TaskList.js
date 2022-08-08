import React from 'react';

export default function TaskList({ allTasks, handleDelete }) {
    return (
      <ul>
        {allTasks.map(({ title, description, id }) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button onClick={() => handleDelete(id)} className = "btn btn-primary">Delete Task</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }