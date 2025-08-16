import { MapPin, Users, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CountryIntroSection = () => {
  const stats = [
    { icon: MapPin, label: "Area", value: "XXX,XXX km²" },
    { icon: Users, label: "Population", value: "XX Million" },
    { icon: Calendar, label: "Founded", value: "XXXX" },
    { icon: Award, label: "UNESCO Sites", value: "XX" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Our Country
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our country is a land of rich history, diverse culture, and breathtaking landscapes. 
              From ancient monuments to modern cities, from pristine beaches to majestic mountains, 
              we offer an experience like no other.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a heritage spanning thousands of years, our nation has been home to great 
              civilizations, renowned artists, and influential leaders who have shaped the world.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Country landscape" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};