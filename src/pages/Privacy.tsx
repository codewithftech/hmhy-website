import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>HMHY Personvern – Hvordan vi beskytter dine data</title>
      <meta 
        name="description" 
        content="Les om hvordan HMHY samler inn, bruker og beskytter personopplysninger for sendere, sjåfører og brukere." 
      />

      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-hero-beige py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Personvern
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Hvilke opplysninger samler vi inn</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY samler inn følgende personopplysninger når du bruker vår tjeneste:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li><strong>Registreringsdata:</strong> Navn, telefonnummer, e-postadresse verifisert via BankID eller Vipps</li>
                    <li><strong>Pakkeinformasjon:</strong> Beskrivelse av pakke, vekt, dimensjoner, bilder</li>
                    <li><strong>Adressedata:</strong> Hente- og leveringsadresser for hver forespørsel</li>
                    <li><strong>GPS-data:</strong> Posisjon under transport for sanntidssporing (kun når levering pågår)</li>
                    <li><strong>Betalingsinformasjon:</strong> Behandles av våre betalingspartnere (Vipps, Stripe)</li>
                    <li><strong>Kommunikasjon:</strong> Meldinger mellom sendere og sjåfører i appen</li>
                    <li><strong>Bruksdata:</strong> Informasjon om hvordan du bruker appen og tjenesten</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Hvordan vi bruker informasjonen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi bruker dine personopplysninger til følgende formål:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>Å levere og forbedre HMHY sin tjeneste</li>
                    <li>Å matche sendere med sjåfører for leveringer</li>
                    <li>Å sikre trygg verifisering av alle brukere</li>
                    <li>Å behandle betalinger og forsikring</li>
                    <li>Å gi kundesupport og svare på henvendelser</li>
                    <li>Å sende viktige varsler og oppdateringer om leveringer</li>
                    <li>Å forbedre brukeropplevelsen og utvikle nye funksjoner</li>
                    <li>Å oppfylle juridiske krav og forpliktelser</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Deling av informasjon</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY deler kun dine personopplysninger når det er nødvendig:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li><strong>Med sjåfører/sendere:</strong> Nødvendig informasjon for å gjennomføre leveringen (navn, adresse, kontaktinfo)</li>
                    <li><strong>Betalingsleverandører:</strong> Vipps og Stripe for å behandle betalinger</li>
                    <li><strong>Forsikringsselskap:</strong> Ved aktivering av forsikring for pakker</li>
                    <li><strong>Juridiske krav:</strong> Når loven krever det eller for å beskytte våre rettigheter</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Vi selger aldri dine personopplysninger til tredjeparter for markedsføringsformål.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Sikkerhet</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi tar sikkerheten til dine personopplysninger på alvor og bruker følgende tiltak:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>Kryptering av data både under overføring og lagring</li>
                    <li>Streng tilgangskontroll - kun autorisert personell har tilgang</li>
                    <li>Regelmessige sikkerhetsgjennomganger og oppdateringer</li>
                    <li>Sikker verifisering via BankID og Vipps</li>
                    <li>Overvåking og logging av systemaktivitet</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Ingen metode for overføring over internett eller elektronisk lagring er 100% sikker, men vi gjør alt vi kan for å beskytte dine data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Dine rettigheter</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I henhold til GDPR og norsk personvernlovgivning har du følgende rettigheter:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li><strong>Innsyn:</strong> Du kan be om en kopi av alle personopplysninger vi har om deg</li>
                    <li><strong>Retting:</strong> Du kan be om at uriktige opplysninger blir rettet</li>
                    <li><strong>Sletting:</strong> Du kan be om at dine personopplysninger blir slettet</li>
                    <li><strong>Begrensning:</strong> Du kan be om at behandlingen av dine data blir begrenset</li>
                    <li><strong>Dataportabilitet:</strong> Du kan be om å få dine data i et strukturert format</li>
                    <li><strong>Protest:</strong> Du kan protestere mot behandling av dine personopplysninger</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    For å utøve dine rettigheter, kontakt oss på <a href="mailto:personvern@hmhy.no" className="text-primary hover:underline">personvern@hmhy.no</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Lagringstid</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi lagrer dine personopplysninger kun så lenge det er nødvendig:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>Kontoopplysninger lagres til du sletter kontoen din</li>
                    <li>Leveringshistorikk lagres i 5 år for juridiske formål</li>
                    <li>Betalingsinformasjon lagres i henhold til bokføringsloven (5 år)</li>
                    <li>GPS-data slettes automatisk 30 dager etter levering</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies og sporingsteknologi</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY bruker cookies og lignende teknologier for å:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>Holde deg innlogget i appen</li>
                    <li>Analysere bruk av tjenesten for å forbedre den</li>
                    <li>Tilpasse innholdet til deg</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Du kan administrere cookie-innstillinger i appen eller i din nettlesers innstillinger.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Endringer i personvernet</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi kan oppdatere denne personvernerklæringen fra tid til annen. Vesentlige endringer vil bli varslet via e-post eller i appen. Din fortsatte bruk av HMHY etter endringer trer i kraft anses som aksept av de nye vilkårene.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Kontakt oss</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hvis du har spørsmål om vår personvernpraksis, kan du kontakte oss:
                  </p>
                  <div className="mt-3 text-muted-foreground">
                    <p><strong>E-post:</strong> <a href="mailto:personvern@hmhy.no" className="text-primary hover:underline">personvern@hmhy.no</a></p>
                    <p><strong>Adresse:</strong> HMHY AS, Oslo, Norge</p>
                    <p><strong>Telefon:</strong> +47 123 45 678</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Sist oppdatert: 1. januar 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
