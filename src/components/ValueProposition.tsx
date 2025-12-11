import { Leaf, DollarSign, Zap, Smartphone } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Leaf,
      title: "Miljø",
      description: "Reduser CO2-utslipp ved å utnytte eksisterende reiser",
    },
    {
      icon: DollarSign,
      title: "Sparsomt",
      description: "Lavere leveringskostnader for deg og sjåføren",
    },
    {
      icon: Zap,
      title: "Effektivt",
      description: "Rask levering med sjåfører som allerede planlegger ruten",
    },
    {
      icon: Smartphone,
      title: "Enkelt",
      description: "Brukervennlig app med sanntidssporing",
    },
  ];

  return (
    <section id="funksjoner" className="py-20 md:py-24 lg:py-32 bg-smoke-white relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-twilight/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pacific-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-twilight/10 border border-violet-twilight/20">
              <span className="text-sm font-medium text-violet-twilight">🌟 Hvorfor velge HMHY?</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Vi kombinerer teknologi med bærekraft
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolusjonerer pakkelevering for en grønnere fremtid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colors = [
              { bg: 'bg-violet-twilight/10', icon: 'text-violet-twilight', border: 'border-violet-twilight/20' },
              { bg: 'bg-pacific-blue/10', icon: 'text-pacific-blue', border: 'border-pacific-blue/20' },
              { bg: 'bg-powder-blue/20', icon: 'text-violet-twilight', border: 'border-powder-blue/30' },
              { bg: 'bg-violet-twilight/10', icon: 'text-pacific-blue', border: 'border-violet-twilight/20' },
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className={`group flex flex-col items-start text-left p-6 md:p-8 rounded-2xl bg-background border ${colorScheme.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`mb-6 p-4 rounded-xl ${colorScheme.bg}`}>
                  <Icon className={`h-8 w-8 ${colorScheme.icon}`} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
