import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-white hover:text-gray-300">
          <h1>Todo App</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/Task-Management-Application/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Task-Management-Application/mytask" className="hover:text-gray-300">
              My Tasks
            </Link>
          </li>
          <li>
            <Link to="/Task-Management-Application/editedtask" className="hover:text-gray-300">
              Edited Tasks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
