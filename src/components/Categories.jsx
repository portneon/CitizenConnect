import React from "react";
import { Zap, Construction, Droplets, Trash2, Users, ShieldAlert, Siren } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      title: "Electricity",
      icon: <Zap className="w-8 h-8 text-[#0e0c17] mb-4" strokeWidth={1} />,
    },
    {
      title: "Roads & Infrastructure",
      icon: <Construction className="w-8 h-8 text-[#0e0c17] mb-4" strokeWidth={1} />,
    },
    {
      title: "Water Supply",
      icon: <Droplets className="w-8 h-8 text-[#0e0c17] mb-4" strokeWidth={1} />,
    },
    {
      title: "Sanitation",
      icon: <Trash2 className="w-8 h-8 text-[#0e0c17] mb-4" strokeWidth={1} />,
    },
    {
      title: "Public Services",
      icon: <Users className="w-8 h-8 text-[#0e0c17] mb-4" strokeWidth={1} />,
    },
    {
      title: "Misbehavior / Corruption",
      icon: <ShieldAlert className="w-8 h-8 text-[#0e0c17] mb-4" strokeWidth={1} />,
    },
    {
      title: "Emergency (Fire, Accident)",
      icon: <Siren className="w-8 h-8 text-red-700 mb-4" strokeWidth={1} />,
      isEmergency: true
    }
  ];

  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-[#0e0c17] mb-8">
            What Can You Report?
          </h2>
          <p className="text-2xl text-[#0e0c17] max-w-4xl mx-auto leading-relaxed opacity-80">
            Different departments handle different issues. Select the category that best matches your problem, and we'll route it to the right authority.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className={`flex flex-col items-center justify-center p-10 rounded-2xl border border-gray-200 transition-colors ${cat.isEmergency ? 'border-red-200 bg-red-50/30' : 'hover:bg-gray-50'}`}
            >
              {cat.icon}
              <h3 className={`text-xl ${cat.isEmergency ? 'text-red-800' : 'text-[#0e0c17]'}`}>
                {cat.title}
              </h3>
              {cat.isEmergency && (
                <span className="mt-3 text-xs tracking-widest uppercase text-red-700 border border-red-200 px-3 py-1 rounded-full">
                  High Priority
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
