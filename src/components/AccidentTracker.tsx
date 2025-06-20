
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Pause, Camera, Video, MapPin, Clock, User } from "lucide-react";
import { toast } from "sonner";

const AccidentTracker = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);
  const [authCode, setAuthCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleAuthorization = () => {
    if (authCode === "EMERGENCY123") {
      setIsAuthorized(true);
      toast.success("Authorization successful. Access granted to tracking system.");
    } else {
      toast.error("Invalid authorization code. Please try again.");
    }
  };

  const startTracking = () => {
    setIsTracking(true);
    toast.success("Real-time tracking initiated. Live updates active.");
  };

  const stopTracking = () => {
    setIsTracking(false);
    toast.info("Tracking paused. You can resume anytime.");
  };

  const liveUpdates = [
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      type: 'image',
      description: 'New photo from scene - multiple vehicles involved',
      location: 'Avenue Kennedy, Yaoundé',
      reporter: 'Anonymous'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      type: 'video',
      description: 'Video update showing emergency services arrival',
      location: 'Boulevard de la Liberté, Douala',
      reporter: 'Jean M.'
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 12),
      type: 'text',
      description: 'Traffic blocked in both directions, ambulance requested',
      location: 'Avenue Kennedy, Yaoundé',
      reporter: 'Marie K.'
    }
  ];

  if (!isAuthorized) {
    return (
      <Card className="bg-white dark:bg-deep-blue/10">
        <CardHeader>
          <CardTitle className="text-deep-blue dark:text-white">Authorization Required</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="authCode">Authorization Code</Label>
            <Input
              id="authCode"
              type="password"
              placeholder="Enter your access code"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
            />
          </div>
          <Button onClick={handleAuthorization} className="w-full">
            Authorize Access
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Only authorized emergency personnel can access real-time tracking
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white dark:bg-deep-blue/10">
        <CardHeader>
          <CardTitle className="text-deep-blue dark:text-white flex items-center gap-2">
            <User className="h-5 w-5" />
            Emergency Control Panel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            {!isTracking ? (
              <Button onClick={startTracking} className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Start Tracking
              </Button>
            ) : (
              <Button onClick={stopTracking} variant="destructive" className="flex items-center gap-2">
                <Pause className="h-4 w-4" />
                Pause Tracking
              </Button>
            )}
          </div>
          
          {isTracking && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live tracking active</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Receiving real-time updates from field reporters
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-deep-blue/10">
        <CardHeader>
          <CardTitle className="text-deep-blue dark:text-white">Live Field Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4 mt-4">
              {isTracking ? (
                liveUpdates.map((update) => (
                  <div key={update.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {update.type === 'image' && <Camera className="h-4 w-4 text-blue-500" />}
                        {update.type === 'video' && <Video className="h-4 w-4 text-purple-500" />}
                        {update.type === 'text' && <MapPin className="h-4 w-4 text-green-500" />}
                        <Badge variant="outline" className="text-xs">
                          {update.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {update.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    
                    <p className="text-sm text-deep-blue dark:text-white mb-2">
                      {update.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {update.location}
                      </span>
                      <span>By: {update.reporter}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Start tracking to receive live updates</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="media" className="mt-4">
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Media updates will appear here when tracking is active</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-4">
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Text reports will appear here when tracking is active</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccidentTracker;
