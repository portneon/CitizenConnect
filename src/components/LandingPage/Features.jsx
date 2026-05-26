import React from "react";
import { Users, Megaphone, UserX } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Smart Issue Grouping",
      icon: <Users className="w-10 h-10 text-[#0e0c17] mb-8" strokeWidth={1} />,
      desc: "If many citizens from the same area report the identical problem, the system automatically identifies and marks it as a general public issue, helping authorities prioritize large-scale problems effectively.",
    },
    {
      title: "Public Highlighting",
      icon: (
        <Megaphone className="w-10 h-10 text-[#0e0c17] mb-8" strokeWidth={1} />
      ),
      desc: "If an issue remains unresolved even after multiple escalations, you can choose to highlight it publicly, share it with media organizations, or directly notify elected representatives.",
    },
    {
      title: "Anonymous Reporting",
      icon: <UserX className="w-10 h-10 text-[#0e0c17] mb-8" strokeWidth={1} />,
      desc: "Fear of backlash? You have the right to file sensitive complaints anonymously. Your identity remains protected while the system ensures the issue still reaches the designated authority.",
    },
  ];

  return (
    <div className="w-full bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start bg-white p-12 rounded-2xl border border-gray-200"
            >
              {feat.icon}
              <h3 className="text-3xl text-[#0e0c17] mb-6">{feat.title}</h3>
              <p className="text-[#0e0c17] leading-relaxed text-xl opacity-80">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 