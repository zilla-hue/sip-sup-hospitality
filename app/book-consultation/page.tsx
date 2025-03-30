"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/animated-section";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({
    required_error: "Please select a time.",
  }),
  message: z.string().optional(),
});

const availableTimes = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function BookConsultationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  }

  if (isSuccess) {
    return (
      <main className="flex min-h-screen flex-col pt-20">
        <div className="container px-4 py-16">
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
              <h1 className="mb-4 text-2xl font-bold text-primary">
                Consultation Scheduled Successfully!
              </h1>
              <p className="mb-6 text-muted-foreground">
                Thank you for scheduling a consultation with SIP-SUP
                Hospitality. We have received your request and will confirm your
                appointment shortly via email.
              </p>
              <div className="mb-8 w-full rounded-lg bg-gray-50 p-6">
                <div className="grid gap-4 text-left">
                  <div>
                    <span className="font-semibold text-primary">Name:</span>{" "}
                    {form.getValues("name")}
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Service:</span>{" "}
                    {form.getValues("service")}
                  </div>
                  <div>
                    <span className="font-semibold text-primary">
                      Date & Time:
                    </span>{" "}
                    {format(form.getValues("date"), "MMMM d, yyyy")} at{" "}
                    {form.getValues("time")}
                  </div>
                </div>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => (window.location.href = "/")}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-12 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                Book a Consultation
              </h1>
              <p className="text-lg text-white/90">
                Schedule a free consultation with our hospitality experts to
                discuss your business needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-primary">
                  Consultation Details
                </h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your email address"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your phone number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="hotel-design-development">
                                Hotel Design & Development
                              </SelectItem>
                              <SelectItem value="business-operations">
                                Business Operations & Management
                              </SelectItem>
                              <SelectItem value="financial-management">
                                Financial & Asset Management
                              </SelectItem>
                              <SelectItem value="hr-services">
                                HR Services
                              </SelectItem>
                              <SelectItem value="training">
                                Training, Mentoring & Coaching
                              </SelectItem>
                              <SelectItem value="marketing">
                                Marketing Services
                              </SelectItem>
                              <SelectItem value="technology">
                                Technology Solutions
                              </SelectItem>
                              <SelectItem value="security">
                                Facility Security Management
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select the service you're interested in discussing.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date <
                                      new Date(
                                        new Date().setHours(0, 0, 0, 0)
                                      ) ||
                                    date.getDay() === 0 ||
                                    date.getDay() === 6
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormDescription>
                              Select a weekday for your consultation.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {availableTimes.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              All times are in West Africa Time (WAT).
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Additional Information (Optional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please share any specific topics or questions you'd like to discuss during the consultation."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        "Schedule Consultation"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Book a Consultation */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                Why Book a Consultation?
              </h2>
              <p className="mb-12 text-muted-foreground">
                Our free consultations provide valuable insights and
                personalized recommendations for your hospitality business
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  Expert Insights
                </h3>
                <p className="text-muted-foreground">
                  Gain valuable insights from our team of hospitality experts
                  with years of industry experience and knowledge.
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
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  Tailored Solutions
                </h3>
                <p className="text-muted-foreground">
                  Receive personalized recommendations and solutions
                  specifically designed to address your business challenges and
                  goals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
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
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                    <path d="M8 9h12v7a2 2 0 0 1-2 2h-2"></path>
                    <path d="M16 3v3"></path>
                    <path d="M20 3v3"></path>
                    <path d="M15 9V3"></path>
                    <path d="M21 9V3"></path>
                    <path d="M21 13h-8"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  No Obligation
                </h3>
                <p className="text-muted-foreground">
                  Our consultations are completely free and come with no
                  obligation, allowing you to make informed decisions about your
                  business.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
