import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { AuthContext, ThemeContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-gray-400 bg-opacity-40 backdrop-blur-md text-black sticky top-0 z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div
              onClick={handleTheme}
              className="cursor-pointer flex items-center justify-start mx-3"
            >
              {theme === "dark" ? <FaSun></FaSun> : <FaMoon></FaMoon>}
            </div>
            {user && user.uid ? (
              <li>
                <Link to="/profile">
                  <p>{user?.displayName}</p>
                  <img
                    className="w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
              </li>
            )  : undefined}
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
              <Link to="/contact">Contact</Link>
            </li>
            {user && user?.uid ? (
              <li onClick={handleLogOut}>
                <Link>Log out</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <FaLightbulb className="text-amber-400" /> Cybercodedev
        </Link>
      </div>
      <div className="navbar-end mr-6 hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <div
            onClick={handleTheme}
            className="cursor-pointer flex items-center justify-start mx-3"
          >
            {theme === "dark" ? <FaSun></FaSun> : <FaMoon></FaMoon>}
          </div>
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
              <Link to="/contact">Contact</Link>
            </li>
          {user && user?.uid ? (
            <li onClick={handleLogOut}>
              <Link>Log out</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          {user || user?.email ? (
            <li>
              <Link to="/profile">
                {user?.photoURL ? <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                /> : <FaUser/>}
                <p>{user?.displayName}</p>
              </Link>
            </li>
          ) : (
            <FaUser className="relative top-4"></FaUser>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
