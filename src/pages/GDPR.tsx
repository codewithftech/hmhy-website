import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const GDPR = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>HMHY GDPR – Databeskyttelse og brukerrettigheter</title>
      <meta 
        name="description" 
        content="Lær hvordan HMHY følger GDPR og beskytter personopplysninger for alle brukere. Finn ut hvordan du kan utøve dine rettigheter." 
      />

      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-hero-beige py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                GDPR – Databeskyttelse hos HMHY
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
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY AS er forpliktet til å beskytte dine personopplysninger i samsvar med EUs General Data Protection Regulation (GDPR) og norsk personvernlovgivning. Dette dokumentet forklarer hvordan vi overholder GDPR-kravene og hvilke rettigheter du har.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Behandlingsansvarlig</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    HMHY AS er behandlingsansvarlig for dine personopplysninger.
                  </p>
                  <div className="mt-3 text-muted-foreground">
                    <p><strong>Organisasjonsnummer:</strong> XXX XXX XXX</p>
                    <p><strong>Adresse:</strong> Oslo, Norge</p>
                    <p><strong>E-post:</strong> <a href="mailto:personvern@hmhy.no" className="text-primary hover:underline">personvern@hmhy.no</a></p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Hvilke data vi behandler</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi behandler følgende kategorier av personopplysninger:
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                      <h3 className="font-semibold text-foreground mb-2">Identifikasjonsdata</h3>
                      <p className="text-sm text-muted-foreground">Navn, telefonnummer, e-postadresse, BankID/Vipps-informasjon</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                      <h3 className="font-semibold text-foreground mb-2">Kontaktdata</h3>
                      <p className="text-sm text-muted-foreground">Adresser for henting og levering av pakker</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                      <h3 className="font-semibold text-foreground mb-2">Transaksjonsdata</h3>
                      <p className="text-sm text-muted-foreground">Betalingsinformasjon, leveringshistorikk, tilbud og bestillinger</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                      <h3 className="font-semibold text-foreground mb-2">Tekniske data</h3>
                      <p className="text-sm text-muted-foreground">GPS-posisjon under levering, IP-adresse, enhetstype, nettlesertype</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                      <h3 className="font-semibold text-foreground mb-2">Kommunikasjonsdata</h3>
                      <p className="text-sm text-muted-foreground">Meldinger i appen, kundehenvendelser</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Formål med behandling og rettslig grunnlag</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-3 font-semibold">Formål</th>
                          <th className="text-left p-3 font-semibold">Rettslig grunnlag</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="p-3 text-muted-foreground">Levere HMHY-tjenesten</td>
                          <td className="p-3 text-muted-foreground">Kontraktsoppfyllelse (GDPR art. 6.1.b)</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">Verifisere brukere</td>
                          <td className="p-3 text-muted-foreground">Berettiget interesse og sikkerhet (GDPR art. 6.1.f)</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">Behandle betalinger</td>
                          <td className="p-3 text-muted-foreground">Kontraktsoppfyllelse (GDPR art. 6.1.b)</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">GPS-sporing under levering</td>
                          <td className="p-3 text-muted-foreground">Samtykke (GDPR art. 6.1.a)</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">Kundesupport</td>
                          <td className="p-3 text-muted-foreground">Berettiget interesse (GDPR art. 6.1.f)</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">Markedsføring (nyhetsbrev)</td>
                          <td className="p-3 text-muted-foreground">Samtykke (GDPR art. 6.1.a)</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">Oppfylle juridiske krav</td>
                          <td className="p-3 text-muted-foreground">Juridisk forpliktelse (GDPR art. 6.1.c)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Dine rettigheter under GDPR</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Du har følgende rettigheter når det gjelder behandling av dine personopplysninger:
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-pacific-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-pacific-blue">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Rett til innsyn (art. 15)</h3>
                        <p className="text-sm text-muted-foreground">Du kan be om en kopi av alle personopplysninger vi har om deg.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-violet-twilight/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-violet-twilight">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Rett til retting (art. 16)</h3>
                        <p className="text-sm text-muted-foreground">Du kan be om at uriktige eller ufullstendige opplysninger blir rettet.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Rett til sletting (art. 17)</h3>
                        <p className="text-sm text-muted-foreground">Du kan be om at dine personopplysninger blir slettet, med visse unntak.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-pacific-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-pacific-blue">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Rett til begrensning (art. 18)</h3>
                        <p className="text-sm text-muted-foreground">Du kan be om at behandlingen av dine data blir begrenset i visse tilfeller.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-violet-twilight/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-violet-twilight">5</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Rett til dataportabilitet (art. 20)</h3>
                        <p className="text-sm text-muted-foreground">Du kan be om å få dine data i et strukturert, maskinlesbart format.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">6</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Rett til å protestere (art. 21)</h3>
                        <p className="text-sm text-muted-foreground">Du kan protestere mot behandling basert på berettiget interesse.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-pacific-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-pacific-blue">7</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Rett til å trekke tilbake samtykke (art. 7.3)</h3>
                        <p className="text-sm text-muted-foreground">Du kan når som helst trekke tilbake samtykke til behandling.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Behandling og lagring</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi har implementert omfattende sikkerhetstiltak for å beskytte dine personopplysninger:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>End-to-end kryptering av sensitiv data</li>
                    <li>Rollebasert tilgangskontroll</li>
                    <li>Regelmessige sikkerhetsrevisjoner og penetrasjonstester</li>
                    <li>Pseudonymisering og anonymisering der mulig</li>
                    <li>Automatisk sletting av data etter utløpt lagringstid</li>
                    <li>Logging og overvåking av databehandling</li>
                    <li>Databehandleravtaler med alle underleverandører</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Overføring til tredjeland</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dine data lagres primært i Norge og EU/EØS. I de tilfeller hvor data overføres til land utenfor EU/EØS, sikrer vi at det foreligger et passende beskyttelsesnivå gjennom:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
                    <li>EU-godkjente standardavtaler</li>
                    <li>Privacy Shield-sertifisering (for amerikanske selskaper)</li>
                    <li>Andre godkjente overføringsmekanismer i henhold til GDPR</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Hvordan utøve dine rettigheter</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For å utøve dine GDPR-rettigheter, kontakt oss på:
                  </p>
                  <div className="bg-pacific-blue/5 rounded-xl p-6 border border-pacific-blue/20">
                    <p className="text-muted-foreground"><strong>E-post:</strong> <a href="mailto:personvern@hmhy.no" className="text-primary hover:underline">personvern@hmhy.no</a></p>
                    <p className="text-muted-foreground mt-2"><strong>Emne:</strong> "GDPR-forespørsel"</p>
                    <p className="text-muted-foreground mt-2"><strong>Responstid:</strong> Vi svarer innen 30 dager</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Vi kan be om identitetsbekreftelse for å sikre at vi utleverer data til riktig person.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Klagerett</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hvis du mener vi ikke overholder GDPR, har du rett til å klage til tilsynsmyndigheten:
                  </p>
                  <div className="mt-4 bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border">
                    <p className="font-semibold text-foreground">Datatilsynet</p>
                    <p className="text-sm text-muted-foreground mt-2">Postboks 458 Sentrum, 0105 Oslo</p>
                    <p className="text-sm text-muted-foreground">Telefon: 22 39 69 00</p>
                    <p className="text-sm text-muted-foreground">E-post: <a href="mailto:postkasse@datatilsynet.no" className="text-primary hover:underline">postkasse@datatilsynet.no</a></p>
                    <p className="text-sm text-muted-foreground">Nettside: <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.datatilsynet.no</a></p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Relaterte dokumenter</h2>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/personvern" className="text-primary hover:underline">
                      → Personvernerklæring
                    </Link>
                    <Link to="/vilkar" className="text-primary hover:underline">
                      → Vilkår for bruk
                    </Link>
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

export default GDPR;
