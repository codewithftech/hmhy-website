import { Button } from "@/components/ui/button";
import { ChevronDown, Apple } from "lucide-react";
import appMockup1 from "@/assets/app-mockup-1.png";
import appMockup2 from "@/assets/app-mockup-2.png";

const Hero = () => {
  return (
    <section id="home" className="relative bg-hero-beige min-h-[90vh] flex items-center py-12 overflow-hidden">
      {/* Decorative curved lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M-100 600 Q 300 400, 600 500 T 1300 400" stroke="hsl(var(--lime-accent))" strokeWidth="3" fill="none" opacity="0.6"/>
        <path d="M-50 650 Q 350 450, 650 550 T 1350 450" stroke="hsl(var(--lime-accent))" strokeWidth="2" fill="none" opacity="0.4"/>
        <path d="M800 100 Q 1000 250, 1200 150" stroke="hsl(var(--lime-accent))" strokeWidth="3" fill="none" opacity="0.5"/>
      </svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-left">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-twilight/10 border border-violet-twilight/20 mb-6">
                <span className="text-sm font-medium text-violet-twilight">✨ Ny måte å sende pakker på</span>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Send pakker smartere og grønnere med HMHY
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
              Koble deg til sjåfører som allerede er på vei – spar tid, penger og miljøet
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full"
                asChild
              >
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Apple className="h-6 w-6" />
                  Last ned for iOS
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full"
                asChild
              >
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Last ned for Android
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-violet-twilight mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Lavere kostnader</div>
              </div>
              <div className="border-x border-border/50 px-4">
                <div className="text-3xl md:text-4xl font-bold text-pacific-blue mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Mindre CO2</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-violet-twilight mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Fornøyde brukere</div>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockups */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Phone 1 - tilted right */}
            <div className="absolute left-0 lg:left-12 top-1/2 -translate-y-1/2 transform rotate-[-8deg] z-10">
              <img 
                src={appMockup1} 
                alt="HMHY app - package tracking" 
                className="w-64 md:w-72 lg:w-80 drop-shadow-2xl"
              />
            </div>
            
            {/* Phone 2 - tilted left, slightly forward */}
            <div className="absolute right-0 lg:right-12 top-1/2 -translate-y-1/2 transform rotate-[8deg] z-20">
              <img 
                src={appMockup2} 
                alt="HMHY app - driver dashboard" 
                className="w-64 md:w-72 lg:w-80 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
