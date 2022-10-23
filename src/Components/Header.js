import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/travel.png";
import userPicture from "../Assets/user.png";
import { AuthContext } from "../Context/Context";
const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
  };
  return (
    <div>
      <div className="navbar bg-gray-800">
        <div className="flex-1 items-center">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-gray-200"
          >
            <img src={logo} alt="" className="w-6 mr-2" />
            <p className="uppercase">Let's Go Traveler's</p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div>
            <ul className="menu menu-horizontal p-0 text-gray-200">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL ? user?.photoURL : userPicture} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
