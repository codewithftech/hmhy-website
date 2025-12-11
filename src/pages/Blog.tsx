import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Hvordan HMHY reduserer CO2-utslipp i Norge",
      excerpt: "Oppdag hvordan vår innovative leveringsmodell bidrar til et grønnere Norge ved å optimalisere eksisterende kjøreruter.",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop",
      category: "Miljø",
      date: "15. mars 2024",
      slug: "reduserer-co2-utslipp"
    },
    {
      title: "Suksesshistorie: Familien som tjener ekstra på sine daglige turer",
      excerpt: "Møt Mari og Jonas som bruker HMHY til å tjene penger på ruten mellom Oslo og Bergen hver helg.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      category: "Suksesshistorier",
      date: "10. mars 2024",
      slug: "familie-tjener-ekstra"
    },
    {
      title: "5 tips for trygg pakkelevering med HMHY",
      excerpt: "Lær hvordan du kan sikre at pakken din kommer trygt fram ved å følge disse enkle tipsene.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      category: "Tips",
      date: "5. mars 2024",
      slug: "tips-trygg-pakkelevering"
    },
    {
      title: "BankID-verifisering: Din garanti for sikkerhet",
      excerpt: "Hvorfor vi bruker BankID og Vipps for å sikre at alle brukere er verifiserte og pålitelige.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      category: "Sikkerhet",
      date: "28. februar 2024",
      slug: "bankid-sikkerhet"
    },
    {
      title: "HMHY lanserer i nye byer: Stavanger og Trondheim",
      excerpt: "Vi utvider tjenesten vår til to nye byer. Les mer om hva dette betyr for deg.",
      image: "https://images.unsplash.com/photo-1464577258586-09b2e38a8cc1?w=800&h=600&fit=crop",
      category: "Nyheter",
      date: "20. februar 2024",
      slug: "lanserer-nye-byer"
    },
    {
      title: "Hvordan HMHY fungerer for bedrifter",
      excerpt: "Bedrifter over hele Norge bruker HMHY for kostnadseffektive og bærekraftige leveringer. Les hvordan.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      category: "Bedrift",
      date: "12. februar 2024",
      slug: "hmhy-for-bedrifter"
    },
  ];

  const categories = ["Alle", "Tips", "Suksesshistorier", "Nyheter", "Miljø", "Sikkerhet", "Bedrift"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>HMHY Blogg – Nyheter og suksesshistorier</title>
      <meta 
        name="description" 
        content="Les historier fra HMHY, tips for sendere og sjåfører, og nyheter om bærekraftig levering i Norge." 
      />

      <Header />

      <main className="flex-1 bg-hero-beige">
        {/* Header Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Blogg – Suksesshistorier og nyheter fra HMHY
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Bli inspirert og lær mer om bærekraftig levering
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Main Content - Blog Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Link to={`/blogg/${post.slug}`} key={index}>
                      <article className="group bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-pacific-blue/10 text-pacific-blue">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{post.date}</span>
                          </div>
                          <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                          <Button variant="ghost" className="px-0 hover:bg-transparent">
                            Les mer →
                          </Button>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Search */}
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Søk</h3>
                    <div className="relative">
                      <Input
                        type="search"
                        placeholder="Søk i bloggen..."
                        className="pr-10"
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Kategorier</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button className="text-sm text-foreground/70 hover:text-foreground transition-colors w-full text-left">
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-violet-twilight to-pacific-blue rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-3">Få nyheter på e-post</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Meld deg på vårt nyhetsbrev og få de siste oppdateringene direkte i innboksen.
                    </p>
                    <Input
                      type="email"
                      placeholder="Din e-post"
                      className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button className="w-full bg-white text-violet-twilight hover:bg-white/90">
                      Meld deg på
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
