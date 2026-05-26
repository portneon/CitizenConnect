import React, { useState } from "react";
import { X, FileText, ArrowRight, Shield } from "lucide-react";
import { StepIndicator } from "./StepIndicator";
import { IdentityStep } from "./IdentityStep";
import { GrievanceStep } from "./GrievanceStep";
import { EvidenceStep } from "./EvidenceStep";
import { SuccessStep } from "./SuccessStep";
import { useNavigate } from "react-router-dom";

function CitizenReporting() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationId(`GRV-${Math.floor(100000 + Math.random() * 900000)}`);
      setCurrentStep(4);
    }, 1500);
  };

  return (
    <div className="w-full bg-white pb-24">
      {!isFormOpen ? (
        <div className="w-full">
          <div className="flex pt-20 align-middle justify-center px-6">
            <div className="flex justify-center pt-20">
              <div className="p-10 max-w-200 gap-2.5 text-center">
                <p className="text-6xl text-[#0e0c17] mb-10 leading-tight">
                  Ready to Report an Issue?
                </p>
                <p className="text-2xl text-[#0e0c17] leading-relaxed opacity-80 mb-12">
                  Use our universal grievance form to report any civic issue.
                  We'll intelligently route it to the correct department and
                  ensure it gets addressed.
                </p>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-black text-white px-10 py-5 rounded-full hover:bg-gray-800 transition-colors text-xl flex items-center gap-3 shadow-lg shadow-black/20"
                  >
                    File a New Grievance <FileText size={24} />
                  </button>
                  <button
                    onClick={() => navigate("/TrackStatus")}
                    className="border border-gray-400 text-[#0e0c17] px-10 py-5 rounded-full hover:bg-gray-50 transition-colors text-xl flex items-center gap-3"
                  >
                    Track Status <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto pt-10 px-6">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-[#fdfdfd] border-b border-gray-200 px-10 py-6 flex justify-between items-center">
              <div className="flex items-center gap-4 text-black">
                <Shield size={28} strokeWidth={1.5} />
                <span className="text-2xl font-bold">
                  Unified Grievance Form
                </span>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-[#0e0c17]"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-10 md:p-16">
              {currentStep < 4 && <StepIndicator currentStep={currentStep} />}

              <div className="mt-12">
                {currentStep === 1 && (
                  <IdentityStep
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                  />
                )}
                {currentStep === 2 && (
                  <GrievanceStep
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={handleNext}
                    handleBack={handleBack}
                  />
                )}
                {currentStep === 3 && (
                  <EvidenceStep
                    formData={formData}
                    handleChange={handleChange}
                    handleBack={handleBack}
                    handleSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                )}
                {currentStep === 4 && (
                  <SuccessStep
                    applicationId={applicationId}
                    setIsFormOpen={setIsFormOpen}
                    setCurrentStep={setCurrentStep}
                    setFormData={setFormData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CitizenReporting;
