import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import interiorImg from "@/assets/interior.png";

const posts = [
  {
    slug: "plan-house-uganda",
    title: "How to Plan a House Before Building in Uganda",
    excerpt: "A step-by-step guide to planning your dream home, from budgeting to finding the right architect.",
    date: "March 10, 2026",
    category: "Architecture",
  },
  {
    slug: "common-design-mistakes",
    title: "Common House Design Mistakes to Avoid",
    excerpt: "Learn from the most frequent errors homeowners make during the design phase and how to prevent them.",
    date: "March 5, 2026",
    category: "Tips",
  },
  {
    slug: "3d-visualization-saves-costs",
    title: "How 3D Visualization Saves Construction Costs",
    excerpt: "Discover why investing in 3D visualization before construction can save you significant money.",
    date: "Feb 28, 2026",
    category: "3D Visualization",
  },
  {
    slug: "interior-tips-small-apartments",
    title: "Interior Design Tips for Small Apartments",
    excerpt: "Maximize space and style in compact living areas with these professional interior design strategies.",
    date: "Feb 20, 2026",
    category: "Interior Design",
  },
  {
    slug: "farm-structures-productivity",
    title: "Designing Farm Structures for Productivity",
    excerpt: "How thoughtful design of poultry houses, pigsties, and barns can improve livestock productivity.",
    date: "Feb 15, 2026",
    category: "Farm Structures",
  },
];

const BlogPage = () => {
  return (
    <main className="pt-20">
      <SEO
        title="Blog"
        description="Expert tips on architecture, interior design, construction planning, and 3D visualization in Uganda. Read the IndeliCraft blog."
        path="/blog"
      />
      <PageHeader
        label="Blog"
        title="Insights & Ideas"
        description="Expert advice on architecture, design, and construction in Uganda."
        backgroundImage={interiorImg}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.05}>
                <article className="group border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <div className="bg-secondary h-48 flex items-center justify-center">
                    <span className="text-accent font-heading text-lg">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
