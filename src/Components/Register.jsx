/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./Providers/AuthProviders";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleBackbtn = () => {
    navigate("/"); // Navigate to the previous page
  };
  const auth = useContext(AuthContext);
  const { createUser, googleLogin } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if (password.length < 6) {
      toast.error("Password must be 6 characters long");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error("Passoword should contain one uppercase and one lowercase");
      return;
    }
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        // console.log("Error", error.message);
      });

    //update profile
    updateProfile(auth.currentuser, profile)
      .then(() => {
        // console.log("user profile updated");
      })
      .catch((error) => {});
  };
  const handlegoogle = () => {
    googleLogin()
      .then((result) => {
        result.user;
        toast.success(`Welcome ${result.user.displayName}`);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <header className=" ">
        <IoMdArrowBack onClick={handleBackbtn} className="text-3xl ml-4 mt-2" />
      </header>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold flex items-center">Register</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="btn btn-xs absolute right-4 top-12"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-lime-400 hover:bg-lime-500">
                  Register
                </button>
                <span className="mt-3 ">
                  Already have an account?
                  <Link to="/login" className="text-lime-500 mx-1">
                    Login Now!
                  </Link>
                </span>
                <span className="text-center my-3">Or,</span>
                <button
                  onClick={handlegoogle}
                  className="btn bg-white hover:bg-white border solid border-gray-200"
                >
                  <FcGoogle className="text-2xl" />
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
