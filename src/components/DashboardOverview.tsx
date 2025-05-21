
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Map, Filter, ChevronDown } from "lucide-react";

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-deep-blue dark:text-white">Incidents Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage road incidents in real-time</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            <span>View Map</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Active Incidents"
          value="12"
          trend="+2"
          trendDirection="up"
          description="Ongoing incidents"
          colorClass="text-emergency"
        />
        <StatCard
          title="Resolved Today"
          value="8"
          trend="+3"
          trendDirection="up"
          description="Completed cases"
          colorClass="text-green-600"
        />
        <StatCard
          title="Average Response"
          value="14.5 min"
          trend="-2.3"
          trendDirection="down"
          description="Response time"
          colorClass="text-green-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Incidents</CardTitle>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Incidents</SelectItem>
                <SelectItem value="reported">Reported</SelectItem>
                <SelectItem value="dispatched">Dispatched</SelectItem>
                <SelectItem value="enroute">Enroute</SelectItem>
                <SelectItem value="onscene">On Scene</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incidents.map((incident) => (
                  <TableRow key={incident.id}>
                    <TableCell className="font-medium">#{incident.id}</TableCell>
                    <TableCell>{incident.location}</TableCell>
                    <TableCell>{incident.type}</TableCell>
                    <TableCell>
                      <StatusBadge status={incident.status} />
                    </TableCell>
                    <TableCell>{incident.time}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Actions <ChevronDown className="ml-1 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Update Status</DropdownMenuItem>
                          <DropdownMenuItem>Assign Units</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Units Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Ambulances</h4>
              <div className="space-y-2">
                <UnitStatusItem name="Ambulance Unit 1" status="available" location="Central Hospital" />
                <UnitStatusItem name="Ambulance Unit 3" status="dispatched" location="Biyem-Assi" />
                <UnitStatusItem name="Ambulance Unit 4" status="available" location="Mvan" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Police Units</h4>
              <div className="space-y-2">
                <UnitStatusItem name="Police Unit 2" status="dispatched" location="Carrefour Warda" />
                <UnitStatusItem name="Police Unit 5" status="available" location="Central Station" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Fire Trucks</h4>
              <div className="space-y-2">
                <UnitStatusItem name="Fire Unit 1" status="dispatched" location="Mimboman" />
                <UnitStatusItem name="Fire Unit 2" status="available" location="Fire Station" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const incidents = [
  {
    id: "INC-1023",
    location: "Carrefour Warda, Yaoundé",
    type: "Vehicle Collision",
    status: "dispatched",
    time: "10:23 AM",
  },
  {
    id: "INC-1022",
    location: "Akwa Bridge, Douala",
    type: "Motorcycle Accident",
    status: "onscene",
    time: "10:15 AM",
  },
  {
    id: "INC-1021",
    location: "Mboppi Market, Douala",
    type: "Vehicle Collision",
    status: "reported",
    time: "9:58 AM",
  },
  {
    id: "INC-1020",
    location: "Mile 17, Buea",
    type: "Pedestrian Involved",
    status: "enroute",
    time: "9:45 AM",
  },
  {
    id: "INC-1019",
    location: "Mimboman, Yaoundé",
    type: "Vehicle Overturn",
    status: "resolved",
    time: "9:30 AM",
  },
];

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendDirection: "up" | "down" | "none";
  description: string;
  colorClass: string;
}

const StatCard = ({ title, value, trend, trendDirection, description, colorClass }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={`h-4 w-4 ${colorClass}`}
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center">
          {trendDirection === "up" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-3 w-3 mr-1 text-green-600"
            >
              <path d="m17 10 2 2-2 2" />
              <path d="M3 14v-4a8 8 0 0 1 8-8h2M17 18l2-2-2-2" />
              <path d="M3 10v4a8 8 0 0 0 8 8h2" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-3 w-3 mr-1 text-green-600"
            >
              <path d="m17 10 2 2-2 2" />
              <path d="M3 14v-4a8 8 0 0 1 8-8h2M17 18l2-2-2-2" />
              <path d="M3 10v4a8 8 0 0 0 8 8h2" />
            </svg>
          )}
          <span>{trend} from yesterday</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

const UnitStatusItem = ({ name, status, location }: { name: string, status: string, location: string }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
      <StatusBadge status={status} />
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusProps = () => {
    switch (status) {
      case "reported":
        return { variant: "destructive" as const, label: "Reported" };
      case "dispatched":
        return { variant: "outline" as const, label: "Dispatched" };
      case "enroute":
        return { variant: "secondary" as const, label: "Enroute" };
      case "onscene":
        return { variant: "default" as const, label: "On Scene" };
      case "resolved":
        return { variant: "outline" as const, label: "Resolved", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" };
      case "available":
        return { variant: "outline" as const, label: "Available", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" };
      default:
        return { variant: "outline" as const, label: status };
    }
  };
  
  const { variant, label, className } = getStatusProps();
  return <Badge variant={variant} className={className}>{label}</Badge>;
};

export default DashboardOverview;
