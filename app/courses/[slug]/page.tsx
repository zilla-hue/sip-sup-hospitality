import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Globe,
  GraduationCap,
  BarChart,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection } from "@/components/animated-section";
import { CourseCard } from "@/components/course-card";

// Define the course data structure
interface CourseData {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  heroImage: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  instructor: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
  features: string[];
  learningOutcomes: string[];
  curriculum: {
    title: string;
    lessons: {
      title: string;
      duration: string;
    }[];
  }[];
  prerequisites: string[];
  targetAudience: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedCourses: string[];
}

// Sample course data
const courses: CourseData[] = [
  {
    slug: "hotel-operations-management",
    title: "Hotel Operations Management",
    description:
      "Master the fundamentals of hotel operations management, from front desk to housekeeping, and learn how to optimize efficiency and guest satisfaction.",
    longDescription: [
      "This comprehensive course covers all aspects of hotel operations management, providing you with the knowledge and skills needed to effectively manage a hotel's daily operations.",
      "You'll learn how to optimize front desk operations, manage housekeeping efficiently, handle guest complaints, implement quality control measures, and much more. The course combines theoretical knowledge with practical applications, ensuring you can apply what you learn in real-world scenarios.",
      "Whether you're a current hotel manager looking to enhance your skills or aspiring to move into a management role, this course will provide you with the tools and knowledge needed to succeed in the competitive hospitality industry.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    category: "Hotel Management",
    duration: "8 weeks",
    level: "Intermediate",
    price: 299,
    rating: 4.8,
    reviewCount: 124,
    instructor: {
      name: "Dr. Oluwaseun Adebayo",
      title: "Former Hotel General Manager & Hospitality Consultant",
      bio: "Dr. Adebayo has over 20 years of experience in hotel management, having served as General Manager for several luxury hotels across Africa. He holds a PhD in Hospitality Management and is a certified Hotel Administrator.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    features: [
      "24/7 access to course materials",
      "15 video lectures",
      "10 practical assignments",
      "5 case studies",
      "Interactive quizzes",
      "Discussion forums",
      "Certificate of completion",
      "1-year access to course updates",
    ],
    learningOutcomes: [
      "Develop effective front desk management strategies",
      "Implement efficient housekeeping operations",
      "Optimize food and beverage service",
      "Manage guest complaints and service recovery",
      "Implement quality control measures",
      "Develop staff training programs",
      "Analyze operational performance metrics",
      "Create standard operating procedures",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Hotel Operations",
        lessons: [
          { title: "Overview of Hotel Departments", duration: "45 min" },
          { title: "The Guest Journey", duration: "50 min" },
          { title: "Key Performance Indicators", duration: "55 min" },
        ],
      },
      {
        title: "Module 2: Front Office Operations",
        lessons: [
          { title: "Reservation Systems", duration: "60 min" },
          { title: "Check-in and Check-out Procedures", duration: "55 min" },
          { title: "Guest Relations Management", duration: "50 min" },
        ],
      },
      {
        title: "Module 3: Housekeeping Management",
        lessons: [
          { title: "Housekeeping Department Structure", duration: "45 min" },
          { title: "Room Cleaning Standards", duration: "50 min" },
          { title: "Inventory and Supply Management", duration: "55 min" },
        ],
      },
      {
        title: "Module 4: Food and Beverage Operations",
        lessons: [
          { title: "Restaurant Service Standards", duration: "60 min" },
          { title: "Banquet and Event Management", duration: "65 min" },
          { title: "Bar and Beverage Operations", duration: "50 min" },
        ],
      },
      {
        title: "Module 5: Quality Management",
        lessons: [
          { title: "Quality Control Systems", duration: "55 min" },
          { title: "Guest Feedback Analysis", duration: "50 min" },
          { title: "Continuous Improvement Strategies", duration: "60 min" },
        ],
      },
    ],
    prerequisites: [
      "Basic understanding of hospitality industry",
      "1-2 years of experience in hospitality (recommended but not required)",
      "Proficiency in English",
    ],
    targetAudience: [
      "Current hotel supervisors and managers",
      "Hospitality professionals seeking to advance to management positions",
      "Hotel owners and entrepreneurs",
      "Recent hospitality graduates looking to enhance their practical knowledge",
    ],
    faqs: [
      {
        question: "How much time should I dedicate to this course each week?",
        answer:
          "We recommend dedicating 5-7 hours per week to get the most out of this course. This includes watching lectures, completing assignments, and participating in discussions.",
      },
      {
        question: "Will I receive a certificate upon completion?",
        answer:
          "Yes, you will receive a digital certificate of completion once you have completed all course requirements with a passing grade of 70% or higher.",
      },
      {
        question: "Can I access the course materials after the 8-week period?",
        answer:
          "Yes, you will have access to all course materials for one year after your enrollment date, allowing you to review the content at your own pace.",
      },
      {
        question: "Is there any practical component to this course?",
        answer:
          "Yes, the course includes practical assignments and case studies that require you to apply the concepts learned to real-world scenarios.",
      },
    ],
    relatedCourses: [
      "revenue-management-strategies",
      "hospitality-leadership-excellence",
      "front-office-management",
    ],
  },
  // Additional courses would be defined here
];

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  // Find the course data based on the slug
  const course = courses.find((c) => c.slug === params.slug);

  // If course not found, return 404
  if (!course) {
    notFound();
  }

  // Find related courses
  const relatedCoursesData = course.relatedCourses
    .map((slug) => courses.find((c) => c.slug === slug))
    .filter(Boolean) as CourseData[];

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
          <Image
            src={course.heroImage || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <Badge className="mb-4 bg-gold text-primary">{course.category}</Badge>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {course.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            {course.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="bg-gold hover:bg-gold/90 text-primary" asChild>
              <Link href={`/courses/${course.slug}/enroll`}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Enroll Now
              </Link>
            </Button>
            <Link href="/courses">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <AnimatedSection>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-6 grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                    <TabsTrigger value="faqs">FAQs</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview">
                    <div className="space-y-6">
                      <div>
                        <h2 className="mb-4 text-2xl font-bold text-primary">
                          Course Description
                        </h2>
                        <div className="space-y-4">
                          {course.longDescription.map((paragraph, index) => (
                            <p key={index} className="text-muted-foreground">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-bold text-primary">
                          What You'll Learn
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {course.learningOutcomes.map((outcome, index) => (
                            <div key={index} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 text-primary shrink-0" />
                              <span className="text-muted-foreground">
                                {outcome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-bold text-primary">
                          Prerequisites
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {course.prerequisites.map((prerequisite, index) => (
                            <li key={index} className="text-muted-foreground">
                              {prerequisite}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-bold text-primary">
                          Who This Course is For
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {course.targetAudience.map((audience, index) => (
                            <li key={index} className="text-muted-foreground">
                              {audience}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="curriculum">
                    <div>
                      <h2 className="mb-6 text-2xl font-bold text-primary">
                        Course Curriculum
                      </h2>
                      <div className="space-y-6">
                        {course.curriculum.map((module, moduleIndex) => (
                          <div
                            key={moduleIndex}
                            className="rounded-lg border border-primary/10 overflow-hidden"
                          >
                            <div className="bg-primary/5 p-4">
                              <h3 className="font-bold text-primary">
                                {module.title}
                              </h3>
                            </div>
                            <div className="divide-y divide-primary/10">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="flex items-center justify-between p-4"
                                >
                                  <div className="flex items-center">
                                    <BookOpen className="mr-3 h-5 w-5 text-primary" />
                                    <span className="text-muted-foreground">
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <Clock className="mr-1 h-4 w-4" />
                                    <span>{lesson.duration}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="instructor">
                    <div>
                      <h2 className="mb-6 text-2xl font-bold text-primary">
                        Meet Your Instructor
                      </h2>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                          <Image
                            src={
                              course.instructor.image ||
                              "/placeholder.svg?height=128&width=128"
                            }
                            alt={course.instructor.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">
                            {course.instructor.name}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {course.instructor.title}
                          </p>
                          <p className="text-muted-foreground">
                            {course.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="faqs">
                    <div>
                      <h2 className="mb-6 text-2xl font-bold text-primary">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-6">
                        {course.faqs.map((faq, index) => (
                          <div
                            key={index}
                            className="rounded-lg border border-primary/10 p-6"
                          >
                            <h3 className="mb-3 text-lg font-bold text-primary">
                              {faq.question}
                            </h3>
                            <p className="text-muted-foreground">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={0.1}>
                <div className="sticky top-24">
                  <Card className="overflow-hidden border-primary/10">
                    <div className="aspect-video relative">
                      <Image
                        src={course.heroImage || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <Button className="bg-white/90 hover:bg-white text-primary">
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
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                          Watch Preview
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {course.salePrice ? (
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-primary">
                              ${course.salePrice}
                            </span>
                            <span className="text-lg text-muted-foreground line-through">
                              ${course.price}
                            </span>
                            <Badge className="bg-red-500 text-white">
                              {Math.round(
                                (1 - course.salePrice / course.price) * 100
                              )}
                              % OFF
                            </Badge>
                          </div>
                        ) : (
                          <div className="text-3xl font-bold text-primary">
                            ${course.price}
                          </div>
                        )}
                      </div>

                      <Button
                        className="w-full mb-6 bg-gold hover:bg-gold/90 text-primary"
                        asChild
                      >
                        <Link href={`/courses/${course.slug}/enroll`}>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Enroll Now
                        </Link>
                      </Button>

                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="mr-3 h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Duration</div>
                            <div className="text-sm text-muted-foreground">
                              {course.duration}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <BarChart className="mr-3 h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Level</div>
                            <div className="text-sm text-muted-foreground">
                              {course.level}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <GraduationCap className="mr-3 h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Certificate</div>
                            <div className="text-sm text-muted-foreground">
                              Certificate of Completion
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Globe className="mr-3 h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Language</div>
                            <div className="text-sm text-muted-foreground">
                              English
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Calendar className="mr-3 h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Access</div>
                            <div className="text-sm text-muted-foreground">
                              Lifetime Access
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Users className="mr-3 h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Students</div>
                            <div className="text-sm text-muted-foreground">
                              1,245+ enrolled
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCoursesData.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container px-4">
            <AnimatedSection>
              <h2 className="mb-2 text-center text-3xl font-bold text-primary">
                Related Courses
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                Explore these courses to further enhance your hospitality
                management skills
              </p>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedCoursesData.map((relatedCourse, index) => (
                <AnimatedSection key={relatedCourse.slug} delay={index * 0.1}>
                  <CourseCard
                    title={relatedCourse.title}
                    description={relatedCourse.description}
                    image={relatedCourse.heroImage}
                    category={relatedCourse.category}
                    duration={relatedCourse.duration}
                    level={relatedCourse.level}
                    price={relatedCourse.price}
                    rating={relatedCourse.rating}
                    reviewCount={relatedCourse.reviewCount}
                    slug={relatedCourse.slug}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
