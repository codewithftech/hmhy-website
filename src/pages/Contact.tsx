import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Fornavn er påkrevd" }).max(100, { message: "Fornavn må være mindre enn 100 tegn" }),
  lastName: z.string().trim().min(1, { message: "Etternavn er påkrevd" }).max(100, { message: "Etternavn må være mindre enn 100 tegn" }),
  email: z.string().trim().email({ message: "Ugyldig e-postadresse" }).max(255, { message: "E-post må være mindre enn 255 tegn" }),
  phone: z.string().trim().min(1, { message: "Telefon er påkrevd" }).max(20, { message: "Telefon må være mindre enn 20 tegn" }),
  message: z.string().trim().min(1, { message: "Melding er påkrevd" }).max(2000, { message: "Melding må være mindre enn 2000 tegn" })
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      toast({
        title: "Melding sendt!",
        description: "Vi svarer på din henvendelse så snart som mulig.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Noe gikk galt",
          description: "Prøv igjen senere eller kontakt oss direkte på info@hmhy.no",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <title>Kontakt HMHY – Vi hjelper deg med pakkelevering</title>
      <meta 
        name="description" 
        content="Kontakt HMHY-teamet for spørsmål om appen, levering eller samarbeid. Vi svarer raskt og personlig." 
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Top Section - Contact Info */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left - Title and Text */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Kontakt oss
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Vi svarer på spørsmål fra sendere, sjåfører og samarbeidspartnere. Vi er her for å hjelpe deg.
                  </p>
                </div>

                {/* Right - Contact Info Cards */}
                <div className="space-y-6">
                  {/* Address Card */}
                  <div className="bg-white border border-border p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" strokeWidth={2} />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">
                          Adresse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Oslo, Norge
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Card */}
                  <div className="bg-white border border-border p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" strokeWidth={2} />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">
                          Kontakt Info
                        </p>
                        <p className="text-sm text-muted-foreground">
                          +47 123 45 678
                        </p>
                        <p className="text-sm text-muted-foreground">
                          info@hmhy.no
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Map Section */}
        <section className="w-full h-[70vh]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.6450%2C59.8500%2C10.8450%2C59.9700&layer=mapnik&marker=59.9139%2C10.7522"
            className="w-full h-full border-0"
            title="Kart over Oslo"
          />
        </section>

        {/* Contact Form Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left - Text Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Send oss en melding
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Er du interessert i å samarbeide med oss? Ta kontakt så svarer vi så raskt som mulig.
                  </p>
                </div>

                {/* Right - Form */}
                <div className="bg-white border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          Fornavn*
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={errors.firstName ? 'border-destructive' : ''}
                          placeholder="Skriv ditt fornavn..."
                          required
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-destructive">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Etternavn*
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={errors.lastName ? 'border-destructive' : ''}
                          placeholder="Skriv ditt etternavn..."
                          required
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          E-post*
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? 'border-destructive' : ''}
                          placeholder="din@email.no"
                          required
                        />
                        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefonnummer*
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? 'border-destructive' : ''}
                          placeholder="+47 xxx xx xxx"
                          required
                        />
                        {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Melding*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'border-destructive' : ''}
                        rows={5}
                        placeholder="Skriv din melding her..."
                        required
                      />
                      {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sender..." : "Send melding"}
                    </Button>
                  </form>
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

export default Contact;
