
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RealTimeMap from "@/components/RealTimeMap";
import AccidentTracker from "@/components/AccidentTracker";

const RealTimeTracking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-off-white dark:bg-deep-blue/20">
        <div className="bg-deep-blue text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Real-Time Accident Tracking</h1>
            <p className="mt-4 text-lg text-center max-w-3xl mx-auto">
              Live monitoring of road accidents in Yaoundé and Douala with real-time updates from the field
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RealTimeMap />
            </div>
            <div className="lg:col-span-1">
              <AccidentTracker />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RealTimeTracking;
