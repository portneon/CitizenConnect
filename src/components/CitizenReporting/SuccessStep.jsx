import React from "react";
import { CheckCircle } from "lucide-react";

export function SuccessStep({
  applicationId,
  setIsFormOpen,
  setCurrentStep,
  setFormData,
}) {
  return (
    <div className="text-center py-16 animate-in zoom-in-95 duration-500">
      <div className="w-32 h-32 bg-gray-100 border border-gray-300 text-black rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle size={64} strokeWidth={1} />
      </div>
      <h2 className="text-5xl text-[#0e0c17] mb-6">Grievance Registered!</h2>
      <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Your complaint has been successfully forwarded to the concerned
        department.
      </p>

      <div className="bg-[#fdfdfd] border border-gray-200 p-8 rounded-2xl inline-block text-left mb-12 w-full max-w-lg">
        <p className="text-xl text-gray-500 mb-4 text-center">
          Application Reference Number
        </p>
        <div className="text-4xl font-sans font-bold text-black py-4 px-6 rounded-xl inline-block tracking-widest w-full text-center border border-gray-300 bg-white">
          {applicationId}
        </div>
        <p className="text-lg text-center text-gray-500 mt-6">
          Please save this number to track your status.
        </p>
      </div>

      <div>
        <button
          onClick={() => {
            setIsFormOpen(false);
            setCurrentStep(1);
            setFormData({
              fullName: "",
              mobile: "",
              isAnonymous: false,
              primaryCategory: "",
              subCategory: "",
              location: "",
              subject: "",
              description: "",
              declaration: false,
              files: [],
              folder: null,
            });
          }}
          className="bg-black text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-colors text-xl shadow-lg shadow-black/20"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
