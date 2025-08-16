import { useState } from "react";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "National Heritage Festival",
      date: "2024-03-15",
      time: "10:00 AM",
      location: "Capital City Center",
      description: "Celebrate our rich cultural heritage with traditional music, dance, and crafts.",
      category: "Cultural"
    },
    {
      id: 2,
      title: "International Food Festival",
      date: "2024-03-22",
      time: "6:00 PM",
      location: "Riverside Park",
      description: "Experience flavors from around the world and our local cuisine.",
      category: "Food"
    },
    {
      id: 3,
      title: "Youth Sports Championship",
      date: "2024-04-05",
      time: "9:00 AM",
      location: "National Stadium",
      description: "Supporting young athletes in various sports competitions.",
      category: "Sports"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Independence Day Celebration",
      date: "2024-01-01",
      time: "12:00 PM",
      location: "Government Square",
      description: "Annual celebration of our nation's independence with parades and fireworks.",
      category: "National",
      images: ["/placeholder.svg"],
      videos: []
    },
    {
      id: 5,
      title: "Art & Culture Expo",
      date: "2024-02-14",
      time: "2:00 PM",
      location: "Cultural Center",
      description: "Showcasing local artists and cultural performances.",
      category: "Cultural",
      images: ["/placeholder.svg", "/placeholder.svg"],
      videos: ["/placeholder.mp4"]
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Events & Celebrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our upcoming events and explore highlights from past celebrations
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{event.category}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedEvent(event)}
                    >
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};