import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VideoIntroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
      {/* Background video placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/60"></div>
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to Our Country
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Discover the beauty, culture, and heritage of our magnificent nation
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="bg-background/20 backdrop-blur-sm border border-background/30 hover:bg-background/30 text-primary-foreground text-lg px-8 py-6 rounded-full"
        >
          <Play className="mr-2 h-5 w-5" />
          Watch Introduction Video
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};