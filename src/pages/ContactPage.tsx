import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionReveal from "@/components/SectionReveal";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import featuredBungalows from "@/assets/featured-bungalows.png";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { validateEmail } from "@/lib/email-validation";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", projectType: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailSuggestion, setEmailSuggestion] = useState("");

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });
    setEmailError("");
    setEmailSuggestion("");

    if (value.includes("@")) {
      const result = validateEmail(value);
      if (!result.isValid && result.error) {
        setEmailError(result.error);
      } else if (result.suggestion) {
        setEmailSuggestion(result.suggestion);
      }
    }
  };

  const applySuggestion = () => {
    setFormData({ ...formData, email: emailSuggestion });
    setEmailSuggestion("");
    setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation
    const result = validateEmail(formData.email);
    if (!result.isValid) {
      setEmailError(result.error || "Invalid email address.");
      return;
    }

    if (formData.name.trim().length > 100) {
      toast.error("Name must be under 100 characters.");
      return;
    }
    if (formData.message.trim().length > 2000) {
      toast.error("Message must be under 2000 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
      setEmailError("");
      setEmailSuggestion("");
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      <SEO
        title="Contact"
        description="Get a free consultation for your architecture, interior design, or construction project in Uganda. Reach IndeliCraft & Works Ltd today."
        path="/contact"
      />
      <PageHeader
        label="Contact"
        title="Let's Start Your Project"
        description="Tell us about your vision and we'll bring it to life."
        backgroundImage={featuredBungalows}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="font-heading text-2xl font-bold mb-8">Request a Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      maxLength={100}
                      className="font-body"
                    />
                    <div className="space-y-1.5">
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        required
                        maxLength={255}
                        className={`font-body ${emailError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      />
                      {emailError && (
                        <p className="flex items-center gap-1.5 text-xs text-destructive">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {emailError}
                        </p>
                      )}
                      {emailSuggestion && (
                        <button
                          type="button"
                          onClick={applySuggestion}
                          className="text-xs text-accent hover:underline"
                        >
                          Did you mean <span className="font-medium">{emailSuggestion}</span>?
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-body"
                    />
                    <Select
                      value={formData.projectType}
                      onValueChange={(v) => setFormData({ ...formData, projectType: v })}
                    >
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="architecture">Architectural Design</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                        <SelectItem value="3d">3D Visualization</SelectItem>
                        <SelectItem value="farm">Farm Structures</SelectItem>
                        <SelectItem value="utility">Utility Structures</SelectItem>
                        <SelectItem value="branding">Branding Design</SelectItem>
                        <SelectItem value="web">Website / Software</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      maxLength={2000}
                      className="font-body"
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {formData.message.length}/2000
                    </p>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !!emailError}
                    className="bg-accent text-accent-foreground hover:bg-gold-dark font-body px-10"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </SectionReveal>
            </div>

            {/* Contact Info */}
            <div>
              <SectionReveal delay={0.15}>
                <h3 className="font-heading text-xl font-bold mb-6">Get in Touch</h3>
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <a href="tel:+256775671562" className="text-sm text-muted-foreground hover:text-accent">+256 775 671562</a>
                      <br />
                      <a href="tel:+256779206448" className="text-sm text-muted-foreground hover:text-accent">+256 779 206448</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a href="mailto:contact@indelicraft.com" className="text-sm text-muted-foreground hover:text-accent">contact@indelicraft.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Location</p>
                      <p className="text-sm text-muted-foreground">Kampala, Uganda</p>
                    </div>
                  </li>
                </ul>

                {/* Map */}
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772091815!2d32.52291535!3d0.3135636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f90af4c61%3A0x6dacce4b6b27b141!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="IndeliCraft Location - Kampala, Uganda"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
