import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function PasswordBox() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <label htmlFor="password" className="block mb-2 text-[#0e0c17]">
        Password
      </label>

      <input
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Enter your password"
        className="w-full border border-gray-300 rounded-xl p-4 pr-12 outline-none focus:border-[#0e0c17]"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-[52px] text-gray-500"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export default PasswordBox;
