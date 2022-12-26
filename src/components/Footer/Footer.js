import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50">
      <div className=" flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/mdabdullamasud.rana/"
              title="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 text-4xl text-blue-400"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href="https://github.com/mdmasudrana271"
              title="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 text-4xl"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.facebook.com/mdabdullamasud.rana/"
              title="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 text-4xl text-blue-400"
            >
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
