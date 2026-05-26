import React from "react";
import {
  FileUp,
  Upload,
  FolderOpen,
  AlertCircle,
  ArrowLeft,
  CheckSquare,
} from "lucide-react";

export function EvidenceStep({
  formData,
  handleChange,
  handleBack,
  handleSubmit,
  isSubmitting,
}) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-[#0e0c17] mb-2">Evidence & Submission</h2>
        <p className="text-xl text-gray-500">
          Attach any proof to strengthen your case.
        </p>
      </div>

      <div className="border border-dashed border-gray-400 bg-slate-50/50 rounded-2xl p-12 text-center transition-colors">
        <div className="w-20 h-20 bg-gray-100 text-black rounded-full flex items-center justify-center mx-auto mb-6">
          <FileUp size={32} strokeWidth={1.5} />
        </div>
        <h4 className="text-2xl text-[#0e0c17] mb-2">
          Upload Photos or Documents
        </h4>
        <p className="text-lg text-gray-500 mb-8">
          Select files or an entire folder to upload
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <label className="bg-white border border-gray-300 px-8 py-3 rounded-full text-black font-medium cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm flex items-center gap-2 justify-center">
            <Upload size={18} /> Choose Files
            <input type="file" multiple className="hidden" />
          </label>
          <label className="bg-white border border-gray-300 px-8 py-3 rounded-full text-black font-medium cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm flex items-center gap-2 justify-center">
            <FolderOpen size={18} /> Choose Folder
            <input
              type="file"
              webkitdirectory="true"
              directory="true"
              className="hidden"
            />
          </label>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          Max total size: 10MB (JPG, PNG, PDF, DOCX)
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex items-start gap-4">
        <AlertCircle className="text-gray-500 shrink-0 mt-1" size={24} />
        <div>
          <h4 className="text-xl font-bold text-[#0e0c17]">Important Notice</h4>
          <p className="text-lg text-gray-600 mt-2 leading-relaxed">
            False or misleading complaints can result in legal action. Ensure
            all information provided is true to your knowledge.
          </p>
        </div>
      </div>

      <label className="flex items-start gap-4 p-6 border border-gray-300 rounded-xl cursor-pointer hover:bg-blue-50/30 transition-colors">
        <input
          type="checkbox"
          name="declaration"
          checked={formData.declaration}
          onChange={handleChange}
          className="w-6 h-6 mt-1 rounded border-gray-300 text-black focus:ring-black"
        />
        <span className="text-xl text-[#0e0c17] leading-relaxed">
          I hereby declare that the information provided above is true and
          correct to the best of my knowledge. I understand that false reporting
          is punishable.
        </span>
      </label>

      <div className="flex justify-between pt-8">
        <button
          onClick={handleBack}
          className="px-8 py-4 rounded-full border border-gray-300 text-[#0e0c17] hover:bg-gray-50 transition-colors flex items-center gap-3 text-xl"
        >
          <ArrowLeft size={20} /> Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!formData.declaration || isSubmitting}
          className="bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 text-xl min-w-[250px] shadow-lg shadow-black/20"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-3">
              Submit Grievance <CheckSquare size={20} />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
