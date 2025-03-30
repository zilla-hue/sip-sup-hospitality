"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Download, FileText, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

// Sample course data for the success page
const courseData = {
  slug: "hotel-operations-management",
  title: "Hotel Operations Management",
  description:
    "Master the fundamentals of hotel operations management, from front desk to housekeeping, and learn how to optimize efficiency and guest satisfaction.",
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  instructor: {
    name: "Dr. Oluwaseun Adebayo",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
};

export default function CourseSuccessPage({
  params,
}: {
  params: { slug: string };
}) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <div className="container px-4 py-16">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-primary">
              Enrollment Successful!
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Thank you for enrolling in{" "}
              <span className="font-semibold text-primary">
                {courseData.title}
              </span>
              . Your payment has been processed successfully.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="mx-auto max-w-3xl border-primary/10">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-md">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary">
                    {courseData.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {courseData.description}
                  </p>
                </div>
              </div>

              <div className="mb-6 rounded-lg bg-primary/5 p-4">
                <h3 className="mb-2 font-medium text-primary">Next Steps:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-muted-foreground">
                      You will receive a confirmation email with your enrollment
                      details.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-muted-foreground">
                      Your account has been created. You can now access the
                      course materials.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-muted-foreground">
                      You will be redirected to the course dashboard in{" "}
                      {countdown} seconds.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href={`/courses/${params.slug}/dashboard`}>
                    <Play className="mr-2 h-4 w-4" />
                    Start Learning Now
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/courses">
                    <FileText className="mr-2 h-4 w-4" />
                    Browse More Courses
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-primary text-center">
              Your Receipt
            </h2>
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <div className="mb-6 flex justify-between">
                  <div>
                    <h3 className="font-bold text-primary">
                      SIP-SUP Hospitality
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      123 Hospitality Avenue
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lagos, Nigeria
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      Receipt #: 12345
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Date: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="mb-6 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-primary/10">
                        <th className="py-2 text-left font-medium text-primary">
                          Item
                        </th>
                        <th className="py-2 text-right font-medium text-primary">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-primary/10">
                        <td className="py-4 text-muted-foreground">
                          {courseData.title}
                        </td>
                        <td className="py-4 text-right text-muted-foreground">
                          $299.00
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 text-right font-medium text-primary">
                          Total
                        </td>
                        <td className="py-4 text-right font-bold text-primary">
                          $299.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button variant="outline" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
