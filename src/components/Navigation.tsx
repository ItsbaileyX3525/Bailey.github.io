import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, GamepadIcon } from 'lucide-react';

export const Navigation: React.FC = () => {
  const linkClass = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700";
  const activeClass = "bg-gray-200 dark:bg-gray-700";

  return (
    <nav className="fixed top-0 left-0 h-full w-16 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 transition-all duration-300 md:w-64">
      <div className="flex flex-col gap-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''} justify-center md:justify-start`}
          title="Home"
        >
          <Home className="w-6 h-6 flex-shrink-0" />
          <span className="hidden md:inline">Home</span>
        </NavLink>
        <NavLink 
          to="/portfolio" 
          className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''} justify-center md:justify-start`}
          title="Portfolio"
        >
          <Briefcase className="w-6 h-6 flex-shrink-0" />
          <span className="hidden md:inline">Portfolio</span>
        </NavLink>
        <NavLink 
          to="/games" 
          className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''} justify-center md:justify-start`}
          title="Games"
        >
          <GamepadIcon className="w-6 h-6 flex-shrink-0" />
          <span className="hidden md:inline">Games</span>
        </NavLink>
      </div>
    </nav>
  );
};