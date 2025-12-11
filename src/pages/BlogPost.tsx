import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, Facebook, Linkedin, Twitter, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams();

  // Example blog post data - in production this would come from CMS/API
  const blogPost = {
    title: "Hvordan HMHY gjør pakkelevering enklere for alle",
    subheading: "Et innblikk i hvordan teknologien vår forenkler hverdagen for sendere og sjåfører.",
    author: "Mari Andersen",
    date: "15. mars 2024",
    category: "Teknologi",
    featuredImage: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&h=600&fit=crop",
    content: {
      intro: "I en verden der tiden er dyrebar og bærekraft er viktigere enn noensinne, er det behov for smartere løsninger for pakkelevering. HMHY revolusjonerer måten vi tenker på transport ved å koble sammen mennesker som skal samme vei.",
      sections: [
        {
          heading: "Teknologi som forenkler hverdagen",
          paragraphs: [
            "Vår app bruker avansert algoritme for å matche sendere med sjåfører som allerede er på vei til samme destinasjon. Dette reduserer både kostnader og miljøavtrykk samtidig som det gir en raskere leveringstid.",
            "Med integrert BankID-verifisering og sanntidssporing kan både sendere og sjåfører føle seg trygge gjennom hele prosessen."
          ]
        },
        {
          heading: "Slik fungerer det i praksis",
          paragraphs: [
            "Det er tre enkle steg:",
            "1. Last ned appen og registrer deg med BankID\n2. Legg inn pakken din som sender, eller registrer din rute som sjåfør\n3. Få match basert på rute, tidspunkt og pakke-størrelse"
          ],
          callout: {
            text: "Over 10,000 pakker er allerede levert gjennom HMHY, med en gjennomsnittlig besparelse på 45% sammenlignet med tradisjonelle leveringstjenester.",
            type: "info"
          }
        },
        {
          heading: "Sikkerhet i fokus",
          paragraphs: [
            "Sikkerhet er vår høyeste prioritet. Alle brukere må verifiseres med BankID, og vi har innebygde funksjoner for rating og tilbakemelding.",
            "Betalinger håndteres trygt gjennom Vipps, og alle leveranser er forsikret."
          ]
        }
      ],
      conclusion: "HMHY representerer fremtiden for pakkelevering - en fremtid der teknologi, bærekraft og fellesskap går hånd i hånd. Bli med på reisen i dag!"
    }
  };

  // Related articles
  const relatedArticles = [
    {
      title: "5 tips for trygg pakkelevering med HMHY",
      excerpt: "Lær hvordan du kan sikre at pakken din kommer trygt fram ved å følge disse enkle tipsene.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      slug: "tips-trygg-pakkelevering"
    },
    {
      title: "BankID-verifisering: Din garanti for sikkerhet",
      excerpt: "Hvorfor vi bruker BankID og Vipps for å sikre at alle brukere er verifiserte og pålitelige.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      slug: "bankid-sikkerhet"
    },
    {
      title: "Hvordan HMHY reduserer CO2-utslipp i Norge",
      excerpt: "Oppdag hvordan vår innovative leveringsmodell bidrar til et grønnere Norge.",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
      slug: "reduserer-co2-utslipp"
    }
  ];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>{blogPost.title} | HMHY Blogg</title>
      <meta name="description" content={blogPost.subheading} />
      <meta property="og:title" content={blogPost.title} />
      <meta property="og:description" content={blogPost.subheading} />
      <meta property="og:image" content={blogPost.featuredImage} />
      
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <article className="py-12 md:py-16 bg-gradient-to-b from-hero-beige to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm">
                <Link to="/blogg" className="text-violet-twilight hover:underline">
                  Blogg
                </Link>
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-muted-foreground">{blogPost.title}</span>
              </nav>

              {/* Title & Metadata */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {blogPost.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                  {blogPost.subheading}
                </p>
                
                {/* Metadata */}
                <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span className="px-3 py-1 bg-violet-twilight/10 text-violet-twilight rounded-full">
                      {blogPost.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-12 rounded-2xl overflow-hidden">
                <img 
                  src={blogPost.featuredImage} 
                  alt={blogPost.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
                  {blogPost.content.intro}
                </p>

                {blogPost.content.sections.map((section, index) => (
                  <div key={index} className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                    
                    {section.callout && (
                      <div className="my-8 p-6 bg-violet-twilight/5 border-l-4 border-violet-twilight rounded-r-xl">
                        <p className="text-base md:text-lg text-foreground/90 font-medium">
                          💡 {section.callout.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
                  {blogPost.content.conclusion}
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-gradient-to-br from-violet-twilight/5 to-pacific-blue/5 rounded-2xl border border-violet-twilight/20">
                <h3 className="text-2xl font-semibold mb-4">Klar til å prøve HMHY?</h3>
                <p className="text-muted-foreground mb-6">
                  Last ned appen i dag og opplev fremtidens pakkelevering
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full">
                    Last ned for iOS
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Last ned for Android
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Social Share Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-center">Del denne artikkelen</h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-4 rounded-full bg-[#1877f2] text-white hover:opacity-90 transition-opacity"
                  aria-label="Del på Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-4 rounded-full bg-[#0a66c2] text-white hover:opacity-90 transition-opacity"
                  aria-label="Del på LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-4 rounded-full bg-[#1da1f2] text-white hover:opacity-90 transition-opacity"
                  aria-label="Del på Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="p-4 rounded-full bg-[#25d366] text-white hover:opacity-90 transition-opacity"
                  aria-label="Del på WhatsApp"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 md:py-20 bg-hero-beige">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Relaterte artikler
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((article, index) => (
                  <Card key={index} className="group bg-background overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                    <Link to={`/blogg/${article.slug}`}>
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-twilight transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <span className="text-violet-twilight font-medium hover:underline">
                          Les mer →
                        </span>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
