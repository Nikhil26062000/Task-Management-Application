import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-white hover:text-gray-300">
          Todo App
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/mytask" className="hover:text-gray-300">
              My Tasks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
