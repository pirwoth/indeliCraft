import SectionReveal from "@/components/SectionReveal";
import { ReactNode } from "react";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  backgroundImage: string;
  children?: ReactNode;
}

const PageHeader = ({ label, title, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionReveal>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2">{label}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl">{description}</p>
          )}
        </SectionReveal>
      </div>
    </section>
  );
};

export default PageHeader;
