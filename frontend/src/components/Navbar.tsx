import React, { useState } from "react";
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
        <div className=" font-bold text-orange-500"></div>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-4 text-xl"
          style={{ fontVariant: "small-caps" }}
        >
          <li>
            <a
              href="#home"
              className=" px-3 py-2 rounded-md font-medium "
              data-tooltip-id="home-tooltip"
              data-tooltip-content="Home"
              data-tooltip-place="bottom"
            >
              <HomeIcon className="inline-block w-6 h-6 mr-1 mb-1 " />
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-3 py-2 rounded-md font-medium"
              data-tooltip-id="about-tooltip"
              data-tooltip-content="About"
              data-tooltip-place="bottom"
            >
              <UserIcon className="inline-block w-6 h-6 mr-1 mb-1" />
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className=" px-3 py-2 rounded-md font-medium"
              data-tooltip-id="projects-tooltip"  
              data-tooltip-content="Projects"
              data-tooltip-place="bottom"
            >
              <BookOpenIcon className="inline-block w-6 h-6 mr-1 mb-1 " />
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className=" px-3 py-2 rounded-md font-medium"
              data-tooltip-id="contact-tooltip"
              data-tooltip-content="Contact"  
              data-tooltip-place="bottom"
            >
              <PhoneIcon className="inline-block w-6 h-6 mr-1 mb-1" />
              Contact
            </a>
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
            <a
              href="#home"
              className="block px-3 py-2 rounded-md font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block  px-3 py-2 rounded-md font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block  px-3 py-2 rounded-md font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block  px-3 py-2 rounded-md font-medium"
            >
              Contact
            </a>
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
