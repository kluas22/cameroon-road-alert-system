
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReportForm from "@/components/ReportForm";

const Report = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-off-white dark:bg-deep-blue/20 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-deep-blue dark:text-white">Report an Accident</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Your report will be sent immediately to emergency services
            </p>
          </div>
          
          <ReportForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Report;
