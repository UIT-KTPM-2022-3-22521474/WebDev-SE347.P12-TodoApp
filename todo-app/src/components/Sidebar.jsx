import React from 'react';
import { FaHome, FaCheckCircle } from 'react-icons/fa';

const Sidebar = ({ showSidebar, setShowSidebar, showWelcome, showTodoList }) => (
  <div className={`fixed inset-y-0 left-0 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out bg-purple-600 dark:bg-purple-800 text-white p-4`}>
    <button onClick={() => setShowSidebar(false)} className="text-xl">&#10005;</button>
    <nav className="mt-4">
      <ul>
        <li className="mt-4 flex items-center space-x-2 cursor-pointer" onClick={() => { showWelcome(); setShowSidebar(false); }}>
          <FaHome />
          <span>Home</span>
        </li>
        <li className="mt-4 flex items-center space-x-2 cursor-pointer" onClick={() => { showTodoList(); setShowSidebar(false); }}>
          <FaCheckCircle />
          <span>View Todo</span>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;