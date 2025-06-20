
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, AlertTriangle, Camera, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface AccidentReport {
  id: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  severity: 'minor' | 'medium' | 'severe';
  type: string;
  timestamp: Date;
  hasMedia: boolean;
  status: 'reported' | 'dispatched' | 'resolved';
}

const RealTimeMap = () => {
  const [accidents, setAccidents] = useState<AccidentReport[]>([
    {
      id: '1',
      location: { lat: 3.848, lng: 11.502, address: 'Avenue Kennedy, Yaoundé' },
      severity: 'severe',
      type: 'Vehicle Collision',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      hasMedia: true,
      status: 'dispatched'
    },
    {
      id: '2', 
      location: { lat: 4.0511, lng: 9.7679, address: 'Boulevard de la Liberté, Douala' },
      severity: 'medium',
      type: 'Motorcycle Accident',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      hasMedia: false,
      status: 'reported'
    }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshAccidents = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("Map data refreshed");
    }, 1500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'bg-yellow-500';
      case 'medium': return 'bg-orange-500';
      case 'severe': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reported': return 'bg-blue-500';
      case 'dispatched': return 'bg-yellow-500';
      case 'resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-deep-blue/10 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-deep-blue dark:text-white">Live Accident Map</h2>
        <Button 
          onClick={refreshAccidents} 
          disabled={isRefreshing}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Map Container */}
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg h-96 mb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
          <div className="absolute inset-4 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p className="text-lg font-medium">Interactive Map View</p>
              <p className="text-sm">Yaoundé & Douala Coverage</p>
            </div>
          </div>
          
          {/* Simulated accident markers */}
          {accidents.map((accident, index) => (
            <div
              key={accident.id}
              className="absolute animate-pulse"
              style={{
                left: `${20 + index * 30}%`,
                top: `${30 + index * 20}%`,
              }}
            >
              <div className={`w-4 h-4 rounded-full ${getSeverityColor(accident.severity)} border-2 border-white shadow-lg`} />
            </div>
          ))}
        </div>
      </div>

      {/* Accident List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-deep-blue dark:text-white">Active Incidents</h3>
        {accidents.map((accident) => (
          <div key={accident.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className={`h-5 w-5 ${accident.severity === 'severe' ? 'text-red-500' : accident.severity === 'medium' ? 'text-orange-500' : 'text-yellow-500'}`} />
                <span className="font-medium text-deep-blue dark:text-white">{accident.type}</span>
                {accident.hasMedia && <Camera className="h-4 w-4 text-blue-500" />}
              </div>
              <div className="flex gap-2">
                <Badge className={getSeverityColor(accident.severity)}>{accident.severity}</Badge>
                <Badge className={getStatusColor(accident.status)}>{accident.status}</Badge>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="h-4 w-4 inline mr-1" />
              {accident.location.address}
            </p>
            
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Reported {accident.timestamp.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeMap;
