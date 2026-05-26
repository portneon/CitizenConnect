import React from "react";
import {
  ChevronRight,
  Home,
  Building2,
  Map,
  Castle,
  Landmark,
  Globe,
} from "lucide-react";

export default function Hierarchy() {
  const levels = [
    {
      name: "Village",
      icon: <Home className="w-6 h-6 text-[#0e0c17]" strokeWidth={1} />,
    },
    {
      name: "Block",
      icon: <Building2 className="w-6 h-6 text-[#0e0c17]" strokeWidth={1} />,
    },
    {
      name: "District",
      icon: <Map className="w-6 h-6 text-[#0e0c17]" strokeWidth={1} />,
    },
    {
      name: "Commissioner",
      icon: <Castle className="w-6 h-6 text-[#0e0c17]" strokeWidth={1} />,
    },
    {
      name: "State",
      icon: <Landmark className="w-6 h-6 text-[#0e0c17]" strokeWidth={1} />,
    },
    {
      name: "National",
      icon: <Globe className="w-6 h-6 text-[#0e0c17]" strokeWidth={1} />,
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] py-24 px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-[#0e0c17] mb-8">
            Automated Escalation Hierarchy
          </h2>
          <p className="text-2xl text-[#0e0c17] max-w-4xl mx-auto leading-relaxed opacity-80">
            If an assigned officer does not respond within 3–4 days, your
            complaint is automatically escalated to the next higher authority.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 overflow-x-auto py-8 px-4">
          {levels.map((level, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center bg-white p-8 rounded-2xl w-40 min-w-40 border border-gray-200">
                <div className="mb-4">{level.icon}</div>
                <p className="text-lg text-[#0e0c17] mb-1">{level.name}</p>
                <p className="text-sm text-[#0e0c17] opacity-60">
                  Level {idx + 1}
                </p>
              </div>
              {idx < levels.length - 1 && (
                <div className="hidden md:flex text-gray-400">
                  <ChevronRight className="w-8 h-8" strokeWidth={1} />
                </div>
              )}
              {idx < levels.length - 1 && (
                <div className="md:hidden text-gray-400 my-2">
                  <ChevronRight className="w-8 h-8 rotate-90" strokeWidth={1} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
