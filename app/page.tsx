import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { AnimatedSection } from "@/components/animated-section";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { StatsCounter } from "@/components/stats-counter";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      {/* <section className="bg-white py-20">
        <div className="container px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer comprehensive hospitality management solutions tailored
                to your specific needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group rounded-xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20">
                <div className="mb-6 rounded-full bg-primary/5 p-4 w-16 h-16 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary h-8 w-8"
                  >
                    <path
                      d="M22 12H18L15 21L9 3L6 12H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Business Operations
                </h3>
                <p className="text-muted-foreground mb-6">
                  Strategic business operations and management services to drive
                  growth and efficiency.
                </p>
                <Link
                  href="/services/business-operations"
                  className="inline-flex items-center text-primary hover:text-gold transition-colors"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="group rounded-xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20">
                <div className="mb-6 rounded-full bg-primary/5 p-4 w-16 h-16 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary h-8 w-8"
                  >
                    <path
                      d="M12 1V23"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  HR Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive HR solutions including recruitment, training and
                  development programs.
                </p>
                <Link
                  href="/services/hr-services"
                  className="inline-flex items-center text-primary hover:text-gold transition-colors"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="group rounded-xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20">
                <div className="mb-6 rounded-full bg-primary/5 p-4 w-16 h-16 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary h-8 w-8"
                  >
                    <path
                      d="M12 1V23"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Training & Development
                </h3>
                <p className="text-muted-foreground mb-6">
                  Customized training programs to enhance employee skills and
                  organizational performance.
                </p>
                <Link
                  href="/services/training-development"
                  className="inline-flex items-center text-primary hover:text-gold transition-colors"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Stats Counter */}
      <StatsCounter />

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  Hospitality Business Solutions & Operational Expertise
                </h2>
                <div className="prose max-w-none text-muted-foreground">
                  <p>
                    SIP-SUP Hospitality is a premier hotel and hospitality
                    management firm dedicated to providing comprehensive
                    solutions for the hospitality industry. With years of
                    experience and a team of seasoned professionals, we deliver
                    exceptional results for our clients.
                  </p>
                  <p>
                    Our approach combines industry best practices with
                    innovative strategies to help your hospitality business
                    thrive in today's competitive market. We understand the
                    unique challenges faced by hotels, resorts, and other
                    hospitality establishments, and we tailor our services to
                    meet your specific needs.
                  </p>
                  <p>
                    Whether you're looking to improve operational efficiency,
                    enhance guest experiences, or maximize revenue, our team has
                    the expertise to help you achieve your goals.
                  </p>
                </div>
                <Button className="mt-6 bg-gold hover:bg-gold/90 text-primary">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Hospitality Business Meeting"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Services Section */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">
              Our Services
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Comprehensive hospitality management solutions tailored to your
              business needs
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <ServiceCard
                title="Business Operations & Management"
                description="Comprehensive operational management to optimize performance and profitability."
                image="/images/business-operations.jpg"
                features={[
                  "Standard Operating Procedures Development",
                  "Revenue Management and Optimization",
                  "Quality Assurance and Service Excellence",
                  "Cost Control and Efficiency Improvement",
                  "Performance Monitoring and Reporting",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ServiceCard
                title="HR Services"
                description="Comprehensive human resources solutions for the hospitality industry."
                image="/images/hr-services.jpg"
                features={[
                  "Recruitment and Talent Acquisition",
                  "Training and Development Programs",
                  "Performance Management Systems",
                  "Employee Relations and Engagement",
                  "Compliance and Policy Development",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <ServiceCard
                title="Training, Mentoring & Coaching"
                description="Professional development programs to enhance skills and service quality."
                image="/images/training.jpg"
                features={[
                  "Customer Service Excellence Training",
                  "Leadership Development Programs",
                  "Operational Skills Training",
                  "Mentoring for Management Teams",
                  "Customized Training Solutions",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-primary">
                  Free Consultation
                </h2>
                <ContactForm />
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-primary p-8 rounded-lg text-white">
                  <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-4 h-6 w-6 text-gold" />
                      <p>123 Hospitality Avenue, Lagos, Nigeria</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-4 h-6 w-6 text-gold" />
                      <p>+234 123 456 7890</p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-4 h-6 w-6 text-gold" />
                      <p>info@sip-suphospitality.com</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Image
                      src="/images/sip-sup-logo.png"
                      alt="SIP-SUP Hospitality Logo"
                      width={120}
                      height={120}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop"
                      alt="Hospitality Career"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                      alt="Hospitality Career"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
                      alt="Hospitality Career"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?q=80&w=2121&auto=format&fit=crop"
                      alt="Hospitality Career"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  People Solutions & Reliable Advisory
                </h2>
                <div className="prose max-w-none text-muted-foreground">
                  <p>
                    At SIP-SUP Hospitality, we believe that people are the heart
                    of the hospitality industry. Our team of experts provides
                    comprehensive HR solutions and advisory services to help you
                    build and maintain a talented, motivated workforce.
                  </p>
                  <p>
                    From recruitment and training to performance management and
                    employee engagement, we offer tailored solutions to address
                    your specific HR needs. Our goal is to help you create a
                    positive work environment that fosters excellence in service
                    delivery.
                  </p>
                </div>
                <Button className="mt-6 bg-gold hover:bg-gold/90 text-primary">
                  Join Our Team <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Professional Hospitality Courses
              </h2>
              <p className="mb-8 text-muted-foreground">
                Enhance your skills and advance your career with our
                comprehensive hospitality management courses
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="group relative overflow-hidden rounded-lg shadow-md">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                    alt="Hotel Operations Management"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Hotel Operations Management
                    </h3>
                    <p className="text-sm text-white/80">
                      8 weeks • Intermediate
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex justify-between">
                    <span className="text-lg font-bold text-primary">$299</span>
                    <div className="flex text-gold">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/courses/hotel-operations-management">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group relative overflow-hidden rounded-lg shadow-md">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
                    alt="Revenue Management Strategies"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Revenue Management Strategies
                    </h3>
                    <p className="text-sm text-white/80">6 weeks • Advanced</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex justify-between">
                    <span className="text-lg font-bold text-primary">$349</span>
                    <div className="flex text-gold">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/courses/revenue-management-strategies">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="group relative overflow-hidden rounded-lg shadow-md">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                    alt="Hospitality Leadership Excellence"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">
                      Hospitality Leadership Excellence
                    </h3>
                    <p className="text-sm text-white/80">
                      10 weeks • Intermediate
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex justify-between">
                    <span className="text-lg font-bold text-primary">$399</span>
                    <div className="flex text-gold">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/courses/hospitality-leadership-excellence">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gold hover:bg-gold/90 text-primary" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl font-bold">
              Join That Align With Your Skills
            </h2>
            <p className="mx-auto mb-8 max-w-2xl">
              Take your hospitality career to the next level with SIP-SUP
              Hospitality. We offer exciting opportunities for professionals who
              are passionate about delivering exceptional service.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary">
              Apply Now
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 text-center">
          <h3 className="mb-4 text-lg font-semibold uppercase text-primary">
            FOLLOW US ON SOCIAL MEDIA
          </h3>
          <div className="flex justify-center space-x-4">
            <Link
              href="#"
              className="rounded-full bg-primary p-3 text-white transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-primary p-3 text-white transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-primary p-3 text-white transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
