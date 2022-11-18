import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50 ">
      <div className=" flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>About</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/mdabdullamasud.rana"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/mdmasudrana271"
              title="Github"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              rel="noopener noreferrer"
              href="/#"
              title="Gmail"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaGoogle></FaGoogle>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-5 text-sm">
        <span className="dark:text-gray-400">
          © Copyright 1986. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
