import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./Providers/AuthProviders";
import { toast } from "sonner";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef();

  const handleBackbtn = () => {
    navigate("/"); // Navigate to the previous page
  };
  const { userLogin, googleLogin, forgetpass } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        toast.success(`Welcome ${result.user.email}`);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message.slice(17, -2));
      });
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
  const handleforgetpass = () => {
    // console.log("get me email address");
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Give a valid email");
    } else {
      forgetpass(email)
        .then(() => {
          toast.success("Password reset email sent");
        })
        .catch((error) => "error");
    }
  };
  return (
    <div>
      <header className=" ">
        <IoMdArrowBack onClick={handleBackbtn} className="text-3xl ml-4 mt-2" />
      </header>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold flex items-center">Login</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label onClick={handleforgetpass} className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-lime-400 hover:bg-lime-500">
                  Login
                </button>
                <span className="mt-3 ">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-lime-500 mx-1">
                    Register Now!
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

export default Login;
