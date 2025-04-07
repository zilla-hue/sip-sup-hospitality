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
      <div className="mt-[80px]">
        <HeroSection />
      </div>

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
                    SIP-SUP Hospitality is a premier hospitality management firm
                    dedicated to providing comprehensive solutions for the
                    hospitality industry. With years of experience and a team of
                    seasoned professionals, we deliver exceptional results for
                    our clients.
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
                <Link href="/about">
                  <Button
                    className="mt-6 bg-gold hover:bg-gold/90 text-primary shadow-lg text-base px-8
                  group"
                  >
                    Learn More{" "}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/young-african-american-waiter-man-hold-tray-with-burger-restaurant.jpg"
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

          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <ServiceCard
                title="Consulting"
                description="Strategic advisory and operational expertise to optimize your hospitality business performance."
                image="/images/african-american-man-woman-sits-stylish-home-office.jpg"
                features={[
                  "Business Strategy Development",
                  "Operational Efficiency Analysis",
                  "Revenue Management Optimization",
                  "Quality Assurance Systems",
                  "Performance Monitoring & Reporting",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ServiceCard
                title="Recruitment"
                description="Specialized talent acquisition services for the hospitality industry."
                image="/images/manager-women-working-hiring-application-discussing-curriculum-vitae-with-remote-recruiter-online-videocall-meeting-conference-startup-office-teleconference-call-computer-screen.jpg"
                features={[
                  "Executive Search & Placement",
                  "Hospitality Staff Recruitment",
                  "Candidate Assessment & Screening",
                  "Temporary & Permanent Staffing",
                  "Employer Branding Strategies",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ServiceCard
                title="Training"
                description="Professional development programs to enhance skills and service quality."
                image="/images/beginner-average-skilled-expert-productivity.jpg"
                features={[
                  "Customer Service Excellence",
                  "Leadership Development",
                  "Operational Skills Training",
                  "Customized Training Programs",
                  "Mentoring & Coaching Services",
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
                      <p>502 Dalaba Street, Wuse Zone 5, Abuja, Nigeria</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-4 h-6 w-6 text-gold" />
                      <p>+234 813 800 8337</p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-4 h-6 w-6 text-gold" />
                      <p>sipsuphospitality@gmail.com</p>
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
                      src="/images/chef-cooking-kitchen-while-wearing-professional-attire.jpg"
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
                <Link href="/careers">
                  <Button className="mt-6 bg-gold hover:bg-gold/90 text-primary group">
                    Join Our Team{" "}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 bg-primary/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Coming Soon
            </h3>
            <p className="text-white/90 text-lg max-w-md mx-auto">
              Our professional courses will be available shortly
            </p>
          </div>
        </div>
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
              Join Roles That Align With Your Skills
            </h2>
            <p className="mx-auto mb-8 max-w-2xl">
              Take your hospitality career to the next level with SIP-SUP
              Hospitality. We offer exciting opportunities for professionals who
              are passionate about delivering exceptional service.
            </p>
            <Link href="/careers">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-primary"
              >
                Apply Now
              </Button>
            </Link>
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
              href="https://www.instagram.com/sipsup_hospitality?igsh=eXRhcXdsYWY1b2k4"
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
