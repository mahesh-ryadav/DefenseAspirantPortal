import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-3 tracking-tight">
            Defence Aspirant Portal
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering defence aspirants with timely updates, mock tests, and curated resources for success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link to="/notifications" className="hover:text-green-400 transition">Notifications</Link></li>
            <li><Link to="/mock-tests" className="hover:text-green-400 transition">Mock Tests</Link></li>
            <li><Link to="/resources" className="hover:text-green-400 transition">Resources</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-green-400 transition">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p className="text-sm text-gray-400">
            Email:{" "}
            <a href="mailto:support@defenceportal.in" className="hover:text-green-400">
              support@defenceportal.in
            </a>
          </p>
          <p className="text-sm text-gray-400 mt-2">Location: India 🇮🇳</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-green-400">Defence Aspirant Portal</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
