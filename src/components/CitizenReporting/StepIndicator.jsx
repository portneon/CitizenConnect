import React from "react";
import { CheckCircle } from "lucide-react";

export function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-between mb-12 relative max-w-md mx-auto">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-gray-200 z-0"></div>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-black z-0 transition-all duration-500"
        style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
      ></div>

      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className="relative z-10 flex flex-col items-center bg-white px-2"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 border-2 ${
              currentStep >= step
                ? "bg-black text-white border-black shadow-md shadow-black/20"
                : "bg-white text-gray-400 border-gray-200"
            }`}
          >
            {currentStep > step ? <CheckCircle size={20} /> : step}
          </div>
          <span
            className={`text-sm mt-3 ${currentStep >= step ? "text-black font-bold" : "text-gray-400"}`}
          >
            {step === 1 ? "Identity" : step === 2 ? "Grievance" : "Evidence"}
          </span>
        </div>
      ))}
    </div>
  );
}
