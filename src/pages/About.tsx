import { Users, Leaf, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Bærekraft",
      description: "Reduserer antall biler på veien",
    },
    {
      icon: Users,
      title: "Samfunn",
      description: "50% av overskudd går til trengende",
    },
    {
      icon: Zap,
      title: "Innovasjon",
      description: "Enkel app, trygg levering, sanntidssporing",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>Om HMHY – Bærekraftig levering i Norge</title>
      <meta 
        name="description" 
        content="Les historien bak HMHY og hvordan vi gjør pakkelevering mer bærekraftig og samfunnsnyttig. Bli med i HMHY i dag." 
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-hero-beige py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Om HMHY – En bærekraftig leveringsplattform
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Vår visjon: gjøre sending av pakker enkelt, effektivt og miljøvennlig
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-hero-beige">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Historien vår
                </h2>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  HMHY ble grunnlagt med et mål om å utnytte eksisterende reiser og redusere CO2-utslipp. 
                  Vår ambisjon er å starte lokalt, utvide nasjonalt, og til slutt globalt – med full transparens.
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  Vi tror på kraften i fellesskapet og teknologi for å skape en bedre fremtid for alle. 
                  Hver pakke som sendes gjennom HMHY er et skritt mot en mer bærekraftig verden.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" 
                  alt="HMHY team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-hero-beige to-background">
          {/* Decorative wave elements */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-100 400 Q 300 200, 600 300 T 1300 250" stroke="hsl(var(--lime-accent))" strokeWidth="3" fill="none" className="animate-pulse"/>
            <path d="M-50 450 Q 350 250, 650 350 T 1350 300" stroke="hsl(var(--lime-accent))" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }}/>
            <path d="M100 100 Q 400 50, 700 150 T 1300 100" stroke="hsl(var(--lime-accent))" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
          </svg>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Misjon & Visjon
                </h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  Våre verdier driver alt vi gjør
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  const colors = [
                    { bg: 'bg-violet-twilight/10', icon: 'text-violet-twilight', border: 'border-violet-twilight/20' },
                    { bg: 'bg-pacific-blue/10', icon: 'text-pacific-blue', border: 'border-pacific-blue/20' },
                    { bg: 'bg-powder-blue/20', icon: 'text-violet-twilight', border: 'border-powder-blue/30' },
                  ];
                  const colorScheme = colors[index % colors.length];
                  
                  return (
                    <div
                      key={index}
                      className={`group flex flex-col items-start text-left p-6 md:p-8 rounded-2xl bg-background border ${colorScheme.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className={`mb-6 p-4 rounded-xl ${colorScheme.bg}`}>
                        <Icon className={`h-8 w-8 ${colorScheme.icon}`} strokeWidth={2} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Team Image */}
                <div className="relative order-2 md:order-1">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl"></div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                      alt="HMHY team arbeider sammen" 
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
                  </div>
                </div>

                {/* Right: Team Description */}
                <div className="space-y-6 order-1 md:order-2">
                  <div className="inline-block">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Vårt team</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Et team drevet av lidenskap
                  </h2>
                  
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    HMHY-teamet består av en gruppe dedikerte innovatører, teknologer og miljøentusiaster 
                    som deler en felles visjon: å gjøre pakkelevering mer bærekraftig og samfunnsnyttig.
                  </p>
                  
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Med bakgrunn fra teknologi, logistikk og bærekraft jobber vi sammen for å skape 
                    løsninger som ikke bare effektiviserer leveringer, men også bidrar til et bedre samfunn. 
                    Vår ekspertise kombinert med en sterk tro på fellesskapets kraft driver oss fremover.
                  </p>

                  <div className="pt-4 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-foreground/70">Teammedlemmer</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-foreground/70">Års erfaring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm text-foreground/70">Dedikasjon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
