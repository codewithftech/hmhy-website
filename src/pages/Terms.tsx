import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>HMHY Vilkår – Bruksvilkår for pakkelevering</title>
      <meta 
        name="description" 
        content="Les HMHY sine vilkår for bruk av appen og leveringstjenester. Viktig informasjon for sendere og sjåfører." 
      />

      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-hero-beige py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Vilkår for bruk av HMHY
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Generelt</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Disse vilkårene gjelder for din bruk av HMHY sin app og tjenester. Ved å registrere deg og bruke HMHY aksepterer du disse vilkårene i sin helhet. HMHY AS ("HMHY", "vi", "oss") er en plattform som forbinder sendere med sjåfører for leveringer av pakker.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Vi forbeholder oss retten til å endre disse vilkårene. Endringer vil bli varslet gjennom appen eller per e-post.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Registrering og konto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For å bruke HMHY må du være minimum 18 år og registrere deg med gyldig BankID eller Vipps. Du er ansvarlig for å holde dine innloggingsopplysninger konfidensielle og for all aktivitet som skjer under din konto.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Du forplikter deg til å oppgi korrekt og oppdatert informasjon ved registrering. Falsk informasjon kan føre til utestengelse fra tjenesten.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Tjenester</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY tilbyr en plattform hvor sendere kan opprette forespørsler om pakkeleveringer, og sjåfører kan tilby å frakte pakkene. HMHY er kun en formidler og er ikke ansvarlig for selve transporten eller pakkens innhold.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong>For sendere:</strong> Du er ansvarlig for å beskrive pakken korrekt, pakke den forsvarlig, og oppgi riktig hente- og leveringsadresse.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong>For sjåfører:</strong> Du forplikter deg til å transportere pakken trygt og levere den til avtalt tid og sted.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Betaling og avgifter</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Priser for leveringer avtales mellom sender og sjåfør gjennom tilbudssystemet. HMHY tar en servicegebyr på 10% av hver transaksjon.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Betaling skjer automatisk når både sjåfør og mottaker har bekreftet levering. Refusjon kan gis ved manglende levering eller dokumentert skade, i henhold til våre retningslinjer.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Valgfri forsikring kan kjøpes for å dekke pakkens verdi ved skade eller tap.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Ansvar og begrensninger</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY er ikke ansvarlig for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>Skader på pakken under transport, med mindre forsikring er kjøpt</li>
                    <li>Forsinkelser forårsaket av trafikk, vær eller andre forhold utenfor vår kontroll</li>
                    <li>Tap av pakke grunnet feil informasjon fra sender</li>
                    <li>Innhold i pakken som bryter norsk lov</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    HMHY sitt totale ansvar er begrenset til beløpet betalt for den aktuelle leveringen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Brukerens forpliktelser</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Som bruker forplikter du deg til å:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>Oppgi korrekt informasjon om pakker og leveringsadresser</li>
                    <li>Pakke pakker forsvarlig for transport</li>
                    <li>Ikke sende ulovlige eller farlige varer</li>
                    <li>Behandle andre brukere med respekt</li>
                    <li>Følge norsk lov og HMHY sine retningslinjer</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Endringer i vilkår</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY kan oppdatere disse vilkårene fra tid til annen. Vesentlige endringer vil bli varslet minst 30 dager i forveien via e-post eller i appen. Din fortsatte bruk av tjenesten etter endringer trer i kraft anses som aksept av de nye vilkårene.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Tvisteløsning og lovvalg</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal søkes løst i minnelighet. Dersom dette ikke lykkes, kan saken bringes inn for norske domstoler med Oslo tingrett som verneting.
                  </p>
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

export default Terms;
