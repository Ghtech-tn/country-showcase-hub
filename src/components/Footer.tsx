import { Card, CardContent } from "@/components/ui/card";

export const Footer = () => {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg" },
    { name: "Partner 2", logo: "/placeholder.svg" },
    { name: "Partner 3", logo: "/placeholder.svg" },
    { name: "Partner 4", logo: "/placeholder.svg" },
    { name: "Partner 5", logo: "/placeholder.svg" },
    { name: "Partner 6", logo: "/placeholder.svg" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Partners Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
                <CardContent className="p-4 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Logo Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-foreground/10 p-8 rounded-full">
              <img 
                src="/placeholder.svg" 
                alt="Country Logo"
                className="h-24 w-24 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">Our Country</h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto">
            Proudly showcasing our heritage, culture, and achievements to the world
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Culture</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Government</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Economy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tourism</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Hotels</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Travel Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Visa Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Events</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Upcoming</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cultural</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sports</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Festivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Embassy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Tourism Office</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60">
            © 2024 Our Country. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};