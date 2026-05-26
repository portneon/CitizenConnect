import React from "react";

function OtpBox() {
  return (
    <div>
      <label htmlFor="otp" className="block mb-2 text-[#0e0c17]">
        OTP
      </label>

      <input
        type="number"
        id="otp"
        placeholder="Enter your password"
        className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17]"
      />
    </div>
  );
}

export default OtpBox;
