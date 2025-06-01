import React from "react";
import { Tooltip } from "react-tooltip";
import Chat from "../assets/chat.svg";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div className="light:bg-white dark:bg-black pt-8">
      <div className=" max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Social Links */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 dark:text-white text-center font-mono">
            FIND ME ON
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-medium font-sans">
            Feel free to{" "}
            <span className="text-indigo-600 font-medium">connect</span> with me
          </p>
          <ul className="flex flex-wrap justify-center gap-8">
            <li>
              <a
                href="https://github.com/k-ish-san/"
                target="_blank"
                rel="noreferrer"
                className="dark:text-white light:text-gray-600 hover:text-pink-400"
                data-tooltip-id="github-tooltip"
                data-tooltip-content="GitHub"
                data-tooltip-place="top"
              >
                <AiFillGithub size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/samrudhkishsanpm/"
                target="_blank"
                rel="noreferrer"
                className="dark:text-white light:text-gray-600 hover:text-blue-700"
                data-tooltip-id="facebook-tooltip"
                data-tooltip-content="Facebook"
                data-tooltip-place="top"
              >
                <AiFillFacebook size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samrudh-k-ish-san-pm/"
                target="_blank"
                rel="noreferrer"
                className="dark:text-white light:text-gray-600 hover:text-blue-700"
                data-tooltip-id="linkedin-tooltip"
                data-tooltip-content="LinkedIn"
                data-tooltip-place="top"
              >
                <AiFillLinkedin size={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_ki_sh_san_/"
                target="_blank"
                rel="noreferrer"
                className="dark:text-white light:text-gray-600 hover:text-pink-700"
                data-tooltip-id="instagram-tooltip"
                data-tooltip-content="Instagram"
                data-tooltip-place="top"
              >
                <AiFillInstagram size={32} />
              </a>
            </li>
          </ul>
        </div>
        {/* SVG on the Right */}
        <div>
          <img src={Chat} alt="Chat" className="w-80 h-80 object-contain" />
        </div>
      </div>
      <p className="text-center bg-black text-white">Copyright © 2025</p>
      <Tooltip id="github-tooltip" />
      <Tooltip id="facebook-tooltip" />
      <Tooltip id="linkedin-tooltip" />
      <Tooltip id="instagram-tooltip" />
    </div>
  );
};

export default Footer;
