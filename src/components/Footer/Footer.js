import React from "react";
import { FaFacebook, FaGithub, FaLightbulb, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <footer className="dark:bg-gray-800 dark:text-gray-50">
    //   <div className=" flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
    //     <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
    //       <li>
    //         <Link to="/home">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/courses">Courses</Link>
    //       </li>
    //       <li>
    //         <Link to="/faq">FAQ</Link>
    //       </li>
    //       <li>
    //         <Link to="/blog">Blog</Link>
    //       </li>
    //     </ul>
    //     <div className="flex flex-col justify-center pt-6 lg:pt-0">
    //       <div className="flex justify-center space-x-4">
    //         <a
    //           href="https://www.facebook.com/mdabdullamasud.rana/"
    //           title="Instagram"
    //           className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 text-4xl text-blue-400"
    //         >
    //           <FaFacebook></FaFacebook>
    //         </a>
    //         <a
    //           href="https://github.com/mdmasudrana271"
    //           title="Instagram"
    //           className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 text-4xl"
    //         >
    //           <FaGithub></FaGithub>
    //         </a>
    //         <a
    //           href="https://www.facebook.com/mdabdullamasud.rana/"
    //           title="Instagram"
    //           className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 text-4xl text-blue-400"
    //         >
    //           <FaTwitter></FaTwitter>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="px-4 text-black bg-footer-bg bg-cover  bg-center bg-no-repeat mt-5">
      <div className=" flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/4">
          <Link to="/" className="btn btn-ghost normal-case text-3xl">
            <FaLightbulb className="text-amber-400" /> Cybercodedev
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          <div className="space-y-3">
            <ul className="space-y-1">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-black">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="/#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Public API
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Guides
                </a>
              </li>
            </ul>
          </div> */}
          <div className="space-y-3">
            <div className="uppercase dark:text-black">Social media</div>
            <div className="flex justify-start space-x-3 text-2xl">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/mdabdullamasud.rana/"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook className="text-blue-500"></FaFacebook>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/mdmasudrana271"
                title="Github"
                className="flex items-center p-1"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/mdmasud83732961"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaTwitter className="text-blue-500"></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-black">
        Copyright © 2023 cybercodedev.com
      </div>
    </footer>
  );
};

export default Footer;
