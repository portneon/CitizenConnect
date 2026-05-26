import React from "react";
import { MapPin, FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { PRIMARY_CATEGORIES, SUB_CATEGORIES } from "./constants";

export function GrievanceStep({
  formData,
  handleChange,
  handleNext,
  handleBack,
}) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-[#0e0c17] mb-2">Grievance Details</h2>
        <p className="text-xl text-gray-500">
          Provide specific details about your issue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xl text-[#0e0c17] mb-3">Category</label>
          <select
            name="primaryCategory"
            value={formData.primaryCategory}
            onChange={handleChange}
            className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white text-lg"
          >
            <option value="">Select Category...</option>
            {PRIMARY_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xl text-[#0e0c17] mb-3">
            Sub-Category
          </label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            disabled={!formData.primaryCategory}
            className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white disabled:bg-gray-50 text-lg"
          >
            <option value="">Select Sub-Category...</option>
            {formData.primaryCategory &&
              SUB_CATEGORIES[formData.primaryCategory]?.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xl text-[#0e0c17] mb-3">
          Incident Location / Address
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-5 text-gray-400" size={20} />
          <textarea
            name="location"
            value={formData.location}
            onChange={handleChange}
            rows="2"
            className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none text-lg"
            placeholder="E.g., Near City Hospital, MG Road, Ward 12..."
          ></textarea>
        </div>
      </div>

      <div>
        <label className="block text-xl text-[#0e0c17] mb-3">Subject</label>
        <div className="relative">
          <FileText
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-lg"
            placeholder="Brief title of the issue"
          />
        </div>
      </div>

      <div>
        <label className="block text-xl text-[#0e0c17] mb-3">
          Detailed Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          className="w-full p-6 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none text-lg"
          placeholder="Please explain the issue in detail. What happened? When did it happen? Who is involved?"
        ></textarea>
      </div>

      <div className="flex justify-between pt-8">
        <button
          onClick={handleBack}
          className="px-8 py-4 rounded-full border border-gray-300 text-[#0e0c17] hover:bg-gray-50 transition-colors flex items-center gap-3 text-xl"
        >
          <ArrowLeft size={20} /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={
            !formData.primaryCategory ||
            !formData.subject ||
            !formData.description
          }
          className="bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3 text-xl shadow-lg shadow-black/20"
        >
          Continue to Evidence <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
