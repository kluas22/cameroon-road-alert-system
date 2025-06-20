
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

interface TrackingVehicle {
  id: string;
  type: 'ambulance' | 'police' | 'fire';
  lat: number;
  lng: number;
  isMoving: boolean;
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

  const [trackingVehicles, setTrackingVehicles] = useState<TrackingVehicle[]>([
    { id: 'amb1', type: 'ambulance', lat: 3.847, lng: 11.503, isMoving: false },
    { id: 'pol1', type: 'police', lat: 3.849, lng: 11.501, isMoving: false },
    { id: 'fire1', type: 'fire', lat: 3.850, lng: 11.504, isMoving: false }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isTracking, setIsTracking] = useState(false);

  // Move tracking vehicles when tracking is active
  useEffect(() => {
    if (!isTracking) return;

    const interval = setInterval(() => {
      setTrackingVehicles(prev => prev.map(vehicle => ({
        ...vehicle,
        lat: vehicle.lat + (Math.random() - 0.5) * 0.001,
        lng: vehicle.lng + (Math.random() - 0.5) * 0.001,
        isMoving: true
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, [isTracking]);

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

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'ambulance': return '🚑';
      case 'police': return '🚓';
      case 'fire': return '🚒';
      default: return '🚗';
    }
  };

  return (
    <div className="bg-white dark:bg-deep-blue/10 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-deep-blue dark:text-white">Live Accident Map - Yaoundé</h2>
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

      {/* Interactive Map Container */}
      <div className="relative bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg h-96 mb-6 overflow-hidden border-2 border-gray-300 dark:border-gray-600">
        {/* Map Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-gray-400 dark:border-gray-500"></div>
            ))}
          </div>
        </div>

        {/* Map Labels */}
        <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-md">
          <div className="text-sm font-bold text-deep-blue dark:text-white">Yaoundé City Center</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">3.8480°N, 11.5021°E</div>
        </div>

        {/* Street Names */}
        <div className="absolute top-1/4 left-1/3 text-xs font-medium text-gray-700 dark:text-gray-300 rotate-12">Avenue Kennedy</div>
        <div className="absolute bottom-1/3 right-1/4 text-xs font-medium text-gray-700 dark:text-gray-300 -rotate-12">Rue de Nachtigal</div>
        <div className="absolute top-1/2 left-1/4 text-xs font-medium text-gray-700 dark:text-gray-300">Boulevard du 20 Mai</div>

        {/* Accident markers */}
        {accidents.map((accident, index) => (
          <div
            key={accident.id}
            className="absolute animate-pulse"
            style={{
              left: `${25 + index * 30}%`,
              top: `${35 + index * 15}%`,
            }}
          >
            <div className={`w-6 h-6 rounded-full ${getSeverityColor(accident.severity)} border-2 border-white shadow-lg flex items-center justify-center`}>
              <AlertTriangle className="h-3 w-3 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-8 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {accident.type}
            </div>
          </div>
        ))}

        {/* Tracking vehicles */}
        {trackingVehicles.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className={`absolute transition-all duration-3000 ${vehicle.isMoving ? 'animate-bounce' : ''}`}
            style={{
              left: `${40 + index * 20}%`,
              top: `${50 + index * 10}%`,
            }}
          >
            <div className="relative">
              <div className="text-2xl">{getVehicleIcon(vehicle.type)}</div>
              {isTracking && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              )}
            </div>
          </div>
        ))}

        {/* Map Legend */}
        <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
          <div className="text-xs font-bold mb-2 text-deep-blue dark:text-white">Legend</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Severe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Minor</span>
            </div>
          </div>
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
