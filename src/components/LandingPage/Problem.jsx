import React from "react";
import { SearchX, GitMerge, FileWarning, EyeOff } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <SearchX className="w-8 h-8 text-[#0e0c17] mb-6" strokeWidth={1} />,
      title: "No Clear Mapping",
      desc: "Citizens struggle to identify the correct government department or officer responsible for resolving their specific issues.",
    },
    {
      icon: (
        <GitMerge className="w-8 h-8 text-[#0e0c17] mb-6" strokeWidth={1} />
      ),
      title: "Lack of Accountability",
      desc: "Complaints are frequently delayed or redirected multiple times across different departments without any clear tracking.",
    },
    {
      icon: (
        <FileWarning className="w-8 h-8 text-[#0e0c17] mb-6" strokeWidth={1} />
      ),
      title: "Unresolved Escalation",
      desc: "Many grievances are left completely unresolved due to the absence of a structured, automated escalation process.",
    },
    {
      icon: <EyeOff className="w-8 h-8 text-[#0e0c17] mb-6" strokeWidth={1} />,
      title: "Poor Visibility",
      desc: "Citizens have limited to no visibility on the progress of their complaints once they have been successfully submitted.",
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] py-24 px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-[#0e0c17] mb-8">
            Public Problems Shouldn't Be Ignored
          </h2>
          <p className="text-2xl text-[#0e0c17] max-w-4xl mx-auto leading-relaxed opacity-80">
            Navigating the system is currently too complex. We believe that
            resolving civic issues should be straightforward, transparent, and
            accountable at every level.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl border border-gray-200 flex flex-col items-start"
            >
              {prob.icon}
              <h3 className="text-2xl text-[#0e0c17] mb-4">{prob.title}</h3>
              <p className="text-[#0e0c17] text-lg leading-relaxed opacity-75">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
