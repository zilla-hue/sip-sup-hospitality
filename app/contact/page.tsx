import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact-form";
import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Contact Us
              </h1>
              <p className="text-lg text-white/90">
                Get in touch with our team to discuss how we can help your
                hospitality business thrive
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground">
                    502 Dalaba Street, Wuse Zone 5
                  </p>
                  <p className="text-muted-foreground">Abuja, Nigeria</p>
                  <Button
                    variant="link"
                    className="mt-2 text-primary hover:text-gold"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    Call Us
                  </h3>
                  <p className="text-muted-foreground">+234 813 800 8337</p>
                  <p className="text-muted-foreground">Mon-Fri: 8am - 6pm</p>
                  <Button
                    variant="link"
                    className="mt-2 text-primary hover:text-gold"
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    Email Us
                  </h3>
                  <p className="text-muted-foreground">
                    sipsuphospitality@gmail.com
                  </p>
                  <Button
                    variant="link"
                    className="mt-2 text-primary hover:text-gold"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-primary">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-full w-full min-h-[400px] bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9935516290016!2d7.455510575077938!3d9.064350890998403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b218bfd420b%3A0xa82e7b96bc041c17!2s502%20Dalaba%20St%2C%20Wuse%2C%20Abuja%20900285%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1743873580306!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SIP-SUP Hospitality Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Frequently Asked Questions
              </h2>
              <p className="mb-12 text-muted-foreground">
                Find answers to common questions about our hospitality
                management services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-primary font-medium">
                    What services does SIP-SUP Hospitality offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    SIP-SUP Hospitality offers a comprehensive range of services
                    including hotel management, business operations, financial
                    advisory, HR services, training and development, marketing
                    services, technology solutions, and facility security
                    management. We tailor our services to meet the specific
                    needs of each client.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-primary font-medium">
                    How can SIP-SUP Hospitality help improve my hotel's
                    performance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We help improve hotel performance through strategic
                    operational management, revenue optimization, cost control
                    measures, staff training and development, marketing
                    strategies, and technology implementation. Our comprehensive
                    approach addresses all aspects of hotel operations to
                    maximize efficiency and profitability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-primary font-medium">
                    Does SIP-SUP Hospitality work with both new and existing
                    properties?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we work with both new and existing properties. For new
                    properties, we provide pre-opening services, design and
                    development guidance, and operational setup. For existing
                    properties, we offer performance improvement, operational
                    optimization, and turnaround management services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-primary font-medium">
                    What is the typical timeline for seeing results from your
                    services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The timeline for results varies depending on the specific
                    services and the current state of the property. Some
                    operational improvements can show results within weeks,
                    while comprehensive turnarounds may take 6-12 months to
                    fully realize benefits. We establish clear timelines and
                    milestones for each project.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-primary font-medium">
                    How does the consultation process work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our consultation process begins with an initial meeting to
                    understand your needs and challenges. We then conduct a
                    thorough assessment of your property or business, develop a
                    customized proposal with recommendations, and upon approval,
                    implement the agreed-upon solutions. Throughout the process,
                    we maintain open communication and provide regular progress
                    updates.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-primary font-medium">
                    What geographic areas does SIP-SUP Hospitality serve?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    SIP-SUP Hospitality primarily serves clients across Africa,
                    with a strong presence in West Africa. We currently operate
                    in 15 countries and continue to expand our reach. Our team
                    has experience working with diverse markets and understands
                    the unique challenges and opportunities in different
                    regions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Transform Your Hospitality Business?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Contact us today to discuss how our comprehensive hospitality
              management solutions can help your business thrive.
            </p>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-primary"
              asChild
            >
              <Link href="/book-consultation">Schedule a Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
