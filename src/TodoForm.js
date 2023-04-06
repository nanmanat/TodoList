import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex', marginBottom: 10, justifyContent: 'space-between'}}>
        <input
            style={{width:'75%'}}
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Add todo..."
          />
        <button onClick={handleSubmit} style={{ backgroundColor: '#388e3c', outline: 'none', border: 'none', borderRadius: 3, color: '#fff' }}>Add</button>
          
      
    </form>
  );
};

export default TodoForm;
