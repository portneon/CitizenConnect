import React from "react";

function Hero() {
  return (
    <div className="bg-[#ffffff] w-full h-auto ">
      <div className="flex pt-20 align-middle justify-center">
        <div className="flex justify-center pt-20">
          <div className=" h-90 p-10 max-w-200 gap-2.5">
            <p className="text-6xl text-[#0e0c17] font-serif justify-cente  ">
              India’s Intelligent Public Grievance & Emergency Response Platform
            </p>
            <p className="text-2xl text-[#0e0c17] font-serif justify-center pt-10">
              Report civic issues, track resolutions, escalate ignored
              complaints automatically, and make authorities accountable — all
              from one platform.
            </p>
          </div>
        </div>
        <div className="">
          <img
            src="./public/heroImage.png"
            alt="img1"
            className="rounded-2xl"
          ></img>
        </div>
      </div>

      <div className="flex content-evenly gap-20 m-20 p-10 rounded-2xl">
        <div className="flex font-serif text-3xl justify-center bg-blue-50 rounded-2xl p-10 ">
          <p>
            Navigating government departments can be overwhelming. In India,
            multiple administrative levels handle various public services,
            making it difficult for citizens to know exactly where to take a
            grievance.
          </p>
        </div>

        <div className="flex font-serif text-3xl justify-center bg-blue-50 rounded-2xl p-10 ">
          <p>
            Our platform bridges this gap. It intelligently identifies the
            correct authority for your issue and introduces an automated
            escalation system. If your concern isn't addressed in a timely
            manner, the system automatically pushes it to the next tier of
            governance—ensuring accountability at every level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
