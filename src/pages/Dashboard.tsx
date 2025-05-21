
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DashboardOverview from "@/components/DashboardOverview";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-off-white dark:bg-deep-blue/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DashboardOverview />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
