
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-emergency font-heading font-bold text-xl mr-1">Safe</span>
              <span className="text-white font-heading font-bold text-xl">Roads</span>
              <span className="text-light-blue font-heading font-bold text-xl">CM</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Real-time road accident reporting and emergency response coordination platform for Cameroon.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-300 hover:text-white transition-colors">Report Accident</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Tips</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/emergency-contacts" className="text-gray-300 hover:text-white transition-colors">Emergency Contacts</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <span>Email: info@saferoadscan.org</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span>Phone: +237 123 456 789</span>
              </li>
            </ul>
            <div className="mt-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SafeRoadsCM. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button className="text-sm text-gray-400 mr-4">English</button>
            <button className="text-sm text-gray-400">Français</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
