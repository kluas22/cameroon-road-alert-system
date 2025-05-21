
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-deep-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-emergency font-heading font-bold text-xl mr-1">Safe</span>
              <span className="text-deep-blue dark:text-white font-heading font-bold text-xl">Roads</span>
              <span className="text-light-blue font-heading font-bold text-xl">CM</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20">
              Home
            </Link>
            <Link to="/report" className="px-3 py-2 rounded-md text-sm font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20">
              Report Accident
            </Link>
            <Link to="/emergency-contacts" className="px-3 py-2 rounded-md text-sm font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20">
              Emergency Contacts
            </Link>
            <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20">
              Dashboard
            </Link>
            <Link to="/news" className="px-3 py-2 rounded-md text-sm font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20">
              News & Tips
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20">
              Contact
            </Link>
            <Button variant="outline" className="ml-4">
              Login
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-deep-blue dark:text-white hover:text-emergency hover:bg-muted dark:hover:bg-secondary/20"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-deep-blue shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/report" 
              className="block px-3 py-2 rounded-md text-base font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Report Accident
            </Link>
            <Link 
              to="/emergency-contacts" 
              className="block px-3 py-2 rounded-md text-base font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Emergency Contacts
            </Link>
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 rounded-md text-base font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/news" 
              className="block px-3 py-2 rounded-md text-base font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(false)}
            >
              News & Tips
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-deep-blue hover:bg-muted dark:text-white dark:hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full mt-4" variant="outline">
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
