import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TodoList from './components/TodoList';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentView, setCurrentView] = useState('welcome');

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data.todos));
  }, []);

  const showWelcome = () => setCurrentView('welcome');
  const showTodoList = () => setCurrentView('todoList');

  return (
    <div className="flex h-screen">
      <Sidebar 
        showSidebar={showSidebar} 
        setShowSidebar={setShowSidebar} 
        showWelcome={showWelcome} 
        showTodoList={showTodoList} 
      />
      <div className="flex-1 flex flex-col">
        <NavBar setShowSidebar={setShowSidebar} />
        <div className="flex-1 p-6">
          {currentView === 'welcome' && <Welcome />}
          {currentView === 'todoList' && <TodoList todos={todos} setTodos={setTodos} />}
        </div>
      </div>
    </div>
  );
};

export default App;