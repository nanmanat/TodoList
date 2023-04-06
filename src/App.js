import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task => {
    const newTodo = { id: todos.length + 1, task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleTodoToggle = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    const completedTodos = updatedTodos.filter(todo => todo.completed === false);

    setTodos(completedTodos);
  };

  const handleTodoEdit = (id, newTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#E3CCAE', height: '100vh'}}>
      <div className="app" style={{width: '25%', alignSelf: 'center', backgroundColor:'#454545', padding: 20, borderRadius: 15}}>
        <h1 style={{textAlign: 'center', color: '#fff'}}>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} onTodoToggle={handleTodoToggle} onTodoEdit={handleTodoEdit} />
      </div>
    </div>
    
  );
};

export default App;
