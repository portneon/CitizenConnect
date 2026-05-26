import React from "react";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex flex-col max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert
                className="w-7 h-7 text-[#0e0c17]"
                strokeWidth={1.5}
              />
              <p className="text-2xl font-bold tracking-tight text-[#0e0c17]">
                CitizenConnect
              </p>
            </div>
            <p className="text-[#0e0c17] opacity-80 leading-relaxed text-lg">
              India’s Intelligent Public Grievance & Emergency Response
              Platform. Bridging the gap between citizens and authorities.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-[#0e0c17] font-bold text-lg mb-2">
                Platform
              </h4>
              <a
                href="/home"
                className="text-[#0e0c17] opacity-80 hover:opacity-100 transition-opacity"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-[#0e0c17] opacity-80 hover:opacity-100 transition-opacity"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-[#0e0c17] opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[#0e0c17] font-bold text-lg mb-2">Legal</h4>
              <a
                href="/privacy"
                className="text-[#0e0c17] opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[#0e0c17] opacity-80 hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#0e0c17] opacity-60 text-sm">
            &copy; {currentYear} CitizenConnect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#0e0c17] opacity-60 hover:opacity-100 transition-opacity text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-[#0e0c17] opacity-60 hover:opacity-100 transition-opacity text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-[#0e0c17] opacity-60 hover:opacity-100 transition-opacity text-sm"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
