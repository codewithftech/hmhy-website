import { Button } from "@/components/ui/button";
import appMockupCta from "@/assets/app-mockup-cta.png";

const CTASection = () => {
  return (
    <section id="download" className="relative h-[90vh] bg-hero-beige overflow-hidden flex items-center py-24 md:py-32">
      {/* Decorative curved lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M-100 400 Q 300 200, 600 300 T 1300 250" stroke="hsl(var(--lime-accent))" strokeWidth="4" fill="none" className="animate-pulse"/>
        <path d="M-50 450 Q 350 250, 650 350 T 1350 300" stroke="hsl(var(--lime-accent))" strokeWidth="3" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }}/>
        <path d="M100 100 Q 400 50, 700 150 T 1300 100" stroke="hsl(var(--lime-accent))" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
      </svg>

      {/* Enhanced animated decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pacific-blue/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-violet-twilight/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-lime-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-twilight/10 border border-violet-twilight/20">
                <span className="text-sm font-medium text-violet-twilight">🚀 Kom i gang</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Last ned HMHY i dag
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Start med å spare penger og hjelpe miljøet allerede i dag. Tusenvis har allerede tatt steget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full"
                asChild
              >
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
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
          </div>

          {/* Right: Phone Mockup with enhanced effects */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-12 bg-foreground/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-lime-accent/30 to-foreground/10 rounded-full blur-2xl"></div>
              <img 
                src={appMockupCta} 
                alt="HMHY app interface" 
                className="relative w-64 md:w-80 lg:w-[420px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
