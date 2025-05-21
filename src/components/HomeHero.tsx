
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle } from "lucide-react";

const HomeHero = () => {
  return (
    <div className="bg-gradient-to-r from-deep-blue to-light-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Report Road Accidents Instantly. Save Lives.
            </h1>
            <p className="text-xl mb-8">
              A real-time emergency response platform designed for Cameroon's roads. Report accidents, get help fast, and coordinate emergency services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/report">
                <Button size="lg" className="emergency-button flex items-center gap-2 w-full sm:w-auto">
                  <AlertTriangle size={20} />
                  Report Accident
                </Button>
              </Link>
              <Link to="/emergency-contacts">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/20 flex items-center gap-2 w-full sm:w-auto">
                  <Phone size={20} />
                  Emergency Contacts
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-emergency/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emergency/20 rounded-full blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white/20">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Emergency Hotlines</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Police:</span>
                      <span className="font-bold">117</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Ambulance:</span>
                      <span className="font-bold">119</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fire Service:</span>
                      <span className="font-bold">118</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>General Emergency:</span>
                      <span className="font-bold">112</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
