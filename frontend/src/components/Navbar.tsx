import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ThemeToggle from "./ThemeToggle";
import {
  HomeIcon,
  PhoneIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("/home");

  const handleLinkClick = (to: string) => {
    setActiveLink(to);
  };

  return (
    <>
      {/* Desktop Navbar (unchanged) */}
      <nav className="dark:bg-gray-900 dark:text-white shadow-md font-sans">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="font-bold text-3xl font-mono">Portfolio</div>
          <ul
            className="hidden md:flex space-x-4 text-2xl font-mono"
            style={{ fontVariant: "small-caps", letterSpacing: "0.1em" }}
          >
            <li>
              <Link
                to="/"
                className="px-3 py-2 rounded-md font-medium"
                data-tooltip-id="home-tooltip"
                data-tooltip-content="Home"
                data-tooltip-place="bottom"
              >
                <HomeIcon className="inline-block w-6 h-6 mr-1 mb-1" />
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
                className="px-3 py-2 rounded-md font-medium"
                data-tooltip-id="projects-tooltip"
                data-tooltip-content="Projects"
                data-tooltip-place="bottom"
              >
                <BookOpenIcon className="inline-block w-6 h-6 mr-1 mb-1" />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md font-medium"
                data-tooltip-id="contact-tooltip"
                data-tooltip-content="Contact"
                data-tooltip-place="bottom"
              >
                <PhoneIcon className="inline-block w-6 h-6 mr-1 mb-1" />
                Contact
              </Link>
            </li>
            <li className="inline-block w-6 h-6 mr-1 mt-1.5 ">
              <ThemeToggle />
            </li>
          </ul>

          <Tooltip id="home-tooltip" style={{ fontVariant: "small-caps" }} />
          <Tooltip id="about-tooltip" style={{ fontVariant: "small-caps" }} />
          <Tooltip id="projects-tooltip"  style={{ fontVariant: "small-caps" }}/>
          <Tooltip id="contact-tooltip" style={{ fontVariant: "small-caps" }} />
         
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 border-t-2 border-gradient-to-r from-indigo-500 to-purple-500 left-0 right-0 bg-white dark:bg-gray-800 dark:text-white shadow-lg z-50">
        <div className="flex justify-around items-center h-16" style={{fontVariant: "small-caps", letterSpacing: "0.1em" }} >
          {/* Home */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center w-full h-full transition-transform duration-200 ${
              activeLink === "/home" ? "scale-125" : "scale-100"
            }hover:scale-110 hover:bg-indigo-500`}
            onClick={() => handleLinkClick("/home")}
            data-tooltip-id="home-tooltip"
            data-tooltip-content="Home"
            data-tooltip-place="top"
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          {/* About */}
          <Link
            to="/about"
            className={`flex flex-col items-center justify-center w-full h-full transition-transform duration-200 ${
              activeLink === "/about" ? "scale-125" : "scale-100"
            }hover:scale-110 hover:bg-indigo-500`}
            onClick={() => handleLinkClick("/about")}
            data-tooltip-id="about-tooltip"
            data-tooltip-content="About"
            data-tooltip-place="top"  
          >
            <UserIcon className="w-6 h-6" />
            <span className="text-xs">About</span>
          </Link>
          {/* Projects */}
          <Link
            to="/projects"
            className={`flex flex-col items-center justify-center w-full h-full transition-transform duration-200 ${
              activeLink === "/projects" ? "scale-125" : "scale-100"
            }hover:scale-110 hover:bg-indigo-500`}
            onClick={() => handleLinkClick("/projects")}
            data-tooltip-id="projects-tooltip"
            data-tooltip-content="Projects"
            data-tooltip-place="top"
          >
            <BookOpenIcon className="w-6 h-6" />
            <span className="text-xs">Projects</span>
          </Link>
          {/* Contact */}
          <Link
            to="/contact"
            className={`flex flex-col items-center justify-center w-full h-full transition-transform duration-200 ${
              activeLink === "/contact" ? "scale-125" : "scale-100"
            }hover:scale-110 hover:bg-indigo-500`}
            onClick={() => handleLinkClick("/contact")}
            data-tooltip-id="contact-tooltip"
            data-tooltip-content="Contact"
            data-tooltip-place="top"
          >
            <PhoneIcon className="w-6 h-6" />
            <span className="text-xs">Contact</span>
          </Link>
          {/* Theme Toggle */}
          <button
            className="flex flex-col items-center justify-center w-full h-full hover:scale-110 hover:bg-indigo-500"
          >
            <ThemeToggle />
            <span className="text-xs">Theme</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
