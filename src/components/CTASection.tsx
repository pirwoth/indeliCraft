import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";

const CTASection = () => {
  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto px-4 text-center">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life. From concept to completion, we're with you every step.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold-dark font-body text-base px-10 py-6"
            >
              Request Free Consultation
            </Button>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
};

export default CTASection;
