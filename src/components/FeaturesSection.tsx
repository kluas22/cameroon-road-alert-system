
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Map, Clock, Bell } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-deep-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue dark:text-white mb-4">How SafeRoadsCM Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform connects accident victims with emergency services in real-time, providing critical coordination for faster response.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<AlertTriangle className="h-10 w-10 text-emergency" />}
            title="Report Accidents"
            description="Quickly report road accidents with location data, photos, and severity information."
          />
          <FeatureCard 
            icon={<Map className="h-10 w-10 text-emergency" />}
            title="Precise Location"
            description="GPS integration helps emergency teams locate the exact accident site."
          />
          <FeatureCard 
            icon={<Bell className="h-10 w-10 text-emergency" />}
            title="Real-time Alerts"
            description="Immediate notifications sent to nearest emergency response units."
          />
          <FeatureCard 
            icon={<Clock className="h-10 w-10 text-emergency" />}
            title="Status Updates"
            description="Track the status of emergency response in real-time."
          />
        </div>
        
        <div className="mt-16 bg-off-white dark:bg-deep-blue/30 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-deep-blue dark:text-white mb-4">Making Cameroon's Roads Safer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our platform aims to reduce emergency response times by up to 40%, potentially saving thousands of lives each year.
              </p>
              <ul className="space-y-3">
                {[
                  "GPS-powered accident location reporting",
                  "Direct communication with emergency services",
                  "Real-time tracking of response status",
                  "Multilingual support for all Cameroonians",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block bg-emergency text-white rounded-full p-1 mr-3">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-deep-blue rounded-lg p-6 shadow-lg">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-4">Impact Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-light-blue/20 rounded-lg">
                    <p className="text-3xl font-bold text-emergency">40%</p>
                    <p className="text-sm mt-2">Potential reduction in response time</p>
                  </div>
                  <div className="text-center p-4 bg-light-blue/20 rounded-lg">
                    <p className="text-3xl font-bold text-emergency">1000+</p>
                    <p className="text-sm mt-2">Lives potentially saved yearly</p>
                  </div>
                  <div className="text-center p-4 bg-light-blue/20 rounded-lg">
                    <p className="text-3xl font-bold text-emergency">24/7</p>
                    <p className="text-sm mt-2">Continuous monitoring</p>
                  </div>
                  <div className="text-center p-4 bg-light-blue/20 rounded-lg">
                    <p className="text-3xl font-bold text-emergency">10</p>
                    <p className="text-sm mt-2">Regions covered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-col items-center text-center">
      <div className="rounded-full bg-emergency/10 p-3 mb-4">{icon}</div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default FeaturesSection;
