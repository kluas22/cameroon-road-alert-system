
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Pause, Camera, Video, MapPin, Clock, User, Timer } from "lucide-react";
import { toast } from "sonner";

const AccidentTracker = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [currentArea, setCurrentArea] = useState<'yaounde' | 'douala'>('yaounde');

  // Timer intervals for different areas
  const areaTimers = {
    yaounde: 5 * 60, // 5 minutes
    douala: 2 * 60   // 2 minutes
  };

  // Timer countdown effect
  useEffect(() => {
    if (!isTracking || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          toast.info("Tracking session expired. Starting new session...");
          return areaTimers[currentArea];
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTracking, timeRemaining, currentArea, areaTimers]);

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
    setTimeRemaining(areaTimers[currentArea]);
    toast.success(`Real-time tracking initiated for ${currentArea}. Live updates active.`);
  };

  const stopTracking = () => {
    setIsTracking(false);
    setTimeRemaining(0);
    toast.info("Tracking paused. You can resume anytime.");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const mediaUpdates = [
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      type: 'image',
      description: 'Collision scene - two vehicles involved',
      location: 'Avenue Kennedy, Yaoundé',
      reporter: 'Marie K.',
      mediaUrl: '/placeholder.svg'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      type: 'video',
      description: 'Emergency services arrival footage',
      location: 'Boulevard de la Liberté, Douala',
      reporter: 'Jean M.',
      mediaUrl: '/placeholder.svg'
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      type: 'image',
      description: 'Traffic backup extending 2km',
      location: 'Carrefour Warda, Yaoundé',
      reporter: 'Anonymous',
      mediaUrl: '/placeholder.svg'
    }
  ];

  const textReports = [
    {
      id: '1',
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
      description: 'Ambulance dispatched, ETA 8 minutes. Traffic cleared on one lane.',
      location: 'Avenue Kennedy, Yaoundé',
      reporter: 'Emergency Dispatch',
      priority: 'high'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000 * 60 * 6),
      description: 'Police on scene. Investigating cause. Minor injuries reported.',
      location: 'Boulevard de la Liberté, Douala',
      reporter: 'Officer Mbeki',
      priority: 'medium'
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      description: 'Witness reports: Motorcycle ran red light, driver conscious.',
      location: 'Carrefour Warda, Yaoundé',
      reporter: 'Paul T.',
      priority: 'low'
    }
  ];

  const allUpdates = [
    ...mediaUpdates.map(update => ({ ...update, category: 'media' })),
    ...textReports.map(update => ({ ...update, category: 'report' }))
  ].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

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
          <div className="space-y-4">
            <div>
              <Label htmlFor="area">Tracking Area</Label>
              <select 
                id="area"
                value={currentArea}
                onChange={(e) => setCurrentArea(e.target.value as 'yaounde' | 'douala')}
                className="w-full p-2 border rounded-md"
                disabled={isTracking}
              >
                <option value="yaounde">Yaoundé (5 min sessions)</option>
                <option value="douala">Douala (2 min sessions)</option>
              </select>
            </div>

            <div className="flex gap-2">
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
                  <span className="text-sm font-medium">Live tracking active - {currentArea.charAt(0).toUpperCase() + currentArea.slice(1)}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Timer className="h-4 w-4" />
                  <span className="text-sm font-medium">Time remaining: {formatTime(timeRemaining)}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Receiving real-time updates from field reporters
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-deep-blue/10">
        <CardHeader>
          <CardTitle className="text-deep-blue dark:text-white">Live Field Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All ({allUpdates.length})</TabsTrigger>
              <TabsTrigger value="media">Media ({mediaUpdates.length})</TabsTrigger>
              <TabsTrigger value="reports">Reports ({textReports.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4 mt-4">
              {isTracking ? (
                allUpdates.map((update) => (
                  <div key={update.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {update.type === 'image' && <Camera className="h-4 w-4 text-blue-500" />}
                        {update.type === 'video' && <Video className="h-4 w-4 text-purple-500" />}
                        {!update.type && <MapPin className="h-4 w-4 text-green-500" />}
                        <Badge variant="outline" className="text-xs">
                          {update.type || 'report'}
                        </Badge>
                        {update.category === 'report' && 'priority' in update && (
                          <Badge variant={update.priority === 'high' ? 'destructive' : update.priority === 'medium' ? 'default' : 'secondary'} className="text-xs">
                            {update.priority}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {update.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    
                    {update.category === 'media' && 'mediaUrl' in update && (
                      <div className="mb-2">
                        <img src={update.mediaUrl} alt="Accident scene" className="w-full h-32 object-cover rounded-md bg-gray-200" />
                      </div>
                    )}
                    
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
            
            <TabsContent value="media" className="space-y-4 mt-4">
              {isTracking ? (
                mediaUpdates.map((update) => (
                  <div key={update.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {update.type === 'image' ? <Camera className="h-4 w-4 text-blue-500" /> : <Video className="h-4 w-4 text-purple-500" />}
                        <Badge variant="outline" className="text-xs">{update.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {update.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <img src={update.mediaUrl} alt="Accident scene" className="w-full h-32 object-cover rounded-md bg-gray-200" />
                    </div>
                    
                    <p className="text-sm text-deep-blue dark:text-white mb-2">{update.description}</p>
                    
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
                  <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Media updates will appear here when tracking is active</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="reports" className="space-y-4 mt-4">
              {isTracking ? (
                textReports.map((report) => (
                  <div key={report.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <Badge variant="outline" className="text-xs">report</Badge>
                        <Badge variant={report.priority === 'high' ? 'destructive' : report.priority === 'medium' ? 'default' : 'secondary'} className="text-xs">
                          {report.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {report.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    
                    <p className="text-sm text-deep-blue dark:text-white mb-2">{report.description}</p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {report.location}
                      </span>
                      <span>By: {report.reporter}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Text reports will appear here when tracking is active</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccidentTracker;
