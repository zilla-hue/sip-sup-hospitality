import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/animated-section";
import { BlogCard } from "@/components/blog-card";
import { FeaturedPost } from "@/components/featured-post";
import { Separator } from "@/components/ui/separator";

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 hero-gradient">
          <Image
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop"
            alt="Hospitality Insights"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <AnimatedSection direction="down">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Hospitality Insights
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Expert perspectives, industry trends, and practical advice for
              hospitality professionals
            </p>

            <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full bg-white/90 pl-10 text-primary placeholder:text-muted-foreground focus:ring-2 focus:ring-gold"
                />
              </div>
              <Button className="bg-gold hover:bg-gold/90 text-primary shadow-lg">
                Search
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Badge className="bg-white/20 hover:bg-white/30 text-white cursor-pointer">
                Operations
              </Badge>
              <Badge className="bg-white/20 hover:bg-white/30 text-white cursor-pointer">
                Marketing
              </Badge>
              <Badge className="bg-white/20 hover:bg-white/30 text-white cursor-pointer">
                Technology
              </Badge>
              <Badge className="bg-white/20 hover:bg-white/30 text-white cursor-pointer">
                Leadership
              </Badge>
              <Badge className="bg-white/20 hover:bg-white/30 text-white cursor-pointer">
                Sustainability
              </Badge>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold text-primary">
                  Featured Article
                </h2>
                <p className="text-muted-foreground">
                  Our most popular and insightful content
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Sort by:
                  </span>
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px] border-primary/20">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <FeaturedPost
              title="The Future of Hospitality: Trends Shaping the Industry in 2025"
              excerpt="Explore the emerging trends and technologies that are transforming the hospitality industry and how businesses can adapt to stay ahead of the curve. From AI-powered guest experiences to sustainable practices, discover what's next for hotels and resorts."
              image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop"
              author={{
                name: "Oluwaseun Adebayo",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              }}
              date="March 15, 2025"
              readTime="8 min read"
              slug="future-of-hospitality-trends-2025"
              category="Industry Trends"
              tags={[
                "Technology",
                "Future Trends",
                "Innovation",
                "Guest Experience",
              ]}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Category Exploration */}
      <section className="bg-gray-50 py-12">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-8 text-2xl font-bold text-primary text-center">
              Explore by Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Operations", icon: "🏨", count: 24 },
                { name: "Marketing", icon: "📊", count: 20 },
                { name: "Technology", icon: "💻", count: 16 },
                { name: "Leadership", icon: "👥", count: 18 },
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/blog/category/${category.name.toLowerCase()}`}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                >
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <h3 className="font-medium text-primary">{category.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {category.count} articles
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-3xl font-bold text-primary">
                Latest Articles
              </h2>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">View:</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 border-primary/20"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M1.5 2C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H13.5C13.7761 13 14 12.7761 14 12.5V2.5C14 2.22386 13.7761 2 13.5 2H1.5ZM2 3H13V12H2V3Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 border-primary/20"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44772 13 2 12.5523 2 12V3ZM12 3H3V12H12V3Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <Separator className="mb-8" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <BlogCard
                title="Sustainable Hospitality: Implementing Eco-Friendly Practices"
                excerpt="Discover practical strategies for implementing sustainable practices in your hospitality business that benefit both the environment and your bottom line."
                image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                category="Sustainability"
                date="March 10, 2025"
                readTime="6 min read"
                slug="sustainable-hospitality-eco-friendly-practices"
                author={{
                  name: "Amina Ibrahim",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                }}
                tags={["Sustainability", "Eco-Friendly", "Green Initiatives"]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <BlogCard
                title="Maximizing Revenue Through Effective Pricing Strategies"
                excerpt="Learn how to develop and implement dynamic pricing strategies that optimize revenue while maintaining competitive positioning in your market."
                image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
                category="Revenue Management"
                date="March 5, 2025"
                readTime="5 min read"
                slug="maximizing-revenue-pricing-strategies"
                featured={true}
                author={{
                  name: "Emmanuel Nwachukwu",
                  image: "https://randomuser.me/api/portraits/men/22.jpg",
                }}
                tags={["Revenue", "Pricing", "Strategy"]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <BlogCard
                title="Building a Strong Hospitality Team: Recruitment and Retention"
                excerpt="Explore effective strategies for recruiting, training, and retaining top talent in the competitive hospitality industry."
                image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                category="HR Management"
                date="February 28, 2025"
                readTime="7 min read"
                slug="building-strong-hospitality-team"
                author={{
                  name: "Chioma Okonkwo",
                  image: "https://randomuser.me/api/portraits/women/28.jpg",
                }}
                tags={["HR", "Recruitment", "Team Building"]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <BlogCard
                title="Leveraging Technology to Enhance Guest Experiences"
                excerpt="Discover how the latest technologies can be implemented to create memorable guest experiences and streamline operations."
                image="https://images.unsplash.com/photo-1551909616-5b8c0f57adfd?q=80&w=2069&auto=format&fit=crop"
                category="Technology"
                date="February 20, 2025"
                readTime="6 min read"
                slug="leveraging-technology-guest-experiences"
                author={{
                  name: "David Osei",
                  image: "https://randomuser.me/api/portraits/men/42.jpg",
                }}
                tags={["Technology", "Guest Experience", "Innovation"]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <BlogCard
                title="Crisis Management in Hospitality: Preparing for the Unexpected"
                excerpt="Learn how to develop comprehensive crisis management plans that protect your business, staff, and guests during unexpected events."
                image="https://images.unsplash.com/photo-1613618948931-efbc3e6f9775?q=80&w=2070&auto=format&fit=crop"
                category="Operations"
                date="February 15, 2025"
                readTime="8 min read"
                slug="crisis-management-hospitality"
                author={{
                  name: "Oluwaseun Adebayo",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                }}
                tags={["Crisis Management", "Operations", "Safety"]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <BlogCard
                title="Digital Marketing Strategies for Hospitality Businesses"
                excerpt="Explore effective digital marketing strategies to increase your online presence and drive direct bookings for your hospitality business."
                image="https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop"
                category="Marketing"
                date="February 8, 2025"
                readTime="5 min read"
                slug="digital-marketing-strategies-hospitality"
                author={{
                  name: "Fatima Diallo",
                  image: "https://randomuser.me/api/portraits/women/12.jpg",
                }}
                tags={["Marketing", "Digital", "Social Media"]}
              />
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90 group">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">
                Subscribe to Our Newsletter
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Stay updated with the latest insights, trends, and news in the
                hospitality industry.
              </p>
              <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <Button className="bg-gold hover:bg-gold/90 text-primary">
                  Subscribe
                </Button>
              </form>
              <p className="mt-4 text-sm text-white/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-8 text-2xl font-bold text-primary text-center">
              Popular Tags
            </h2>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                "Hospitality Management",
                "Guest Experience",
                "Revenue Optimization",
                "Technology",
                "Sustainability",
                "Marketing",
                "Leadership",
                "Staff Training",
                "Customer Service",
                "Hotel Design",
                "Food & Beverage",
                "Digital Transformation",
                "Wellness",
                "Luxury Hospitality",
                "Boutique Hotels",
              ].map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white px-4 py-2 rounded-full text-sm text-primary border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
