import React from 'react';

const NavBar = ({ setShowSidebar }) => {
  return (
    <nav className="bg-purple-600 dark:bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => setShowSidebar(true)} className="text-xl">&#9776;</button>
        <h1 className="text-xl font-bold">Todo App - To Vinh Tien - 22521474</h1>
      </div>
    </nav>
  );
};

export default NavBar;