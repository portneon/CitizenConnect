import React from "react";
import Home from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CitizenReporting from "./components/CitizenReporting";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import TrackStatus from "./components/StatusTracking/TrackStatus";
function App() {
  return (
    <>
      <div className="min-h-screen bg-white font-serif text-[#0e0c17]">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/CitizenReporting"} element={<CitizenReporting />} />
            <Route path={"/Login"} element={<Login />} />
            <Route path={"/Signup"} element={<Signup />} />
            <Route path={"/TrackStatus"} element={<TrackStatus />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
