import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Briefcase,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { TeamMember } from "@/components/team-member";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCounter } from "@/components/stats-counter";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 hero-gradient">
          <Image
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop"
            alt="About SIP-SUP Hospitality"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <AnimatedSection direction="down">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              About SIP-SUP Hospitality
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/90">
              A premier hotel and hospitality management firm dedicated to
              excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gold hover:bg-gold/90 text-primary" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-base px-8 dark:text-white text-primary"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded in 2005, SIP-SUP Hospitality has grown from a small
                consultancy to a leading hospitality management firm serving
                clients across Africa.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop"
                  alt="SIP-SUP Hospitality History"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Our Journey
                    </h3>
                    <p className="text-white/90">
                      From a small consultancy to a leading hospitality
                      management firm
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-gold opacity-70"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-gold opacity-70"></div>
              </div>

              <div className="flex flex-col justify-center">
                <Tabs defaultValue="history" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="mission">Mission</TabsTrigger>
                    <TabsTrigger value="values">Values</TabsTrigger>
                  </TabsList>

                  <TabsContent value="history" className="space-y-8">
                    <div className="flex items-start">
                      <div className="mr-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-primary">
                          Our Beginning
                        </h3>
                        <p className="text-muted-foreground">
                          SIP-SUP Hospitality was founded in 2005 by a team of
                          hospitality professionals with a vision to transform
                          the hospitality industry in Africa. Starting with just
                          three clients, we focused on delivering exceptional
                          service and results.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-primary">
                          Growth & Recognition
                        </h3>
                        <p className="text-muted-foreground">
                          By 2010, we had expanded our services and client base
                          significantly, earning recognition for our innovative
                          approaches to hospitality management. Our commitment
                          to excellence led to partnerships with major hotel
                          brands and independent properties.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-primary">
                          Expansion Across Africa
                        </h3>
                        <p className="text-muted-foreground">
                          Since 2015, we've expanded our operations across
                          multiple African countries, bringing our expertise to
                          diverse markets and helping clients navigate the
                          unique challenges of each region. Today, we serve
                          clients in 15 countries across the continent.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="mission">
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                      <h3 className="text-xl font-bold text-primary mb-4">
                        Our Mission
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        To transform the hospitality industry in Africa by
                        providing innovative management solutions that enhance
                        guest experiences, optimize operational efficiency, and
                        maximize profitability for our clients.
                      </p>
                      <p className="text-muted-foreground">
                        We are committed to setting new standards of excellence
                        in hospitality management, contributing to the growth
                        and development of the industry across the continent.
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-semibold text-primary mb-2">
                            Vision
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            To be the leading hospitality management firm in
                            Africa, recognized for excellence, innovation, and
                            transformative impact.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h4 className="font-semibold text-primary mb-2">
                            Purpose
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Empowering hospitality businesses to deliver
                            exceptional experiences while achieving sustainable
                            growth and profitability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="values">
                    <div className="space-y-4">
                      {[
                        {
                          title: "Excellence",
                          description:
                            "We strive for excellence in everything we do, consistently delivering high-quality services that exceed expectations.",
                        },
                        {
                          title: "Integrity",
                          description:
                            "We conduct our business with the highest level of integrity, maintaining transparency and ethical standards in all our interactions.",
                        },
                        {
                          title: "Innovation",
                          description:
                            "We embrace innovation, continuously seeking new and better ways to address challenges and create value for our clients.",
                        },
                        {
                          title: "Collaboration",
                          description:
                            "We believe in the power of collaboration, working closely with our clients and partners to achieve shared goals.",
                        },
                        {
                          title: "People-Centered",
                          description:
                            "We recognize that people are at the heart of hospitality, and we invest in developing both our team and our clients' teams.",
                        },
                      ].map((value, index) => (
                        <div
                          key={index}
                          className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-primary/5 hover:border-primary/20 transition-colors"
                        >
                          <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-white font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary">
                              {value.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Our Leadership Team
              </h2>
              <p className="text-muted-foreground">
                Meet the experienced professionals who lead SIP-SUP Hospitality
                and drive our commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <TeamMember
                name="Oluwaseun Adebayo"
                role="Founder & CEO"
                image="/images/team-1.jpg"
                bio="Oluwaseun has over 25 years of experience in the hospitality industry, having held leadership positions at major international hotel chains before founding SIP-SUP Hospitality. He holds an MBA from Harvard Business School and is a certified Hotel Administrator."
                socialLinks={{
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                }}
                achievements={[
                  "Hospitality Leader of the Year 2023",
                  "Board Member, African Hospitality Association",
                  "Published Author, 'Transforming African Hospitality'",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <TeamMember
                name="Chioma Okonkwo"
                role="Chief Operations Officer"
                image="/images/team-2.jpg"
                bio="Chioma brings 18 years of operational expertise to SIP-SUP Hospitality. She specializes in optimizing hotel operations and implementing systems that enhance efficiency and guest satisfaction. She holds a degree in Hospitality Management from Cornell University."
                socialLinks={{
                  linkedin: "https://linkedin.com",
                }}
                achievements={[
                  "Operations Excellence Award 2022",
                  "Certified Hotel Administrator (CHA)",
                  "Guest Experience Innovation Award",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <TeamMember
                name="Emmanuel Nwachukwu"
                role="Chief Financial Officer"
                image="/images/team-3.jpg"
                bio="Emmanuel has 20 years of experience in financial management within the hospitality industry. He oversees all financial aspects of SIP-SUP Hospitality and provides strategic financial guidance to our clients. He is a Chartered Accountant with an MBA in Finance."
                socialLinks={{
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                }}
                achievements={[
                  "Financial Leadership Award 2023",
                  "Fellow, Institute of Chartered Accountants",
                  "Hospitality Financial Management Certification",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <TeamMember
                name="Amina Ibrahim"
                role="Director of HR Services"
                image="/images/team-4.jpg"
                bio="Amina leads our HR Services division with 15 years of experience in hospitality human resources. She specializes in talent acquisition, training programs, and employee engagement strategies that drive service excellence and staff retention."
                socialLinks={{
                  linkedin: "https://linkedin.com",
                }}
                achievements={[
                  "HR Excellence Award 2022",
                  "Certified Hospitality Trainer",
                  "Employee Engagement Specialist",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <TeamMember
                name="David Osei"
                role="Director of Business Development"
                image="/images/team-5.jpg"
                bio="David has 12 years of experience in hospitality business development across Africa. He leads our expansion efforts and client acquisition strategies, with a focus on building long-term partnerships that deliver value for all stakeholders."
                socialLinks={{
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                }}
                achievements={[
                  "Business Growth Award 2023",
                  "Certified Hospitality Marketing Executive",
                  "Strategic Partnership Development Specialist",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <TeamMember
                name="Fatima Diallo"
                role="Director of Marketing Services"
                image="/images/team-6.jpg"
                bio="Fatima brings 14 years of marketing expertise to SIP-SUP Hospitality. She leads our marketing services division, helping clients develop and implement effective marketing strategies that enhance brand visibility and drive bookings."
                socialLinks={{
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                }}
                achievements={[
                  "Digital Marketing Excellence Award",
                  "Certified Hospitality Digital Marketer",
                  "Brand Strategy Specialist",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-20 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold">
                Why Choose SIP-SUP Hospitality
              </h2>
              <p className="text-white/80">
                We offer unique advantages that set us apart in the hospitality
                management industry
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Globe className="h-8 w-8 text-gold" />,
                title: "African Expertise",
                description:
                  "With operations in 15 African countries, we understand the unique challenges and opportunities of the hospitality industry across the continent.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-gold" />,
                title: "Comprehensive Solutions",
                description:
                  "We offer end-to-end hospitality management services, from hotel design and development to operations, marketing, and financial management.",
              },
              {
                icon: <Award className="h-8 w-8 text-gold" />,
                title: "Proven Results",
                description:
                  "Our track record speaks for itself, with clients experiencing significant improvements in occupancy rates, guest satisfaction, and profitability.",
              },
              {
                icon: <Users className="h-8 w-8 text-gold" />,
                title: "Industry Connections",
                description:
                  "Our extensive network of industry partners and suppliers allows us to secure favorable terms and conditions for our clients.",
              },
              {
                icon: <Briefcase className="h-8 w-8 text-gold" />,
                title: "Tailored Approach",
                description:
                  "We recognize that each property is unique, and we customize our services to meet the specific needs and goals of each client.",
              },
              {
                icon: <Trophy className="h-8 w-8 text-gold" />,
                title: "Continuous Innovation",
                description:
                  "We stay at the forefront of industry trends and technologies, bringing innovative solutions to our clients' businesses.",
              },
            ].map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group rounded-lg bg-white/10 p-8 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300 h-full flex flex-col">
                  <div className="mb-6 rounded-full bg-white/10 p-4 w-16 h-16 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    {advantage.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{advantage.title}</h3>
                  <p className="text-white/80 flex-grow">
                    {advantage.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-gold hover:text-white transition-colors group"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Clients */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Our Partners & Clients
              </h2>
              <p className="text-muted-foreground">
                We're proud to work with leading hospitality brands and
                independent properties across Africa.
              </p>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div className="group flex h-32 items-center justify-center rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg border border-primary/5 hover:border-primary/20">
                    <Image
                      src={`/images/client-${index}.svg`}
                      alt={`Client ${index}`}
                      width={120}
                      height={60}
                      className="max-h-16 w-auto opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/5"
              >
                View All Partners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground">
                Hear from hospitality businesses that have transformed their
                operations with our services
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "SIP-SUP Hospitality transformed our operations completely. Their expertise in hotel management helped us increase our occupancy rates by 30% and significantly improve guest satisfaction scores.",
                name: "Sarah Johnson",
                role: "General Manager",
                company: "Luxury Resort & Spa",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
              },
              {
                quote:
                  "Working with SIP-SUP has been a game-changer for our boutique hotels. Their financial advisory services helped us optimize our revenue streams and reduce operational costs without compromising on quality.",
                name: "Michael Chen",
                role: "Owner",
                company: "Boutique Hotel Group",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                quote:
                  "The training programs developed by SIP-SUP Hospitality have significantly improved our staff performance and retention. Their people-focused approach has created a positive work environment.",
                name: "Olivia Williams",
                role: "HR Director",
                company: "Grand Hotel Chain",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-primary/5 hover:border-primary/20 transition-all hover:shadow-md h-full flex flex-col">
                  <div className="mb-6">
                    <svg
                      width="42"
                      height="30"
                      viewBox="0 0 42 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary/20"
                    >
                      <path
                        d="M11.6893 0.468774C5.4403 4.60677 0.560303 11.8268 0.560303 19.0468C0.560303 24.5548 4.0723 29.4348 9.9523 29.4348C15.0963 29.4348 18.8323 25.6988 18.8323 20.5548C18.8323 15.8268 15.5363 12.5308 10.8083 12.5308C10.2163 12.5308 9.3723 12.6828 8.9323 12.8348C9.9523 8.6508 14.5043 4.1668 18.9843 2.1268L11.6893 0.468774ZM34.1763 0.468774C27.9273 4.60677 23.0473 11.8268 23.0473 19.0468C23.0473 24.5548 26.5593 29.4348 32.4393 29.4348C37.5833 29.4348 41.3193 25.6988 41.3193 20.5548C41.3193 15.8268 38.0233 12.5308 33.2953 12.5308C32.7033 12.5308 31.8593 12.6828 31.4193 12.8348C32.4393 8.6508 36.9913 4.1668 41.4713 2.1268L34.1763 0.468774Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="text-muted-foreground mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gold hover:bg-gold/90 text-primary" asChild>
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">
                Ready to Transform Your Hospitality Business?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Contact us today to discuss how our comprehensive hospitality
                management solutions can help your business thrive.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-primary"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-base px-8 dark:text-white text-primary"
                  asChild
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
