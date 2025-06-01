import React, { useState } from "react";
import {Link} from "react-router-dom"
import {Tooltip} from "react-tooltip";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

import {
  HomeIcon,
  PhoneIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
const Navbar: React.FC = () =>
{
 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  ;

  return (
    <nav className="dark:bg-gray-900 dark:text-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <div className=" font-bold text-3xl font-mono">Portfolio</div>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-4 text-2xl font-mono"
          style={{ fontVariant: "small-caps", letterSpacing: "0.1em" }}
        >
          <li>
            <Link
              to="/home"
              className=" px-3 py-2 rounded-md font-medium "
              data-tooltip-id="home-tooltip"
              data-tooltip-content="Home"
              data-tooltip-place="bottom"
            >
              <HomeIcon className="inline-block w-6 h-6 mr-1 mb-1 " />
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about"
              className="px-3 py-2 rounded-md font-medium"
              data-tooltip-id="about-tooltip"
              data-tooltip-content="About"
              data-tooltip-place="bottom"
            >
              <UserIcon className="inline-block w-6 h-6 mr-1 mb-1" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className=" px-3 py-2 rounded-md font-medium"
              data-tooltip-id="projects-tooltip"  
              data-tooltip-content="Projects"
              data-tooltip-place="bottom"
            >
              <BookOpenIcon className="inline-block w-6 h-6 mr-1 mb-1 " />
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className=" px-3 py-2 rounded-md font-medium"
              data-tooltip-id="contact-tooltip"
              data-tooltip-content="Contact"  
              data-tooltip-place="bottom"
            >
              <PhoneIcon className="inline-block w-6 h-6 mr-1 mb-1" />
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <Tooltip id="home-tooltip" />
        <Tooltip id="about-tooltip" />
        <Tooltip id="projects-tooltip" />
        <Tooltip id="contact-tooltip" />

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden  px-4 pb-4 space-y-2">
          <li>
            <Link
              to="/home"
              className="block px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block  px-3 py-2 rounded-md font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block  px-3 py-2 rounded-md font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block  px-3 py-2 rounded-md font-medium"
            >
              Contact
            </Link>
          </li>
          <li className="ml-3 ">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
