"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/animated-section";

// Sample course data for the enrollment page
const courseData = {
  slug: "hotel-operations-management",
  title: "Hotel Operations Management",
  description:
    "Master the fundamentals of hotel operations management, from front desk to housekeeping, and learn how to optimize efficiency and guest satisfaction.",
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  price: 299,
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
};

export default function CourseEnrollPage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      router.push(`/courses/${params.slug}/success`);
    }, 2000);
  };

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <div className="container px-4 py-16">
        <AnimatedSection>
          <div className="mb-8">
            <Link
              href={`/courses/${params.slug}`}
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to course details
            </Link>
            <h1 className="mt-4 text-3xl font-bold text-primary">Checkout</h1>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <AnimatedSection>
              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <h2 className="mb-6 text-xl font-bold text-primary">
                    Payment Information
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-2 rounded-lg border border-primary/10 p-4">
                          <RadioGroupItem
                            value="credit-card"
                            id="credit-card"
                          />
                          <Label
                            htmlFor="credit-card"
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex items-center">
                              <CreditCard className="mr-2 h-5 w-5 text-primary" />
                              <span>Credit / Debit Card</span>
                            </div>
                          </Label>
                          <div className="flex space-x-2">
                            <Image
                              src="/visa.svg"
                              alt="Visa"
                              width={32}
                              height={20}
                              className="h-5 w-auto"
                            />
                            <Image
                              src="/mastercard.svg"
                              alt="Mastercard"
                              width={32}
                              height={20}
                              className="h-5 w-auto"
                            />
                            <Image
                              src="/amex.svg"
                              alt="American Express"
                              width={32}
                              height={20}
                              className="h-5 w-auto"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 rounded-lg border border-primary/10 p-4">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label
                            htmlFor="paypal"
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex items-center">
                              <Image
                                src="/paypal.svg"
                                alt="PayPal"
                                width={20}
                                height={20}
                                className="mr-2 h-5 w-5"
                              />
                              <span>PayPal</span>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {paymentMethod === "credit-card" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="card-name">Cardholder Name</Label>
                          <Input
                            id="card-name"
                            placeholder="Name on card"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-8">
                      <h3 className="mb-4 text-lg font-bold text-primary">
                        Billing Information
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" required />
                          </div>
                          <div>
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" required />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>

                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" required />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-1">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" required />
                          </div>
                          <div className="col-span-1">
                            <Label htmlFor="state">State/Province</Label>
                            <Input id="state" required />
                          </div>
                          <div className="col-span-1">
                            <Label htmlFor="zip">Zip/Postal Code</Label>
                            <Input id="zip" required />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Input id="country" required />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="mt-8 w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="mr-2 h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>Complete Purchase</>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection delay={0.1}>
              <div className="sticky top-24">
                <Card className="border-primary/10">
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-xl font-bold text-primary">
                      Order Summary
                    </h2>

                    <div className="mb-4 flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-md">
                        <Image
                          src={courseData.image || "/placeholder.svg"}
                          alt={courseData.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">
                          {courseData.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {courseData.description}
                        </p>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Course Price
                        </span>
                        <span className="font-medium">${courseData.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Discount</span>
                        <span className="font-medium">$0</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="mb-6 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${courseData.price}</span>
                    </div>

                    <div className="rounded-lg bg-primary/5 p-4">
                      <h3 className="mb-3 font-medium text-primary">
                        What's included:
                      </h3>
                      <ul className="space-y-2">
                        {courseData.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
