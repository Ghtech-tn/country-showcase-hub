import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchEvents } from "@/store/slices/eventsSlice";
import { fetchMedia } from "@/store/slices/mediaSlice";
import { fetchPartners } from "@/store/slices/partnersSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Image, Users, Video } from "lucide-react";

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { events } = useSelector((state: RootState) => state.events);
  const { photos, videos } = useSelector((state: RootState) => state.media);
  const { partners } = useSelector((state: RootState) => state.partners);

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchMedia());
    dispatch(fetchPartners());
  }, [dispatch]);

  const stats = [
    {
      title: "Total Events",
      value: events.length,
      icon: CalendarDays,
      description: "Events managed"
    },
    {
      title: "Photos",
      value: photos.length,
      icon: Image,
      description: "Photos in archive"
    },
    {
      title: "Videos",
      value: videos.length,
      icon: Video,
      description: "Videos in archive"
    },
    {
      title: "Partners",
      value: partners.length,
      icon: Users,
      description: "Active partners"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the admin dashboard</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {events.slice(0, 5).map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              ))}
              {events.length === 0 && (
                <p className="text-muted-foreground">No events found</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Media</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[...photos, ...videos].slice(0, 5).map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                </div>
              ))}
              {photos.length === 0 && videos.length === 0 && (
                <p className="text-muted-foreground">No media found</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};