import React from "react";
import { useContext } from "react";
import { FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      <div className=" md:w-96 mt-10 mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        {user?.emailVerified && user.photoURL ? (
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        ) : (
          <div className="avatar offline">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        )}
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              {user?.email}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
            >
              <FaTwitter></FaTwitter>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Email"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
            >
              <FaTwitch></FaTwitch>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
