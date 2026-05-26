import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";

function Signup() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl p-10">
          <div className="mb-10 text-center">
            <h1 className="text-4xl text-[#0e0c17] mb-4 font-serif">
              Create Account
            </h1>

            <p className="text-[#0e0c17] opacity-70 text-lg">
              Join the platform and get started.
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="text-[#0e0c17] text-lg block mb-2"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[#0e0c17] text-lg block mb-2"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-[#0e0c17] text-lg block mb-2"
              >
                Mobile Number
              </label>

              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your mobile number"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-[#0e0c17] text-lg block mb-2"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="text-[#0e0c17] text-lg block mb-2"
              >
                Confirm Password
              </label>

              <input
                type="text"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17] transition-all"
              />
            </div>

            <button
              type="submit"
              className="bg-[#0e0c17] text-white py-4 rounded-xl text-lg hover:opacity-90 transition-all mt-2"
            >
              Signup
            </button>

            <div className="text-center mt-2">
              <p className="text-[#0e0c17] opacity-70">
                Already have an account?
              </p>

              <button
                type="button"
                onClick={() => navigate("/Login")}
                className="mt-2 text-[#0e0c17] underline hover:opacity-70"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
