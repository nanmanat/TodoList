import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoToggle, onTodoEdit }) => {
  return (
    <div className="todo-list" style={{alignSelf: 'start'}}>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onTodoToggle={onTodoToggle} onTodoEdit={onTodoEdit}/>
      ))}
    </div>
  );
};

export default TodoList;
