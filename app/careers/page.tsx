import { Briefcase } from "lucide-react";

import { JobListing } from "@/components/job-listing";
import { AnimatedSection } from "@/components/animated-section";

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Elevate Your Hospitality Career
              </h1>
              <p className="text-lg text-white/90">
                Join our team of passionate hospitality professionals and be
                part of creating exceptional guest experiences
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">
              Current Openings
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Explore our current job opportunities and find the perfect role to
              advance your hospitality career
            </p>
          </AnimatedSection>

          <div className="grid gap-6">
            <AnimatedSection>
              <JobListing
                title="Hotel General Manager"
                location="Lagos, Nigeria"
                type="Full-time"
                department="Management"
                description="We are seeking an experienced Hotel General Manager to oversee all aspects of hotel operations, ensuring exceptional guest experiences and optimal financial performance."
                requirements={[
                  "Bachelor's degree in Hospitality Management or related field",
                  "Minimum 5 years of experience in hotel management",
                  "Strong leadership and team management skills",
                  "Excellent communication and interpersonal abilities",
                  "Financial management and budgeting expertise",
                ]}
                responsibilities={[
                  "Oversee all hotel operations and ensure high standards of service",
                  "Develop and implement strategies to maximize revenue and profitability",
                  "Lead and motivate a team of department heads and staff",
                  "Monitor and analyze financial performance and implement improvements",
                  "Ensure compliance with all relevant regulations and brand standards",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <JobListing
                title="Food & Beverage Director"
                location="Abuja, Nigeria"
                type="Full-time"
                department="F&B"
                description="We are looking for a talented Food & Beverage Director to lead our F&B operations, ensuring exceptional dining experiences for our guests while maximizing profitability."
                requirements={[
                  "Bachelor's degree in Hospitality Management or Culinary Arts",
                  "Minimum 3 years of experience in F&B management",
                  "Strong knowledge of food and beverage trends and best practices",
                  "Excellent leadership and team management skills",
                  "Financial acumen and budget management experience",
                ]}
                responsibilities={[
                  "Oversee all food and beverage operations, including restaurants, bars, and banquets",
                  "Develop innovative menus and dining concepts",
                  "Manage inventory, costs, and pricing strategies",
                  "Ensure compliance with health and safety regulations",
                  "Train and develop F&B staff to deliver exceptional service",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <JobListing
                title="Revenue Manager"
                location="Port Harcourt, Nigeria"
                type="Full-time"
                department="Finance"
                description="We are seeking a detail-oriented Revenue Manager to optimize our pricing strategies and maximize revenue across our hotel properties."
                requirements={[
                  "Bachelor's degree in Hospitality Management, Finance, or related field",
                  "Minimum 2 years of experience in revenue management",
                  "Proficiency in revenue management systems and tools",
                  "Strong analytical and problem-solving skills",
                  "Excellent communication and presentation abilities",
                ]}
                responsibilities={[
                  "Develop and implement revenue optimization strategies",
                  "Analyze market trends and competitor pricing",
                  "Forecast demand and adjust pricing accordingly",
                  "Collaborate with sales and marketing teams on promotions",
                  "Generate regular reports on revenue performance and trends",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <JobListing
                title="Front Office Manager"
                location="Lagos, Nigeria"
                type="Full-time"
                department="Operations"
                description="We are looking for a customer-focused Front Office Manager to lead our front desk team and ensure exceptional guest experiences from check-in to check-out."
                requirements={[
                  "Bachelor's degree in Hospitality Management or related field",
                  "Minimum 2 years of experience in front office operations",
                  "Strong leadership and team management skills",
                  "Excellent communication and problem-solving abilities",
                  "Proficiency in property management systems",
                ]}
                responsibilities={[
                  "Oversee all front office operations, including reception, concierge, and guest services",
                  "Train and develop front office staff to deliver exceptional service",
                  "Handle guest complaints and resolve issues promptly",
                  "Monitor and improve key performance indicators",
                  "Ensure smooth check-in and check-out processes",
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <JobListing
                title="Marketing Coordinator"
                location="Abuja, Nigeria"
                type="Full-time"
                department="Marketing"
                description="We are seeking a creative Marketing Coordinator to support our marketing initiatives and help promote our hospitality services to target audiences."
                requirements={[
                  "Bachelor's degree in Marketing, Communications, or related field",
                  "1-2 years of experience in marketing or hospitality",
                  "Strong digital marketing and social media skills",
                  "Excellent written and verbal communication abilities",
                  "Creative thinking and problem-solving skills",
                ]}
                responsibilities={[
                  "Assist in developing and implementing marketing campaigns",
                  "Manage social media accounts and create engaging content",
                  "Coordinate with external agencies and vendors",
                  "Track and report on marketing performance metrics",
                  "Support the organization of promotional events and activities",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">
              Why Join SIP-SUP Hospitality
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Discover the benefits of building your career with us
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  Career Growth
                </h3>
                <p className="text-muted-foreground">
                  We provide clear career paths and opportunities for
                  advancement within our organization. Our commitment to
                  promoting from within means you can grow your career with us.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  Professional Development
                </h3>
                <p className="text-muted-foreground">
                  We invest in our team members through continuous training and
                  development programs. Enhance your skills and stay at the
                  forefront of hospitality industry trends.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"></path>
                    <path d="M12 3v2"></path>
                    <path d="M12 19v2"></path>
                    <path d="M3 12h2"></path>
                    <path d="M19 12h2"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  Work-Life Balance
                </h3>
                <p className="text-muted-foreground">
                  We understand the importance of balance. Our flexible
                  scheduling options and supportive work environment help you
                  maintain a healthy work-life balance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">
              Our Application Process
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Learn about our streamlined recruitment process
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary/20"></div>

              <AnimatedSection>
                <div className="relative mb-12 ml-6 md:ml-0">
                  <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                    1
                  </div>
                  <div className="ml-12 rounded-lg bg-white p-6 shadow-md md:ml-0 md:w-80 md:odd:mr-auto md:odd:pr-16 md:even:ml-auto md:even:pl-16">
                    <h3 className="mb-2 text-lg font-bold text-primary">
                      Application Submission
                    </h3>
                    <p className="text-muted-foreground">
                      Browse our current openings and submit your application
                      online with your resume and cover letter.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="relative mb-12 ml-6 md:ml-0 md:text-right">
                  <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                    2
                  </div>
                  <div className="ml-12 rounded-lg bg-white p-6 shadow-md md:ml-auto md:mr-0 md:w-80 md:pl-16">
                    <h3 className="mb-2 text-lg font-bold text-primary">
                      Initial Screening
                    </h3>
                    <p className="text-muted-foreground">
                      Our HR team will review your application and contact
                      qualified candidates for an initial phone interview.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative mb-12 ml-6 md:ml-0">
                  <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                    3
                  </div>
                  <div className="ml-12 rounded-lg bg-white p-6 shadow-md md:ml-0 md:w-80 md:pr-16">
                    <h3 className="mb-2 text-lg font-bold text-primary">
                      Interview Process
                    </h3>
                    <p className="text-muted-foreground">
                      Selected candidates will be invited for in-person or
                      virtual interviews with the hiring manager and team.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="relative mb-12 ml-6 md:ml-0 md:text-right">
                  <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                    4
                  </div>
                  <div className="ml-12 rounded-lg bg-white p-6 shadow-md md:ml-auto md:mr-0 md:w-80 md:pl-16">
                    <h3 className="mb-2 text-lg font-bold text-primary">
                      Job Offer
                    </h3>
                    <p className="text-muted-foreground">
                      Successful candidates will receive a job offer with
                      details about compensation, benefits, and start date.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="relative ml-6 md:ml-0">
                  <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                    5
                  </div>
                  <div className="ml-12 rounded-lg bg-white p-6 shadow-md md:ml-0 md:w-80 md:pr-16">
                    <h3 className="mb-2 text-lg font-bold text-primary">
                      Onboarding
                    </h3>
                    <p className="text-muted-foreground">
                      Our comprehensive onboarding program will help you
                      integrate into our team and set you up for success.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
