import React from "react";
import { Shield, User, Phone, ArrowRight } from "lucide-react";

export function IdentityStep({ formData, handleChange, handleNext }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-[#0e0c17] mb-2">Citizen Identification</h2>
        <p className="text-xl text-gray-500">
          Please provide your details. You can choose to remain anonymous.
        </p>
      </div>

      <div className="bg-gray-50/50 border border-gray-300 p-6 rounded-2xl flex items-start gap-4">
        <Shield className="text-black shrink-0 mt-1" size={24} />
        <div>
          <h4 className="text-xl font-bold text-black">
            Whistleblower Protection
          </h4>
          <p className="text-lg text-black/80 mt-2 leading-relaxed">
            If you select anonymous, your details will be completely hidden from
            the field officers investigating the issue.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xl text-[#0e0c17] mb-3">Full Name</label>
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={formData.isAnonymous}
              className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all disabled:bg-gray-50 disabled:text-gray-400 text-lg"
              placeholder={
                formData.isAnonymous ? "Hidden (Anonymous)" : "John Doe"
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-xl text-[#0e0c17] mb-3">
            Mobile Number{" "}
            <span className="text-gray-500 text-lg">(For OTP & Updates)</span>
          </label>
          <div className="relative">
            <Phone
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-lg"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <label className="flex items-center gap-4 p-6 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="checkbox"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
            className="w-6 h-6 rounded border-gray-300 text-black focus:ring-black"
          />
          <span className="text-xl text-[#0e0c17]">File as Anonymous</span>
        </label>
      </div>

      <div className="pt-8 flex justify-end">
        <button
          onClick={handleNext}
          disabled={!formData.mobile}
          className="bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3 text-xl shadow-lg shadow-black/20"
        >
          Continue to Details <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
