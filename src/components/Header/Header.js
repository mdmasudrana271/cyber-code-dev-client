import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { AuthContext, ThemeContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { setTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);
  const changeTheme = () => {
    if (toggle) {
      setTheme("dark");
    } else {
      setTheme("light");
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
    <div className="navbar bg-gray-100">
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
            ) : undefined}
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="flex items-center">
            <span>
              <FaSun className="text-amber-400"></FaSun>
            </span>{" "}
            <input
              type="checkbox"
              className="toggle toggle-xs"
              onClick={() => changeTheme(setToggle(!toggle))}
            />
            <span>
              <FaMoon className="text-black"></FaMoon>
            </span>
          </li>
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
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
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