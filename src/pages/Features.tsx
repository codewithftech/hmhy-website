import { Package, Upload, Users, MapPin, CheckCircle, Shield, CreditCard, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import mockup1 from "@/assets/app-mockup-1.png";

const Features = () => {
  const topFeatures = [
    {
      icon: Package,
      title: "Opprett og spor forespørsler",
      description: "Registrer pakken din raskt og enkelt, og følg med på pakkens reise i sanntid med GPS-sporing",
    },
    {
      icon: Upload,
      title: "Last opp bilder av pakken",
      description: "Ta bilder av pakken din for å sikre trygg transport og dokumentasjon",
    },
    {
      icon: Users,
      title: "Motta tilbud fra sjåfører",
      description: "Få konkurransedyktige tilbud fra verifiserte sjåfører i ditt område",
    },
    {
      icon: MapPin,
      title: "Sanntid GPS-sporing",
      description: "Følg med på pakkens reise live fra dør til dør med HMHY-tracking",
    },
  ];

  const bottomFeatures = [
    {
      icon: Shield,
      title: "BankID/Vipps verifisering",
      description: "Alle brukere verifiseres med norsk BankID eller Vipps for maksimal sikkerhet",
    },
    {
      icon: CreditCard,
      title: "Sikker betaling",
      description: "Automatisk betaling når leveringen er bekreftet av mottaker",
    },
    {
      icon: CheckCircle,
      title: "Valgfri forsikring",
      description: "Velg mellom ulike forsikringsnivåer for økt trygghet og sikkerhet",
    },
  ];

  const extraFeature = {
    icon: TrendingUp,
    title: "Tjen ekstra på dine turer",
    description: "Sjåfører kan tilby transport langs eksisterende ruter og tjene ekstra uten ekstra kjøring",
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>HMHY Funksjoner – Sikker og enkel pakkelevering</title>
      <meta 
        name="description" 
        content="Oppdag hvordan HMHY gjør pakkelevering enklere, tryggere og mer miljøvennlig for både sendere og sjåfører." 
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Empty placeholder */}
        <section className="relative w-full bg-hero-beige py-8">
        </section>

        {/* Unified Features Section */}
        <section className="py-16 md:py-24 bg-hero-beige">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Alt du trenger. Ingenting du ikke trenger.
                </h2>
                <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                  Enkel, trygg og miljøvennlig pakkelevering for alle
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 auto-rows-min">
                {/* Feature 1 - Top Left */}
                {(() => {
                  const Icon = topFeatures[0].icon;
                  return (
                    <div className="group flex flex-col items-start text-left p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-3 p-3 rounded-xl bg-pacific-blue/10">
                        <Icon className="h-6 w-6 text-pacific-blue" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {topFeatures[0].title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topFeatures[0].description}
                      </p>
                    </div>
                  );
                })()}

                {/* Mobile Mockup - Spans 2 rows */}
                <div className="mobile-card-container relative lg:row-span-2 flex items-center justify-center p-8 rounded-2xl border border-border shadow-sm" style={{ backgroundColor: '#825EF6' }}>
                  <div className="relative max-h-[350px]">
                    <img 
                      src={mockup1} 
                      alt="HMHY app funksjoner" 
                      className="w-full max-w-[280px] mx-auto drop-shadow-2xl h-full object-contain"
                    />
                  </div>
                </div>

                {/* Feature 2 - Top Right */}
                {(() => {
                  const Icon = topFeatures[1].icon;
                  return (
                    <div className="group flex flex-col items-start text-left p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-3 p-3 rounded-xl bg-violet-twilight/10">
                        <Icon className="h-6 w-6 text-violet-twilight" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {topFeatures[1].title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topFeatures[1].description}
                      </p>
                    </div>
                  );
                })()}

                {/* Feature 3 - Bottom Left */}
                {(() => {
                  const Icon = topFeatures[2].icon;
                  return (
                    <div className="group flex flex-col items-start text-left p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-3 p-3 rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {topFeatures[2].title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topFeatures[2].description}
                      </p>
                    </div>
                  );
                })()}

                {/* Mobile mockup spans here (row 2) */}

                {/* Feature 4 - Bottom Right */}
                {(() => {
                  const Icon = topFeatures[3].icon;
                  return (
                    <div className="group flex flex-col items-start text-left p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-3 p-3 rounded-xl bg-lime-accent/10">
                        <Icon className="h-6 w-6 text-foreground" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {topFeatures[3].title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topFeatures[3].description}
                      </p>
                    </div>
                  );
                })()}

                {/* Row 3 - Features 5, 6, 7 spanning all 3 columns */}
                {bottomFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  const iconColors = [
                    { bg: 'bg-pacific-blue/10', text: 'text-pacific-blue' },
                    { bg: 'bg-violet-twilight/10', text: 'text-violet-twilight' },
                    { bg: 'bg-primary/10', text: 'text-primary' },
                  ];
                  const colors = iconColors[index];
                  return (
                    <div
                      key={index}
                      className="group flex flex-col items-start text-left p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`mb-3 p-3 rounded-xl ${colors.bg}`}>
                        <Icon className={`h-6 w-6 ${colors.text}`} strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}

                {/* Row 4 - Extra feature in center column */}
                <div className="lg:col-start-2 group flex flex-col items-start text-left p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-3 p-3 rounded-xl bg-lime-accent/10">
                    <extraFeature.icon className="h-6 w-6 text-foreground" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {extraFeature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {extraFeature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Features;
