"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Loader2,
  CheckCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
  Building,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

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
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type CourseCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  rating: number;
  reviewCount: number;
  slug: string;
  featured?: boolean;
};

export function CourseCard({
  title,
  description,
  image,
  category,
  duration,
  level,
  price,
  rating,
  reviewCount,
  slug,
  featured = false,
}: CourseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute left-4 top-4 z-10">
            <Badge className="bg-gold text-primary">Featured</Badge>
          </div>
        )}
      </div>
      <div className="bg-white p-6">
        <div className="mb-3 flex items-center justify-between">
          <Badge variant="outline" className="text-primary">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-primary">{rating}</span>
            <span className="mx-1">•</span>
            <span>({reviewCount})</span>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{duration}</p>
            <p className="text-sm font-medium text-primary">{level}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">${price}</p>
          </div>
        </div>
        <Button
          className="mt-4 w-full bg-gold hover:bg-gold/90 text-primary"
          asChild
        >
          <Link href={`/courses/${slug}`}>View Course</Link>
        </Button>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Form submitted!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
        setFormStep(0);
      }, 3000);
    }, 2000);
  }

  const nextStep = async () => {
    const fields: (keyof z.infer<typeof formSchema>)[] =
      formStep === 0 ? ["name", "email", "phone"] : ["message"];

    const output = await form.trigger(fields, { shouldFocus: true });

    if (!output) return;

    setFormStep(formStep + 1);

    // Scroll to top of form
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  return (
    <div ref={formRef}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-primary">
                Your Information
              </span>
              <span className="text-sm font-medium text-primary">
                Your Message
              </span>
            </div>
            <div className="w-full bg-primary/10 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-300"
                style={{ width: formStep === 0 ? "50%" : "100%" }}
              ></div>
            </div>
          </div>

          {formStep === 0 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium flex items-center">
                        <User className="h-4 w-4 mr-2 text-primary/70" />
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className={cn(
                            "border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all",
                            "rounded-md shadow-sm",
                            "placeholder:text-muted-foreground/60"
                          )}
                        />
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
                      <FormLabel className="text-primary font-medium flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary/70" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          type="email"
                          {...field}
                          className={cn(
                            "border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all",
                            "rounded-md shadow-sm",
                            "placeholder:text-muted-foreground/60"
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-medium flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-primary/70" />
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your phone number"
                        {...field}
                        className={cn(
                          "border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all",
                          "rounded-md shadow-sm",
                          "placeholder:text-muted-foreground/60"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium flex items-center">
                        <Building className="h-4 w-4 mr-2 text-primary/70" />
                        Company (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your company name"
                          {...field}
                          className={cn(
                            "border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all",
                            "rounded-md shadow-sm",
                            "placeholder:text-muted-foreground/60"
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-primary/70" />
                        Service of Interest (Optional)
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-primary/20 focus:ring-2 focus:ring-primary/30">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hotel-management">
                            Hotel Management
                          </SelectItem>
                          <SelectItem value="business-operations">
                            Business Operations
                          </SelectItem>
                          <SelectItem value="financial-advisory">
                            Financial Advisory
                          </SelectItem>
                          <SelectItem value="hr-services">
                            HR Services
                          </SelectItem>
                          <SelectItem value="training">
                            Training & Development
                          </SelectItem>
                          <SelectItem value="marketing">
                            Marketing Services
                          </SelectItem>
                          <SelectItem value="technology">
                            Technology Solutions
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary/90"
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {formStep === 1 && (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-medium flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-primary/70" />
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="How can we help you?"
                        {...field}
                        className={cn(
                          "min-h-[180px] border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all",
                          "rounded-md shadow-sm resize-none",
                          "placeholder:text-muted-foreground/60"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="border-primary/20"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className={cn(
                    "transition-all duration-300 relative overflow-hidden group",
                    isSuccess
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-primary hover:bg-primary/90"
                  )}
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Submitted Successfully
                    </>
                  ) : (
                    <>
                      Submit
                      <span className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>

      {/* Success message */}
      {isSuccess && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
            <div>
              <h3 className="text-green-800 font-medium">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 text-sm">
                Thank you for contacting us. We'll get back to you as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
