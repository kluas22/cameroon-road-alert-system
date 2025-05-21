
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Camera, MapPin } from "lucide-react";

const ReportForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<{lat: number; lng: number} | null>(null);
  
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        toast.success("Location detected successfully");
      }, (error) => {
        toast.error("Error detecting location. Please try again or enter location manually.");
        console.error(error);
      });
    } else {
      toast.error("Geolocation is not supported by your browser");
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Accident report submitted. Emergency services have been notified.");
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-red-50 border-l-4 border-emergency p-4 rounded-md mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-emergency" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-emergency">Emergency Reporting</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  If there are serious injuries or immediate danger, please also call emergency services directly:
                  <strong className="block mt-1">Police: 117 | Ambulance: 119 | Fire: 118</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-deep-blue/10">
          <h3 className="text-lg font-medium text-deep-blue dark:text-white mb-4">Accident Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="accidentType">Accident Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type of accident" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vehicle-collision">Vehicle Collision</SelectItem>
                    <SelectItem value="pedestrian">Pedestrian Involved</SelectItem>
                    <SelectItem value="motorcycle">Motorcycle Accident</SelectItem>
                    <SelectItem value="overturned">Overturned Vehicle</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="severity">Severity</Label>
                <RadioGroup defaultValue="medium" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="minor" id="minor" />
                    <Label htmlFor="minor">Minor</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="severe" id="severe" />
                    <Label htmlFor="severe">Severe</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide details about the accident..." 
                  className="min-h-[100px]" 
                />
              </div>
              
              <div>
                <Label className="mb-2 block">Upload Photos (if available)</Label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-deep-blue/20 dark:border-gray-600 dark:hover:border-gray-500">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Camera className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG (MAX. 5MB)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" multiple accept="image/*" />
                  </label>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Location</Label>
                <div className="flex space-x-2 mb-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleGetLocation} 
                    className="flex items-center"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Detect My Location
                  </Button>
                </div>
                {location ? (
                  <div className="p-3 bg-muted rounded-md text-sm">
                    <p>Latitude: {location.lat.toFixed(6)}</p>
                    <p>Longitude: {location.lng.toFixed(6)}</p>
                  </div>
                ) : (
                  <Textarea 
                    placeholder="Describe the location if you can't use GPS..." 
                    className="min-h-[100px]" 
                  />
                )}
              </div>
              
              <div>
                <Label htmlFor="services">Services Needed</Label>
                <div className="space-y-2 mt-2">
                  {[
                    { id: "ambulance", label: "Ambulance" },
                    { id: "police", label: "Police" },
                    { id: "firefighters", label: "Firefighters" },
                    { id: "tow", label: "Tow Truck" },
                  ].map((service) => (
                    <div className="flex items-center space-x-2" key={service.id}>
                      <Checkbox id={service.id} />
                      <Label htmlFor={service.id}>{service.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-deep-blue/10">
          <h3 className="text-lg font-medium text-deep-blue dark:text-white mb-4">Reporter Information</h3>
          
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="isAnonymous" 
                checked={isAnonymous} 
                onCheckedChange={(checked) => setIsAnonymous(checked === true)} 
              />
              <Label htmlFor="isAnonymous">Report anonymously</Label>
            </div>
          </div>
          
          {!isAnonymous && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+237 xxxxxxxx" />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-center">
          <Button type="submit" disabled={isLoading} className="emergency-button">
            {isLoading ? "Submitting Report..." : "Submit Emergency Report"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const AlertTriangle = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

export default ReportForm;
