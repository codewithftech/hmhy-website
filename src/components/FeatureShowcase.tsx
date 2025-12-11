import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

const FeatureShowcase = () => {
  const features = [
    "Koble deg til sjåfører som allerede er på vei",
    "Spar opp til 50% på fraktkostnader",
    "Reduser karbonavtrykket ditt betydelig",
    "Sanntidssporing av alle leveranser",
    "Sikker betaling direkte i appen",
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-pacific-blue/5 via-background to-violet-twilight/5 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Column: Full-height Image */}
          <div className="relative min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-twilight/30 to-pacific-blue/30 z-10"></div>
            <img 
              src={heroImage}
              alt="HMHY app demonstration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16 bg-background">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-twilight/10 border border-violet-twilight/20">
                <span className="text-sm font-medium text-violet-twilight">⚡ Funksjoner</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Alt du trenger for smarte leveringer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              HMHY gjør pakkelevering enklere, raskere og mer miljøvennlig enn noensinne.
            </p>

            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-xl bg-violet-twilight/10">
                      <CheckCircle2 className="h-6 w-6 text-violet-twilight" />
                    </div>
                  </div>
                  <span className="text-base md:text-lg text-foreground/90 group-hover:text-foreground transition-colors leading-relaxed pt-3">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
