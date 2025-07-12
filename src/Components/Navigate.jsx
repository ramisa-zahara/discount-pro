import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

const Navigate = () => {
  const auth = useContext(AuthContext);

  return (
    <div className=" grid  md:flex justify-center gap-3 lg:gap-8">
      <NavLink to="/" className="flex items-center gap-1">
        <GoHome className="text-xl" />
        Home
      </NavLink>
      <NavLink to="/brands" className="flex items-center gap-1">
        <img src="brand-image.png" alt="" className="h-5" />
        Brands
      </NavLink>
      {auth?.user && (
        <>
          <NavLink to="/profile" className="flex items-center gap-1">
            <CgProfile className="text-xl" />
            My Profile
          </NavLink>
        </>
      )}

      <NavLink to="/aboutdev" className="flex items-center gap-1">
        <img src="information.png" alt="" className="h-5" />
        About Dev
      </NavLink>
    </div>
  );
};

export default Navigate;
