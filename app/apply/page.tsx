"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/animated-section";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const position = searchParams.get("position") || "a position";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: position,
    resume: null,
    coverLetter: "",
    experience: "",
    availability: "",
    heardAbout: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="flex min-h-screen flex-col pt-20">
        <div className="container px-4 py-16">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl rounded-lg border border-primary/10 bg-white p-8 shadow-md">
              <div className="mb-6 flex flex-col items-center justify-center text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h1 className="mb-2 text-3xl font-bold text-primary">
                  Application Submitted!
                </h1>
                <p className="text-muted-foreground">
                  Thank you for your interest in the{" "}
                  <span className="font-semibold">{position}</span> position. We
                  have received your application and will review it shortly.
                </p>
              </div>
              <p className="mb-6 text-center text-muted-foreground">
                Our HR team will contact you if your qualifications match our
                requirements. You can expect to hear from us within 1-2 weeks.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/careers">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Careers
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <section className="bg-primary py-12 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                Join Our Team
              </h1>
              <p className="text-lg text-white/90">
                Complete the application form below to apply for a position with
                SIP-SUP Hospitality
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl rounded-lg border border-primary/10 bg-white p-6 shadow-md md:p-8">
              <div className="mb-6">
                <Link
                  href="/careers"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Job Listings
                </Link>
              </div>

              <h2 className="mb-6 text-2xl font-bold text-primary">
                Application for {position}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-base">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="email" className="text-base">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="resume" className="text-base">
                      Resume/CV <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      onChange={handleFileChange}
                      className="mt-1"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter" className="text-base">
                      Cover Letter
                    </Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit"
                      className="mt-1 min-h-[150px]"
                    />
                  </div>

                  <div>
                    <Label className="text-base">
                      Years of Experience{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      name="experience"
                      value={formData.experience}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, experience: value }))
                      }
                      className="mt-2"
                      required
                    >
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="0-1" id="exp-0-1" />
                          <Label htmlFor="exp-0-1" className="font-normal">
                            0-1 years
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-3" id="exp-1-3" />
                          <Label htmlFor="exp-1-3" className="font-normal">
                            1-3 years
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3-5" id="exp-3-5" />
                          <Label htmlFor="exp-3-5" className="font-normal">
                            3-5 years
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5+" id="exp-5-plus" />
                          <Label htmlFor="exp-5-plus" className="font-normal">
                            5+ years
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="availability" className="text-base">
                      Availability <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      name="availability"
                      value={formData.availability}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          availability: value,
                        }))
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                        <SelectItem value="1-month">1 month notice</SelectItem>
                        <SelectItem value="more-than-1-month">
                          More than 1 month
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="heardAbout" className="text-base">
                      How did you hear about us?
                    </Label>
                    <Select
                      name="heardAbout"
                      value={formData.heardAbout}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, heardAbout: value }))
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="job-board">Job Board</SelectItem>
                        <SelectItem value="company-website">
                          Company Website
                        </SelectItem>
                        <SelectItem value="social-media">
                          Social Media
                        </SelectItem>
                        <SelectItem value="referral">
                          Employee Referral
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-primary md:w-auto"
                    size="lg"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
