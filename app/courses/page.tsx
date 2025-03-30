import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/animated-section";
import { CourseCard } from "@/components/course-card";
import { Badge } from "@/components/ui/badge";

export default function CoursesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 hero-gradient">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
            alt="Hospitality Courses"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <AnimatedSection direction="down">
            <Badge className="mb-4 bg-gold text-primary px-4 py-1 text-sm font-medium">
              Professional Development
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Hospitality Management <span className="text-gold">Courses</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/90">
              Enhance your skills and advance your career with our professional
              hospitality management courses
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full bg-white/90 pl-10 text-primary placeholder:text-muted-foreground focus:ring-2 focus:ring-gold"
                />
              </div>
              <Button className="bg-gold hover:bg-gold/90 text-primary shadow-lg">
                Search
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold text-primary">
                  Featured Courses
                </h2>
                <p className="text-muted-foreground">
                  Our most popular hospitality management courses
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5 text-primary">
                  All
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white text-muted-foreground hover:bg-primary/5 hover:text-primary"
                >
                  Hotel Management
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white text-muted-foreground hover:bg-primary/5 hover:text-primary"
                >
                  Food & Beverage
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white text-muted-foreground hover:bg-primary/5 hover:text-primary"
                >
                  Leadership
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white text-muted-foreground hover:bg-primary/5 hover:text-primary"
                >
                  Marketing
                </Badge>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <CourseCard
                title="Hotel Operations Management"
                description="Master the fundamentals of hotel operations management, from front desk to housekeeping, and learn how to optimize efficiency and guest satisfaction."
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                category="Hotel Management"
                duration="8 weeks"
                level="Intermediate"
                price={299}
                rating={4.8}
                reviewCount={124}
                slug="hotel-operations-management"
                featured={true}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <CourseCard
                title="Revenue Management Strategies"
                description="Learn advanced revenue management techniques to maximize profitability, optimize pricing strategies, and increase your property's financial performance."
                image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
                category="Finance"
                duration="6 weeks"
                level="Advanced"
                price={349}
                rating={4.9}
                reviewCount={98}
                slug="revenue-management-strategies"
                featured={true}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <CourseCard
                title="Hospitality Leadership Excellence"
                description="Develop essential leadership skills specific to the hospitality industry, including team management, conflict resolution, and creating a service-oriented culture."
                image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                category="Leadership"
                duration="10 weeks"
                level="Intermediate"
                price={399}
                rating={4.7}
                reviewCount={156}
                slug="hospitality-leadership-excellence"
                featured={true}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">
              Browse by Category
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Explore our comprehensive range of hospitality management courses
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0.1}>
              <Link
                href="/courses/category/hotel-management"
                className="group block"
              >
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop"
                    alt="Hotel Management"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <div className="rounded-b-lg bg-white p-4 shadow-md transition-shadow group-hover:shadow-lg">
                  <h3 className="text-xl font-bold text-primary">
                    Hotel Management
                  </h3>
                  <p className="text-sm text-muted-foreground">12 courses</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link
                href="/courses/category/food-beverage"
                className="group block"
              >
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                    alt="Food & Beverage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <div className="rounded-b-lg bg-white p-4 shadow-md transition-shadow group-hover:shadow-lg">
                  <h3 className="text-xl font-bold text-primary">
                    Food & Beverage
                  </h3>
                  <p className="text-sm text-muted-foreground">8 courses</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link href="/courses/category/marketing" className="group block">
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop"
                    alt="Marketing & Sales"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <div className="rounded-b-lg bg-white p-4 shadow-md transition-shadow group-hover:shadow-lg">
                  <h3 className="text-xl font-bold text-primary">
                    Marketing & Sales
                  </h3>
                  <p className="text-sm text-muted-foreground">6 courses</p>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link href="/courses/category/leadership" className="group block">
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                    alt="Leadership & Management"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <div className="rounded-b-lg bg-white p-4 shadow-md transition-shadow group-hover:shadow-lg">
                  <h3 className="text-xl font-bold text-primary">
                    Leadership & Management
                  </h3>
                  <p className="text-sm text-muted-foreground">10 courses</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">
              All Courses
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Comprehensive training programs designed by industry experts
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <CourseCard
                title="Front Office Management"
                description="Learn the essential skills and knowledge required to effectively manage the front office operations of a hotel or resort."
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                category="Hotel Management"
                duration="6 weeks"
                level="Beginner"
                price={249}
                rating={4.6}
                reviewCount={87}
                slug="front-office-management"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <CourseCard
                title="Food & Beverage Service Excellence"
                description="Master the art of exceptional food and beverage service, from fine dining protocols to beverage knowledge and guest interaction."
                image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                category="Food & Beverage"
                duration="5 weeks"
                level="Intermediate"
                price={199}
                rating={4.7}
                reviewCount={112}
                slug="food-beverage-service-excellence"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <CourseCard
                title="Digital Marketing for Hospitality"
                description="Learn how to leverage digital marketing channels to increase bookings, build brand awareness, and engage with guests effectively."
                image="https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop"
                category="Marketing"
                duration="7 weeks"
                level="Intermediate"
                price={279}
                rating={4.8}
                reviewCount={94}
                slug="digital-marketing-hospitality"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <CourseCard
                title="Housekeeping Management"
                description="Develop the skills to effectively manage housekeeping operations, ensuring cleanliness, efficiency, and guest satisfaction."
                image="https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop"
                category="Hotel Management"
                duration="4 weeks"
                level="Beginner"
                price={179}
                rating={4.5}
                reviewCount={76}
                slug="housekeeping-management"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <CourseCard
                title="Restaurant Management Fundamentals"
                description="Learn the essentials of restaurant management, from menu planning and inventory control to staff management and customer service."
                image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                category="Food & Beverage"
                duration="8 weeks"
                level="Intermediate"
                price={299}
                rating={4.7}
                reviewCount={103}
                slug="restaurant-management-fundamentals"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <CourseCard
                title="Crisis Management in Hospitality"
                description="Develop strategies for effectively managing crises in hospitality settings, from natural disasters to public relations challenges."
                image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                category="Leadership"
                duration="5 weeks"
                level="Advanced"
                price={249}
                rating={4.9}
                reviewCount={68}
                slug="crisis-management-hospitality"
              />
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90">
              Load More Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">
              What Our Students Say
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Hear from hospitality professionals who have advanced their
              careers with our courses
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Sarah Johnson"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">
                      Hotel Manager, Lagos
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Hotel Operations Management course provided me with
                  practical knowledge and tools that I was able to implement
                  immediately. The instructors were industry veterans who shared
                  valuable insights from their experience."
                </p>
                <div className="mt-4 flex text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Michael Chen"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">
                      Restaurant Owner, Abuja
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Restaurant Management Fundamentals course was exactly
                  what I needed to take my business to the next level. The
                  financial management and staff training modules were
                  particularly valuable."
                </p>
                <div className="mt-4 flex text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Olivia Williams"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Olivia Williams</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing Director, Accra
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Digital Marketing for Hospitality course transformed our
                  marketing strategy. We've seen a 40% increase in direct
                  bookings since implementing the techniques I learned in this
                  course."
                </p>
                <div className="mt-4 flex text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">
                Ready to Advance Your Hospitality Career?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Enroll in our professional hospitality management courses and
                gain the skills and knowledge needed to excel in this dynamic
                industry.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-primary"
                >
                  Browse All Courses
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-base px-8 dark:text-white text-primary"
                >
                  Request Course Catalog
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
