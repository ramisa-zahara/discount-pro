import React, { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const navigate = useNavigate();
  const handleditprofile = () => {
    navigate("/profile/updateInfo");
  };
  const auth = useContext(AuthContext);
  return (
    <div className="mt-16 flex justify-center">
      <div className=" card grid justify-center w-96 border shadow-lg solid border-lime-400 gap-4 rounded-xl">
        {auth?.user?.displayName ? (
          <>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={auth?.user?.photoURL}
                alt="user_photo"
                className="rounded-full h-10 "
              />
              <span className="text-lg font-semibold">
                {auth?.user?.displayName}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <img
                src={auth?.user?.photoURL}
                alt="user_photo"
                className="rounded-full h-10 "
              />
              <span className="text-lg font-semibold">
                {auth?.user?.email.slice(0, -10)}
              </span>
            </div>
          </>
        )}
        <div className="flex gap-2 justify-start">
          <span className="font-bold text-lg">Email: </span>
          <span className="text-lg">{auth?.user?.email}</span>
        </div>
        <div className="flex justify-end m-4 ">
          <button
            onClick={handleditprofile}
            className="border solid border-lime-500 p-3 rounded-2xl bg-lime-300 font-bold "
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
