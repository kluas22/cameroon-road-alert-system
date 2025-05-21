
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EmergencyContactsSection from "@/components/EmergencyContactsSection";

const EmergencyContacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-deep-blue text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Emergency Contacts</h1>
            <p className="mt-4 text-lg text-center max-w-3xl mx-auto">
              Find emergency service contact information for all regions in Cameroon
            </p>
          </div>
        </div>
        
        <EmergencyContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyContacts;
