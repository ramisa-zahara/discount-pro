import React, { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { MdWavingHand } from "react-icons/md";
import ProfileCard from "./ProfileCard";

const My_Profile = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="grid justify-center mt-6">
      <div className=" border solid border-lime-500 w-96 bg-lime-300 rounded-xl">
        {auth?.user?.displayName ? (
          <>
            <div className="flex justify-center items-center gap-3 m-5">
              <span className="text-xl font-bold flex items-center gap-2">
                Welcome!
                <MdWavingHand className="text-yellow-300" />
              </span>
              <span className="text-lg font-semibold">
                {auth?.user?.displayName}
              </span>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center gap-3">
            <span className="text-xl font-bold flex items-center gap-2">
              Welcome!
              <MdWavingHand className="text-yellow-300" />
            </span>
            <span className="text-lg font-semibold text-lime-500">
              {auth?.user?.email.slice(0, -10)}
            </span>
          </div>
        )}
      </div>
      <ProfileCard></ProfileCard>
    </div>
  );
};

export default My_Profile;
