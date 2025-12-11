import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqItems = [
    {
      question: "Hvordan oppretter jeg en forespørsel?",
      answer: "Last ned HMHY-appen, registrer deg med BankID eller Vipps, og trykk på 'Opprett forespørsel'. Fyll inn informasjon om pakken din, hente- og leveringsadresse, og publiser forespørselen. Du vil motta tilbud fra verifiserte sjåfører i området.",
      category: "sender",
    },
    {
      question: "Kan jeg spore pakken min i sanntid?",
      answer: "Ja! HMHY har innebygd GPS-sporing som lar deg følge pakkens reise live fra dør til dør. Du får også varsler når pakken blir hentet og levert.",
      category: "sender",
    },
    {
      question: "Hva skjer hvis leveringen blir forsinket?",
      answer: "Sjåføren vil gi deg beskjed via appen hvis det oppstår forsinkelser. Du kan også kontakte sjåføren direkte i appen. Ved vesentlige forsinkelser eller problemer kan du kontakte vår kundesupport.",
      category: "sender",
    },
    {
      question: "Hvordan får jeg forespørsler for ruten min?",
      answer: "Når du er registrert som sjåfør, vil du automatisk få varsler om nye forespørsler langs din vanlige kjørerute. Du kan også søke aktivt etter forespørsler i appen basert på hvor du skal kjøre.",
      category: "driver",
    },
    {
      question: "Hvordan bekrefter jeg levering?",
      answer: "Når du har levert pakken, trykker du 'Bekreft levering' i appen. Mottakeren vil også bekrefte mottak. Begge bekreftelser må være på plass før betaling frigjøres.",
      category: "driver",
    },
    {
      question: "Kan jeg få ekstra forsikring for pakken?",
      answer: "Ja, HMHY tilbyr valgfri forsikring på ulike nivåer. Du kan velge forsikring ved opprettelse av forespørsel, basert på pakkens verdi og ditt behov for ekstra trygghet.",
      category: "driver",
    },
    {
      question: "Hvordan registrerer jeg meg med BankID eller Vipps?",
      answer: "Last ned appen og velg 'Registrer deg'. Du kan velge mellom BankID eller Vipps for verifisering. Følg instruksjonene på skjermen for å fullføre registreringen. Dette sikrer at alle brukere er verifiserte.",
      category: "general",
    },
    {
      question: "Hvordan håndteres betalinger?",
      answer: "Betaling skjer automatisk når både sjåfør og mottaker har bekreftet levering. Pengene holdes trygt av HMHY til leveringen er fullført. Vi bruker sikre betalingsløsninger som Vipps og Stripe.",
      category: "general",
    },
    {
      question: "Hvordan bidrar HMHY til miljøet?",
      answer: "HMHY reduserer CO2-utslipp ved å utnytte eksisterende kjøreruter. Istedenfor at en varebil kjører tom, kan private sjåfører ta med pakker på turer de uansett skal kjøre. Dette reduserer antall unødvendige kjøreturer og er betydelig mer miljøvennlig.",
      category: "general",
    },
    {
      question: "Hva koster det å bruke HMHY?",
      answer: "Prisen settes gjennom et tilbudssystem hvor sjåfører sender inn sine priser. Du velger det tilbudet som passer deg best. HMHY tar en liten servicegebyr på hver transaksjon for å drifte plattformen.",
      category: "general",
    },
  ];

  const senderFAQs = faqItems.filter((item) => item.category === "sender");
  const driverFAQs = faqItems.filter((item) => item.category === "driver");
  const generalFAQs = faqItems.filter((item) => item.category === "general");

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>HMHY FAQ – Ofte stilte spørsmål om pakkelevering</title>
      <meta 
        name="description" 
        content="Få svar på vanlige spørsmål om HMHY-appen, levering, registrering og sikkerhet. Kontakt oss for mer informasjon." 
      />

      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-hero-beige py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Ofte stilte spørsmål
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Her finner du svar på vanlige spørsmål om HMHY og appen
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Sendere Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                For sendere
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {senderFAQs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`sender-${index}`}
                    className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-foreground">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Sjåfører Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                For sjåfører
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {driverFAQs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`driver-${index}`}
                    className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-foreground">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Generelt Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Generelt
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {generalFAQs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`general-${index}`}
                    className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-foreground">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-violet-twilight">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Finner du ikke svaret?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Vi hjelper deg gjerne! Ta kontakt med oss så svarer vi så raskt som mulig.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-violet-twilight hover:bg-white/90 rounded-full px-8"
              >
                <Link to="/kontakt">Kontakt oss</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
