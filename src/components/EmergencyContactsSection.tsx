
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Clock, Map, Shield, Ambulance } from "lucide-react";

const EmergencyContactsSection = () => {
  const regions = ["Centre", "Littoral", "South West", "North West", "West", "East", "North", "Far North", "Adamawa", "South"];
  
  return (
    <section className="py-12 md:py-16 bg-off-white dark:bg-deep-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-deep-blue dark:text-white text-center mb-10">Emergency Services Directory</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4 text-light-blue">National Emergency Numbers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <EmergencyCard 
              title="Police" 
              phone="117" 
              description="For security emergencies and law enforcement"
              icon={<Shield className="h-8 w-8 text-emergency" />}
            />
            <EmergencyCard 
              title="Ambulance" 
              phone="119" 
              description="For medical emergencies and transportation"
              icon={<Ambulance className="h-8 w-8 text-emergency" />}
            />
            <EmergencyCard 
              title="Fire Service" 
              phone="118" 
              description="For fire emergencies and rescue operations"
              icon={<Shield className="h-8 w-8 text-emergency" />}
            />
            <EmergencyCard 
              title="General Emergency" 
              phone="112" 
              description="For all types of emergencies"
              icon={<Phone className="h-8 w-8 text-emergency" />}
            />
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-light-blue">Regional Emergency Contacts</h3>
          <Tabs defaultValue="Centre">
            <div className="overflow-x-auto">
              <TabsList className="mb-6">
                {regions.map((region) => (
                  <TabsTrigger key={region} value={region}>{region}</TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {regions.map((region) => (
              <TabsContent key={region} value={region}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RegionalEmergencyCard
                    title="Regional Hospital"
                    phone="+237 222 222 222"
                    address={`${region} Regional Hospital, Main Street`}
                    hours="24/7"
                  />
                  <RegionalEmergencyCard
                    title="Police Station"
                    phone="+237 233 333 333"
                    address={`${region} Central Police Station`}
                    hours="24/7"
                  />
                  <RegionalEmergencyCard
                    title="Fire Station"
                    phone="+237 244 444 444"
                    address={`${region} Fire Department HQ`}
                    hours="24/7"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

interface EmergencyCardProps {
  title: string;
  phone: string;
  description: string;
  icon: React.ReactNode;
}

const EmergencyCard = ({ title, phone, description, icon }: EmergencyCardProps) => (
  <Card className="border-2 border-light-blue/20 hover:border-emergency transition-colors">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold text-emergency">{phone}</p>
      <CardDescription className="mt-3">{description}</CardDescription>
    </CardContent>
  </Card>
);

interface RegionalEmergencyCardProps {
  title: string;
  phone: string;
  address: string;
  hours: string;
}

const RegionalEmergencyCard = ({ title, phone, address, hours }: RegionalEmergencyCardProps) => (
  <Card className="border border-light-blue/20">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex items-start gap-2">
        <Phone className="h-4 w-4 text-emergency mt-1" />
        <span>{phone}</span>
      </div>
      <div className="flex items-start gap-2">
        <Map className="h-4 w-4 text-emergency mt-1" />
        <span>{address}</span>
      </div>
      <div className="flex items-start gap-2">
        <Clock className="h-4 w-4 text-emergency mt-1" />
        <span>{hours}</span>
      </div>
    </CardContent>
  </Card>
);

export default EmergencyContactsSection;
