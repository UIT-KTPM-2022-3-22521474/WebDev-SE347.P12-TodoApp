import React, { useState } from 'react';

const Modal = ({ showModal, setShowModal, addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Enter new todo"
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mr-2 p-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;