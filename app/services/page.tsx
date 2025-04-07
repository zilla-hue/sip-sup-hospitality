import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { ServiceDetailCard } from "@/components/service-detail-card";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <Image
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop"
            alt="Hotel Services"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Our Services
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            Comprehensive hospitality management solutions tailored to your
            business needs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="bg-gold hover:bg-gold/90 text-primary" asChild>
              <Link href="/book-consultation">Request Consultation</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base px-8 dark:text-white text-primary"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Comprehensive Hospitality Solutions
              </h2>
              <p className="mb-8 text-muted-foreground">
                At SIP-SUP Hospitality, we offer a wide range of services
                designed to help your hospitality business thrive. Our team of
                experienced professionals provides tailored solutions to address
                your specific needs and challenges.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-12">
            <AnimatedSection>
              <ServiceDetailCard
                title="Consulting"
                description="Our consulting services provide strategic advisory and operational expertise to optimize your hospitality business performance. We work closely with your team to identify opportunities for improvement and implement effective solutions that drive results."
                image="/images/african-american-man-woman-sits-stylish-home-office.jpg"
                features={[
                  "Business Strategy Development",
                  "Operational Efficiency Analysis",
                  "Revenue Management Optimization",
                  "Quality Assurance Systems",
                  "Performance Monitoring & Reporting",
                  "Crisis Management & Business Continuity",
                ]}
                caseStudy={{
                  title: "Boutique Hotel Chain Operational Turnaround",
                  description:
                    "We implemented comprehensive operational improvements for a struggling 5-property boutique hotel chain. By optimizing staffing, implementing effective SOPs, and enhancing service quality, we increased guest satisfaction scores by 35% and reduced operational costs by 22% within 12 months.",
                  metrics: [
                    { label: "Revenue Increase", value: "28%" },
                    { label: "Cost Reduction", value: "22%" },
                    { label: "Guest Satisfaction", value: "+35%" },
                  ],
                }}
                reversed
              />
            </AnimatedSection>

            <AnimatedSection>
              <ServiceDetailCard
                title="Recruitment"
                description="Our specialized talent acquisition services help hospitality businesses find and retain the best talent in the industry. We understand the unique staffing challenges in hospitality and provide tailored recruitment solutions to meet your specific needs."
                image="/images/manager-women-working-hiring-application-discussing-curriculum-vitae-with-remote-recruiter-online-videocall-meeting-conference-startup-office-teleconference-call-computer-screen.jpg"
                features={[
                  "Executive Search & Placement",
                  "Hospitality Staff Recruitment",
                  "Candidate Assessment & Screening",
                  "Temporary & Permanent Staffing",
                  "Employer Branding Strategies",
                  "Succession Planning",
                ]}
                caseStudy={{
                  title: "Hotel Chain Staff Retention Improvement",
                  description:
                    "We implemented a comprehensive recruitment transformation for a hotel chain struggling with high staff turnover. By redesigning recruitment processes, implementing structured screening procedures, and creating clear career paths, we reduced staff turnover by 40% and improved employee satisfaction scores significantly.",
                  metrics: [
                    { label: "Staff Turnover Reduction", value: "40%" },
                    { label: "Successful Placements", value: "95%" },
                    { label: "Employee Satisfaction", value: "+52%" },
                  ],
                }}
                reversed
              />
            </AnimatedSection>

            <AnimatedSection>
              <ServiceDetailCard
                title="Training"
                description="Our professional development programs enhance skills and service quality across all levels of your hospitality organization. We deliver customized training solutions that address your specific needs and help your team deliver exceptional guest experiences."
                image="/images/beginner-average-skilled-expert-productivity.jpg"
                features={[
                  "Customer Service Excellence",
                  "Leadership Development",
                  "Operational Skills Training",
                  "Customized Training Programs",
                  "Mentoring & Coaching Services",
                  "Performance Improvement Workshops",
                ]}
                caseStudy={{
                  title: "Luxury Resort Service Transformation",
                  description:
                    "We developed and implemented a comprehensive training program for a luxury resort struggling with inconsistent service quality. Our customized approach included service excellence workshops, leadership coaching, and operational skills training, resulting in significant improvements in guest satisfaction and staff performance.",
                  metrics: [
                    { label: "Guest Satisfaction", value: "+45%" },
                    { label: "Staff Performance", value: "+38%" },
                    { label: "Repeat Bookings", value: "+27%" },
                  ],
                }}
                reversed
              />
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
                  <Link href="/book-consultation">Request a Consultation</Link>
                </Button>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-base px-8 dark:text-white text-primary"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
