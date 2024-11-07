import React, { useState } from 'react';
import Modal from './Modal';

const TodoList = ({ todos, setTodos }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Completed</th>
            <th className="px-4 py-2 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td className="px-4 py-2 border">{todo.todo}</td>
              <td className="px-4 py-2 border text-center">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
              </td>
              <td className="px-4 py-2 border text-center">
                <button onClick={() => deleteTodo(todo.id)} className="text-red-600">&#128465;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setShowModal(true)} className="mt-4 p-2 bg-blue-500 text-white rounded-lg">Add More Todo</button>
      <Modal showModal={showModal} setShowModal={setShowModal} addTodo={addTodo} />
    </div>
  );
};

export default TodoList;