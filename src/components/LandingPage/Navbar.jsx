import React from "react";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CitizenReporting from "../CitizenReporting";

export default function Navbar() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/", name: "About" },
    { path: "/", name: "Contact" },
  ];
  const navigate = useNavigate();
  const IsLoginPage =
    window.location.pathname === "/Login" ||
    window.location.pathname === "/Signup";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-3 cursor-pointer">
        <ShieldAlert className="w-7 h-7 text-[#0e0c17]" strokeWidth={1.5} />
        <p className="text-2xl font-bold tracking-tight text-[#0e0c17]">
          CitizenConnect
        </p>
      </div>

      <ul className="flex items-center gap-10">
        {links.map((ele, index) => {
          return (
            <li key={index}>
              <a
                href={ele.path}
                className="text-[#0e0c17] hover:opacity-70 transition-opacity font-medium"
              >
                {ele.name}
              </a>
            </li>
          );
        })}
        <li>
          {!IsLoginPage && (
            <button
              className="bg-[#0e0c17] text-white px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
