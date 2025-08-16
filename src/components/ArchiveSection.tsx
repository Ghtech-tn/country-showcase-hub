import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Download, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ArchiveSection = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const photos = [
    {
      id: 1,
      title: "Historic Monuments",
      url: "/placeholder.svg",
      category: "Heritage",
      year: "2023",
      description: "Collection of our most important historical monuments"
    },
    {
      id: 2,
      title: "Natural Landscapes",
      url: "/placeholder.svg",
      category: "Nature",
      year: "2023",
      description: "Beautiful landscapes showcasing our natural heritage"
    },
    {
      id: 3,
      title: "Cultural Festivals",
      url: "/placeholder.svg",
      category: "Culture",
      year: "2023",
      description: "Moments captured from our vibrant cultural celebrations"
    },
    {
      id: 4,
      title: "Modern Architecture",
      url: "/placeholder.svg",
      category: "Architecture",
      year: "2024",
      description: "Contemporary buildings that define our modern skyline"
    },
    {
      id: 5,
      title: "Traditional Crafts",
      url: "/placeholder.svg",
      category: "Heritage",
      year: "2023",
      description: "Artisans preserving our traditional craftsmanship"
    },
    {
      id: 6,
      title: "National Parks",
      url: "/placeholder.svg",
      category: "Nature",
      year: "2024",
      description: "Protected areas showcasing our biodiversity"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Country Documentary 2023",
      thumbnail: "/placeholder.svg",
      duration: "45:30",
      category: "Documentary",
      year: "2023",
      description: "Comprehensive documentary about our nation's history and culture"
    },
    {
      id: 2,
      title: "Cultural Heritage Series",
      thumbnail: "/placeholder.svg",
      duration: "12:15",
      category: "Culture",
      year: "2023",
      description: "Exploring our rich cultural traditions and customs"
    },
    {
      id: 3,
      title: "Tourism Highlights",
      thumbnail: "/placeholder.svg",
      duration: "8:42",
      category: "Tourism",
      year: "2024",
      description: "Showcasing the best tourist destinations in our country"
    },
    {
      id: 4,
      title: "National Day Celebration",
      thumbnail: "/placeholder.svg",
      duration: "25:18",
      category: "Events",
      year: "2024",
      description: "Live coverage of our national day celebrations"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Media Archive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of photos and videos showcasing the beauty and heritage of our nation
          </p>
        </div>

        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
            <TabsTrigger value="videos">Video Archive</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                  <div className="relative group">
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => setSelectedMedia(photo)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-background/80 text-foreground">
                      {photo.year}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{photo.description}</p>
                    <Badge variant="outline" className="text-xs">{photo.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                  <div className="relative group">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => setSelectedMedia(video)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Play
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    <Badge className="absolute top-2 right-2 bg-background/80 text-foreground">
                      {video.year}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{video.description}</p>
                    <Badge variant="outline" className="text-xs">{video.category}</Badge>
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