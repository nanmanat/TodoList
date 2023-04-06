import React, { useState } from 'react';

const Todo = ({ todo, onTodoToggle, onTodoEdit }) => {
    const [editing, setEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleTodoToggle = () => {
        onTodoToggle(todo.id);
    };

    const handleTaskChange = e => {
        setTask(e.target.value);
    };

  const handleTodoEdit = () => {
    if (editing) {
        onTodoEdit(todo.id, task);
        setEditing(false);
    } else {
        setEditing(true);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
        handleTodoEdit();
    }
  };

  return (
    <div className="todo" style={{display:'flex', marginBottom: 10, justifyContent: 'space-between', color: '#fff'}}>
        <label >
            <input type="checkbox" checked={todo.completed} onChange={handleTodoToggle}/>
            {editing ? (
            <input type="text" value={task} onChange={handleTaskChange} onKeyPress={handleKeyPress} />
            ) : (
            <span>{task}</span>
            )}
        </label>
        <div>
            <button onClick={handleTodoEdit} style={{ backgroundColor: '#0288d1', outline: 'none', border: 'none', borderRadius: 3, marginRight: 5, color: '#fff' }}>{editing ? 'Save' : 'Edit'}</button>
            <button onClick={handleTodoToggle} style={{ backgroundColor: '#f44336', outline: 'none', border: 'none', borderRadius: 3, color: '#fff' }}>Delete</button>
        </div>
          
    </div>
  );
};

export default Todo;
