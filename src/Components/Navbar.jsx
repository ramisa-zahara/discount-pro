// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";
import Navigate from "./Navigate";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const { userLogOut } = useContext(AuthContext);

  // console.log(auth?.user);
  const handleLogout = () => {
    userLogOut()
      .then((result) => {
        // console.log("user logged out", result.user);
      })
      .catch((error) => {
        // console.log("error", error.message);
      });
  };

  return (
    <div className="flex justify-between mx-6 items-center">
      {/* logo-title */}
      <div className="grid gap-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          <span className="font-bold text-2xl">Discount PRO</span>
        </div>
      </div>

      <div className="hidden lg:flex ">
        <Navigate></Navigate>
      </div>
      <div className="hidden lg:grid mt-6">
        {auth?.user ? (
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              {auth?.user?.displayName && auth?.user?.photoURL ? (
                <>
                  <img
                    src={auth?.user?.photoURL}
                    alt="user_img"
                    className="h-10 rounded-full"
                  />
                  <span>{auth?.user?.displayName}</span>
                </>
              ) : (
                <>
                  <img
                    src={auth?.user?.photoURL}
                    alt="user_img"
                    className="h-10 rounded-full"
                  />
                  <span>{auth?.user?.email.slice(0, -10)}</span>
                </>
              )}
            </div>
            <button
              className="btn lg:btn-wide bg-lime-300 hover:bg-lime-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className=" grid gap-2">
            <NavLink
              to="/login"
              className="btn lg:btn-wide bg-lime-300 hover:bg-lime-500"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn lg:btn-wide bg-lime-300 hover:bg-lime-500"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
      <div className="grid lg:hidden">
        <div className="drawer drawer-end z-40">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button btn">
              <CiMenuBurger />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                {auth?.user ? (
                  <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                      {auth?.user?.displayName && auth?.user?.photoURL ? (
                        <>
                          <img
                            src={auth?.user?.photoURL}
                            alt="user_img"
                            className="h-10 rounded-full"
                          />
                          <span>{auth?.user?.displayName}</span>
                        </>
                      ) : (
                        <>
                          <img
                            src={auth?.user?.photoURL}
                            alt="user_img"
                            className="h-10 rounded-full"
                          />
                          <span>{auth?.user?.email.slice(0, -10)}</span>
                        </>
                      )}
                    </div>
                    <button
                      className="btn bg-lime-300 hover:bg-lime-500"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className=" grid gap-2">
                    <NavLink
                      to="/login"
                      className="btn  bg-lime-300 hover:bg-lime-500"
                    >
                      Login
                    </NavLink>
                    <br />
                    <NavLink
                      to="/register"
                      className="btn bg-lime-300 hover:bg-lime-500"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/brands">Brands</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/aboutdev">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
