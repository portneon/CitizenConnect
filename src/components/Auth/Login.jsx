import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpBox from "./OtpBox";
import PasswordBox from "./PasswordBox";
import Navbar from "../LandingPage/Navbar";
function Login() {
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState("mobile");

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex w-full justify-center items-center bg-[#fcfcfc] px-6">
        <form className="bg-white border border-gray-200 rounded-2xl p-10 w-full max-w-2xl flex flex-col gap-6">
          <div className="flex flex-wrap justify-evenly">
            <p
              onClick={() => setLoginMode("mobile")}
              className={`text-center text-[#0e0c17] font-serif ${loginMode == "mobile" ? "text-gray-500 text-xl border-b border-gray-400" : "text-gray-500 text-xl"}`}
            >
              Login with Mobile Number
            </p>

            {console.log(location.pathname)}

            <p
              onClick={() => setLoginMode("email")}
              className={`text-sm text-center text-[#0e0c17] font-serif ${loginMode == "email" ? "text-gray-500 text-xl border-b border-gray-400" : "text-gray-500 text-xl"}`}
            >
              Login with Email Address
            </p>
          </div>

          <div>
            <label
              htmlFor={loginMode == "mobile" ? "mobile" : "email"}
              className="block mb-2 text-[#0e0c17]"
            >
              {`Enter your ${loginMode == "mobile" ? "mobile" : "email"}`}
            </label>

            <input
              type={loginMode == "mobile" ? "mobile" : "email"}
              id={loginMode == "mobile" ? "mobile" : "email"}
              placeholder={`Enter your ${loginMode == "mobile" ? "mobile" : "email"}`}
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17]"
            />
          </div>
          {/* passsword starts here.  */}

          {loginMode == "mobile" ? <OtpBox /> : <PasswordBox />}

          {/* password endes here */}
          <button
            type="submit"
            className="bg-[#0e0c17] text-white py-4 rounded-xl hover:opacity-90 transition-all"
          >
            Login
          </button>
          <div className="text-center mt-2">
            <p className="text-[#0e0c17] opacity-70">Don't have an account?</p>

            <button
              type="button"
              onClick={() => navigate("/Signup")}
              className="mt-2 text-[#0e0c17] underline hover:opacity-70"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
