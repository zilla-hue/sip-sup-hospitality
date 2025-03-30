import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";

// Define the service data structure
interface ServiceData {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  detailedDescription: string[];
  features: string[];
  benefits: { title: string; description: string }[];
  processSteps: { title: string; description: string }[];
  caseStudy: {
    title: string;
    description: string;
    results: string[];
    image: string;
  };
  faq: { question: string; answer: string }[];
}

// Generate static paths for all services
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Sample service data
const services: ServiceData[] = [
  {
    slug: "hotel-design-development",
    title: "Hotel Design & Development",
    description:
      "Expert guidance for hotel design, development, and pre-opening services.",
    heroImage:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop",
    detailedDescription: [
      "Our Hotel Design & Development services provide comprehensive support from concept to completion. We work closely with owners, architects, and designers to create exceptional hospitality spaces that deliver outstanding guest experiences while maximizing operational efficiency and profitability.",
      "With years of experience in hotel development, our team understands the unique challenges and opportunities in creating successful hospitality properties. We combine industry best practices with innovative approaches to ensure your project meets its objectives on time and within budget.",
      "Whether you're developing a new property or renovating an existing one, our experts will guide you through every step of the process, from initial concept development to successful opening.",
    ],
    features: [
      "Concept Development & Feasibility Studies",
      "Project Management & Construction Oversight",
      "Interior Design & FF&E Procurement",
      "Pre-opening Strategy & Implementation",
      "Brand Standards Implementation",
      "Operational Setup & Systems Integration",
      "Staff Recruitment & Training",
      "Marketing & Launch Planning",
    ],
    benefits: [
      {
        title: "Reduced Development Time",
        description:
          "Our streamlined processes and experienced project management reduce development timelines by an average of 15-20%.",
      },
      {
        title: "Cost Optimization",
        description:
          "Strategic planning and procurement expertise help minimize costs without compromising quality or guest experience.",
      },
      {
        title: "Operational Efficiency",
        description:
          "Properties designed with operations in mind achieve greater efficiency and lower operating costs.",
      },
      {
        title: "Enhanced Guest Experience",
        description:
          "Thoughtful design and attention to detail create memorable guest experiences that drive satisfaction and loyalty.",
      },
    ],
    processSteps: [
      {
        title: "Initial Consultation & Needs Assessment",
        description:
          "We begin by understanding your vision, goals, and requirements for the property.",
      },
      {
        title: "Concept Development & Feasibility Analysis",
        description:
          "Our team develops initial concepts and conducts thorough feasibility studies to ensure viability.",
      },
      {
        title: "Design Development & Planning",
        description:
          "Working with architects and designers, we develop detailed plans that balance aesthetics, functionality, and operational efficiency.",
      },
      {
        title: "Project Management & Implementation",
        description:
          "Our experts oversee the implementation process, ensuring quality, timeline adherence, and budget control.",
      },
      {
        title: "Pre-opening Preparation",
        description:
          "We handle all aspects of pre-opening, from systems setup to staff recruitment and training.",
      },
      {
        title: "Launch & Initial Operations Support",
        description:
          "Our team provides support during launch and initial operations to ensure a smooth start.",
      },
    ],
    caseStudy: {
      title: "Lagos Luxury Resort Development",
      description:
        "We managed the complete development process for a 120-room luxury resort in Lagos, from initial concept to successful opening. Our team coordinated with architects, designers, and contractors to ensure the project was completed on time and within budget.",
      results: [
        "Completed project 2 months ahead of schedule",
        "Achieved 85% occupancy in first year of operation",
        "22% ROI in first year, exceeding projections by 5%",
        "Won 'Best New Luxury Resort' award in regional hospitality awards",
      ],
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    },
    faq: [
      {
        question: "How long does a typical hotel development project take?",
        answer:
          "The timeline varies depending on the size and complexity of the project. A typical mid-size hotel development project takes 18-24 months from concept to opening. Our team works to optimize this timeline while ensuring quality and attention to detail.",
      },
      {
        question: "Do you work with specific architects and designers?",
        answer:
          "While we have established relationships with many talented architects and designers, we're happy to work with your preferred partners. We can also recommend professionals based on your specific project needs and style preferences.",
      },
      {
        question: "Can you help with renovations of existing properties?",
        answer:
          "Yes, we provide comprehensive renovation services for existing properties. Our approach includes minimizing operational disruption while maximizing the impact of renovations on guest experience and property value.",
      },
      {
        question: "How do you ensure the project stays within budget?",
        answer:
          "We implement rigorous budget management processes, including detailed initial budgeting, regular monitoring, strategic procurement, and proactive issue resolution. Our experience allows us to anticipate potential cost overruns and address them before they impact the project.",
      },
    ],
  },
  {
    slug: "business-operations",
    title: "Business Operations",
    description:
      "Comprehensive business operations management services for hospitality businesses.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    detailedDescription: [
      "Our Business Operations services provide end-to-end support for hospitality businesses, helping you streamline operations, improve efficiency, and maximize profitability. We analyze your current processes and implement best practices tailored to your specific needs.",
      "From daily operations management to long-term strategic planning, our team of experienced professionals will work closely with you to optimize every aspect of your business. We combine industry expertise with innovative solutions to help your hospitality business thrive in competitive markets.",
      "Whether you need help with financial management, staff training, or operational restructuring, our comprehensive approach ensures measurable improvements in performance and guest satisfaction.",
    ],
    features: [
      "Operational Process Optimization",
      "Financial Management & Reporting",
      "Staff Training & Development",
      "Quality Assurance Programs",
      "Performance Benchmarking",
      "Strategic Business Planning",
      "Technology Integration",
      "Guest Experience Enhancement",
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        description:
          "Streamlined operations reduce waste and improve productivity by up to 30%.",
      },
      {
        title: "Cost Savings",
        description:
          "Our optimization strategies typically reduce operational costs by 15-25%.",
      },
      {
        title: "Improved Guest Satisfaction",
        description:
          "Enhanced operational processes lead to better guest experiences and higher satisfaction scores.",
      },
      {
        title: "Scalable Systems",
        description:
          "We implement systems that grow with your business, supporting future expansion.",
      },
    ],
    processSteps: [
      {
        title: "Business Assessment",
        description:
          "We conduct a thorough analysis of your current operations to identify strengths and areas for improvement.",
      },
      {
        title: "Strategy Development",
        description:
          "Based on our assessment, we develop a customized strategy to address your specific business needs.",
      },
      {
        title: "Implementation Planning",
        description:
          "We create a detailed implementation plan with clear milestones and measurable objectives.",
      },
      {
        title: "Training & Rollout",
        description:
          "Our team provides comprehensive training and support during the rollout of new processes.",
      },
      {
        title: "Monitoring & Adjustment",
        description:
          "We continuously monitor results and make adjustments to ensure optimal performance.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide ongoing support and periodic reviews to maintain operational excellence.",
      },
    ],
    caseStudy: {
      title: "Lagos Hotel Group Operations Overhaul",
      description:
        "We completely restructured operations for a 5-hotel group in Lagos, implementing new systems across all properties. Our comprehensive approach addressed financial management, staff training, and guest experience improvements.",
      results: [
        "Reduced operational costs by 22% across all properties",
        "Improved guest satisfaction scores from 78% to 92%",
        "Increased staff retention by 35%",
        "Achieved 18% revenue growth in first year post-implementation",
      ],
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    },
    faq: [
      {
        question:
          "How long does it take to see results from operational improvements?",
        answer:
          "Most clients see measurable improvements within 3-6 months, with full implementation typically taking 9-12 months depending on the scope of changes.",
      },
      {
        question:
          "Do you work with small independent properties or only large chains?",
        answer:
          "We work with hospitality businesses of all sizes. Our approach is tailored to each client's specific needs and scale of operations.",
      },
      {
        question: "What metrics do you use to measure success?",
        answer:
          "We track a variety of KPIs including operational efficiency, cost savings, guest satisfaction scores, and revenue growth. Metrics are customized for each client's specific goals.",
      },
      {
        question: "Can you help with technology integration?",
        answer:
          "Yes, we specialize in identifying and implementing the right technology solutions to support your operational improvements and business goals.",
      },
    ],
  },
  {
    slug: "financial-management",
    title: "Financial Management",
    description:
      "Professional financial management services tailored for hospitality businesses.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
    detailedDescription: [
      "Our Financial Management services provide comprehensive support for hospitality businesses, helping you optimize financial performance, reduce costs, and maximize profitability. We analyze your current financial situation and implement best practices tailored to your specific needs.",
      "From daily financial operations to long-term strategic planning, our team of experienced professionals will work closely with you to optimize every aspect of your financial management. We combine industry expertise with innovative solutions to help your hospitality business thrive in competitive markets.",
      "Whether you need help with budgeting, cost control, financial reporting, or investment planning, our comprehensive approach ensures measurable improvements in financial performance and business sustainability.",
    ],
    features: [
      "Financial Planning & Budgeting",
      "Cost Control & Reduction Strategies",
      "Financial Reporting & Analysis",
      "Cash Flow Management",
      "Investment Planning",
      "Revenue Optimization",
      "Tax Planning & Compliance",
      "Financial Risk Management",
    ],
    benefits: [
      {
        title: "Improved Profitability",
        description:
          "Our strategies typically increase profitability by 15-25% through optimized financial management.",
      },
      {
        title: "Cost Savings",
        description:
          "We identify and implement cost-saving measures that reduce operational expenses by 10-20%.",
      },
      {
        title: "Better Financial Control",
        description:
          "Enhanced financial systems provide greater visibility and control over your business finances.",
      },
      {
        title: "Strategic Decision Making",
        description:
          "Accurate financial data and analysis support better business decisions and long-term planning.",
      },
    ],
    processSteps: [
      {
        title: "Financial Assessment",
        description:
          "We conduct a thorough analysis of your current financial situation to identify strengths and areas for improvement.",
      },
      {
        title: "Strategy Development",
        description:
          "Based on our assessment, we develop a customized financial strategy to address your specific business needs.",
      },
      {
        title: "Implementation Planning",
        description:
          "We create a detailed implementation plan with clear milestones and measurable objectives.",
      },
      {
        title: "Training & Rollout",
        description:
          "Our team provides comprehensive training and support during the rollout of new financial processes.",
      },
      {
        title: "Monitoring & Adjustment",
        description:
          "We continuously monitor financial results and make adjustments to ensure optimal performance.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide ongoing support and periodic reviews to maintain financial excellence.",
      },
    ],
    caseStudy: {
      title: "Lagos Hotel Chain Financial Turnaround",
      description:
        "We completely restructured financial management for a 3-hotel chain in Lagos, implementing new systems across all properties. Our comprehensive approach addressed budgeting, cost control, and financial reporting improvements.",
      results: [
        "Increased profitability by 28% in first year",
        "Reduced operational costs by 18%",
        "Improved financial reporting accuracy by 95%",
        "Achieved 22% ROI on financial system investments",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
    },
    faq: [
      {
        question: "How quickly can we expect to see financial improvements?",
        answer:
          "Most clients see measurable improvements within 3-6 months, with full implementation typically taking 9-12 months depending on the scope of changes.",
      },
      {
        question:
          "Do you work with small independent properties or only large chains?",
        answer:
          "We work with hospitality businesses of all sizes. Our approach is tailored to each client's specific needs and scale of operations.",
      },
      {
        question: "What financial metrics do you focus on improving?",
        answer:
          "We track a variety of KPIs including profitability, cost savings, cash flow, and ROI. Metrics are customized for each client's specific financial goals.",
      },
      {
        question: "Can you help with financial technology integration?",
        answer:
          "Yes, we specialize in identifying and implementing the right financial technology solutions to support your financial management improvements and business goals.",
      },
    ],
  },
  {
    slug: "training",
    title: "Training & Development",
    description:
      "Professional training programs for hospitality staff and management.",
    heroImage:
      "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=2070&auto=format&fit=crop",
    detailedDescription: [
      "Our Training & Development programs are designed to elevate the skills of hospitality professionals at all levels. We offer customized training solutions that address the specific needs of your property and staff.",
      "From front-line staff training to executive leadership development, our programs combine industry best practices with innovative learning approaches. We focus on practical skills that can be immediately applied to improve service quality and operational efficiency.",
      "Our training methodology includes hands-on workshops, interactive sessions, and real-world case studies to ensure maximum engagement and knowledge retention.",
    ],
    features: [
      "Customized Training Programs",
      "Leadership Development",
      "Service Excellence Training",
      "Operational Skills Enhancement",
      "Compliance & Safety Training",
      "Soft Skills Development",
      "Train-the-Trainer Programs",
      "Ongoing Coaching & Support",
    ],
    benefits: [
      {
        title: "Improved Service Quality",
        description:
          "Well-trained staff deliver consistently excellent service, enhancing guest satisfaction.",
      },
      {
        title: "Increased Employee Confidence",
        description:
          "Training builds confidence and competence, leading to better performance and job satisfaction.",
      },
      {
        title: "Standardized Operations",
        description:
          "Training ensures all staff follow the same procedures, creating consistency across your property.",
      },
      {
        title: "Reduced Turnover",
        description:
          "Investing in employee development increases retention by showing commitment to staff growth.",
      },
    ],
    processSteps: [
      {
        title: "Needs Assessment",
        description:
          "We analyze your specific training needs through interviews, observations, and performance data.",
      },
      {
        title: "Program Design",
        description:
          "We create a customized training plan tailored to your property's requirements and goals.",
      },
      {
        title: "Implementation",
        description:
          "Our trainers deliver engaging sessions using interactive methods for maximum impact.",
      },
      {
        title: "Evaluation",
        description:
          "We assess training effectiveness through practical evaluations and feedback.",
      },
      {
        title: "Follow-up",
        description:
          "We provide ongoing support and coaching to reinforce learning and address challenges.",
      },
    ],
    caseStudy: {
      title: "Luxury Hotel Chain Training Initiative",
      description:
        "We implemented a comprehensive training program across a 5-hotel chain, addressing service standards, leadership development, and operational efficiency.",
      results: [
        "Improved guest satisfaction scores by 18% across all properties",
        "Reduced staff turnover by 32% in first year",
        "Increased operational efficiency metrics by 15%",
        "Achieved 95% compliance with brand standards",
      ],
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    },
    faq: [
      {
        question: "How do you customize training for different properties?",
        answer:
          "We conduct thorough needs assessments for each property, considering factors like brand standards, guest demographics, and operational challenges to create tailored programs.",
      },
      {
        question: "What training methods do you use?",
        answer:
          "Our methodology includes interactive workshops, role-playing, case studies, and on-the-job coaching to ensure practical learning and application.",
      },
      {
        question: "How do you measure training effectiveness?",
        answer:
          "We use a combination of practical evaluations, guest feedback analysis, and operational metrics to quantify training impact.",
      },
      {
        question: "Do you offer online training options?",
        answer:
          "Yes, we provide blended learning solutions combining online modules with in-person sessions for maximum flexibility and effectiveness.",
      },
    ],
  },
  {
    slug: "hr-services",
    title: "HR Services",
    description:
      "Comprehensive human resources solutions for hospitality businesses.",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    detailedDescription: [
      "Our HR Services provide end-to-end human resources solutions tailored specifically for the hospitality industry. We help you attract, develop, and retain top talent while ensuring compliance with labor regulations and industry standards.",
      "From recruitment and onboarding to performance management and employee relations, our comprehensive HR services cover all aspects of human resources management. We understand the unique challenges of hospitality staffing and provide solutions that balance operational needs with employee satisfaction.",
      "Whether you need help with seasonal staffing, leadership development, or creating a positive workplace culture, our HR experts will work closely with you to implement strategies that drive business success through your people.",
    ],
    features: [
      "Recruitment & Talent Acquisition",
      "Onboarding & Training Programs",
      "Performance Management Systems",
      "Compensation & Benefits Administration",
      "Employee Relations & Conflict Resolution",
      "Compliance & Labor Law Guidance",
      "Leadership Development Programs",
      "Workplace Culture Enhancement",
    ],
    benefits: [
      {
        title: "Reduced Turnover",
        description:
          "Our HR strategies reduce employee turnover by up to 40%, saving significant recruitment and training costs.",
      },
      {
        title: "Improved Productivity",
        description:
          "Effective HR management increases employee productivity by 25-35% through better engagement and performance.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "We ensure full compliance with labor laws and industry regulations, minimizing legal risks.",
      },
      {
        title: "Enhanced Employer Brand",
        description:
          "Strong HR practices improve your reputation as an employer, attracting higher quality candidates.",
      },
    ],
    processSteps: [
      {
        title: "HR Assessment",
        description:
          "We analyze your current HR practices to identify strengths and areas for improvement.",
      },
      {
        title: "Strategy Development",
        description:
          "We create a customized HR strategy aligned with your business goals and industry best practices.",
      },
      {
        title: "Implementation Planning",
        description:
          "We develop a detailed implementation plan with clear milestones and measurable objectives.",
      },
      {
        title: "Training & Rollout",
        description:
          "Our team provides comprehensive training and support during the rollout of new HR processes.",
      },
      {
        title: "Monitoring & Adjustment",
        description:
          "We continuously monitor HR metrics and make adjustments to ensure optimal performance.",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide ongoing HR support and periodic reviews to maintain excellence in people management.",
      },
    ],
    caseStudy: {
      title: "Lagos Hotel Group HR Transformation",
      description:
        "We completely restructured HR operations for a 4-hotel group in Lagos, implementing new systems across all properties. Our comprehensive approach addressed recruitment, training, performance management, and employee engagement.",
      results: [
        "Reduced employee turnover by 38% across all properties",
        "Improved employee satisfaction scores from 65% to 88%",
        "Reduced recruitment costs by 45% through better retention",
        "Achieved 100% compliance with labor regulations",
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    faq: [
      {
        question:
          "How quickly can we expect to see improvements in HR metrics?",
        answer:
          "Most clients see measurable improvements in key HR metrics within 3-6 months, with full implementation typically taking 9-12 months depending on the scope of changes.",
      },
      {
        question: "Do you provide HR support for seasonal staffing needs?",
        answer:
          "Yes, we specialize in creating flexible staffing solutions for seasonal operations, including temporary recruitment, training programs, and workforce planning.",
      },
      {
        question: "Can you help with HR technology implementation?",
        answer:
          "Absolutely. We can recommend and implement the right HR technology solutions to streamline your people management processes and improve efficiency.",
      },
      {
        question: "What industries do you specialize in for HR services?",
        answer:
          "While we serve clients across various sectors, we have particular expertise in hospitality, including hotels, restaurants, resorts, and event venues.",
      },
    ],
  },
  // Additional services would be defined here
];

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Find the service data based on the slug
  const service = services.find((s) => s.slug === params.slug);

  // If service not found, return 404
  if (!service) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <Image
            src={service.heroImage || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {service.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            {service.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="bg-gold hover:bg-gold/90 text-primary" asChild>
              <Link href="/book-consultation">Request Consultation</Link>
            </Button>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-primary text-center">
                Service Overview
              </h2>
              <div className="space-y-4">
                {service.detailedDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  Benefits
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="border-primary/10 hover:border-primary/30 transition-colors"
                    >
                      <CardContent className="p-4">
                        <h4 className="mb-2 font-bold text-primary">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-12 text-3xl font-bold text-primary text-center">
              Our Process
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary/20 hidden md:block"></div>

            {service.processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative mb-12 ml-6 md:ml-0">
                  <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-translate-x-1/2">
                    {index + 1}
                  </div>
                  <div
                    className={`ml-12 rounded-lg bg-white p-6 shadow-md md:ml-0 md:w-80 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-16"
                        : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <h3 className="mb-2 text-lg font-bold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl font-bold text-primary text-center">
              Case Study
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              See how we've helped our clients achieve success with our{" "}
              {service.title} services
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={service.caseStudy.image || "/placeholder.svg"}
                  alt={service.caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {service.caseStudy.title}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {service.caseStudy.description}
                </p>

                <h4 className="mb-3 font-semibold text-primary">Results:</h4>
                <ul className="space-y-2">
                  {service.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-gold shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>

                <Button className="mt-8 bg-gold hover:bg-gold/90 text-primary">
                  View More Case Studies{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl font-bold text-primary text-center">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Find answers to common questions about our {service.title}{" "}
              services
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                {service.faq.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-md"
                  >
                    <h3 className="mb-3 text-lg font-bold text-primary">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Ready to Get Started?
              </h2>
              <p className="mb-12 text-muted-foreground">
                Contact us today to discuss how our {service.title} services can
                help your business thrive
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mx-auto max-w-2xl">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-primary">
                  Request a Consultation
                </h3>
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
