import React from 'react';

export default function NewTask({ newTask, handleChange, handleSubmit }){
    return(
        <form onSubmit={handleSubmit}>
            <input 
            name = "title"
            placeholder = "Add a new task"
            value = {newTask.title || ""}
            onChange = {handleChange}
            />
            {!newTask.title ? null : (
        <>
          <button type="submit">Add Task</button>
        </>
      )}
    </form>
    )
}