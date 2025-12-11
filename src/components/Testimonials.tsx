import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lars Hansen",
      role: "Avsender",
      quote: "HMHY gjorde leveringen min så mye enklere og rimeligere. Perfekt for små bedrifter!",
      initials: "LH",
    },
    {
      name: "Maria Olsen",
      role: "Sjåfør",
      quote: "Jeg tjener ekstra mens jeg kjører til jobb. Appen er super enkel å bruke!",
      initials: "MO",
    },
    {
      name: "Erik Johansen",
      role: "Mottaker",
      quote: "Pakken kom raskere enn forventet, og jeg vet at det var miljøvennlig. Anbefales!",
      initials: "EJ",
    },
    {
      name: "Sofie Berg",
      role: "Avsender",
      quote: "Fantastisk service! Jeg sparer både tid og penger på hver sending.",
      initials: "SB",
    },
    {
      name: "Thomas Nielsen",
      role: "Sjåfør",
      quote: "En genial måte å optimalisere kjøringen min på. Flott tilleggsinntekt!",
      initials: "TN",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-background min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-twilight/10 border border-violet-twilight/20">
              <span className="text-sm font-medium text-violet-twilight">💬 Tilbakemeldinger</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Hva kundene våre sier
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tusenvis av fornøyde brukere har allerede byttet til HMHY
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="testimonials-carousel w-full"
          >
            <CarouselContent className="testimonials-carousel -ml-4">
              {testimonials.map((testimonial, index) => {
              const avatarColors = [
                'bg-gradient-to-br from-violet-twilight to-violet-twilight/80',
                'bg-gradient-to-br from-pacific-blue to-pacific-blue/80',
                'bg-gradient-to-br from-violet-twilight to-pacific-blue',
              ];
              
              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="rounded-2xl border border-border/40 shadow-md bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6 flex flex-col h-full min-h-[220px]">
                      <p className="text-base text-foreground/90 leading-relaxed mb-8 italic flex-1">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <Avatar className="h-12 w-12 border-2 border-border/20">
                          <AvatarFallback className={`${avatarColors[index % avatarColors.length]} text-white text-sm font-semibold`}>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-base font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
        
        {/* Fade effect overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-16 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-16 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
