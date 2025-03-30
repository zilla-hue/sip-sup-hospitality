"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import {
  Building,
  Users,
  Award,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Briefcase,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color: string;
  duration?: number;
  description?: string;
}

const stats: Stat[] = [
  {
    icon: <Building className="h-10 w-10" />,
    value: 150,
    label: "Hotels Managed",
    suffix: "+",
    color: "bg-blue-50 text-blue-600",
    duration: 2000,
    description: "Across 15 African countries",
  },
  {
    icon: <Users className="h-10 w-10" />,
    value: 2500,
    label: "Professionals Trained",
    suffix: "+",
    color: "bg-purple-50 text-purple-600",
    duration: 2500,
    description: "Through our hospitality programs",
  },
  {
    icon: <Award className="h-10 w-10" />,
    value: 25,
    label: "Years of Experience",
    suffix: "+",
    color: "bg-gold/10 text-gold-dark",
    duration: 1500,
    description: "In hospitality management",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    value: 15,
    label: "Countries",
    color: "bg-green-50 text-green-600",
    duration: 1000,
    description: "With active operations",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    value: 40,
    prefix: "+",
    label: "Revenue Growth",
    suffix: "%",
    color: "bg-red-50 text-red-600",
    duration: 1800,
    description: "Average for our clients",
  },
  {
    icon: <Star className="h-10 w-10" />,
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
    color: "bg-amber-50 text-amber-600",
    duration: 1600,
    description: "Based on client surveys",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    value: 300,
    label: "Projects Completed",
    suffix: "+",
    color: "bg-indigo-50 text-indigo-600",
    duration: 2200,
    description: "Across all service areas",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    value: 24,
    label: "Support Hours",
    suffix: "/7",
    color: "bg-teal-50 text-teal-600",
    duration: 1200,
    description: "Available to all clients",
  },
];

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const intervals = stats.map((stat, index) => {
      const duration = stat.duration || 2000; // Default 2 seconds if not specified
      const steps = 30;
      const increment = stat.value / steps;
      let count = 0;

      return setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(intervals[index]);
        }

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(count);
          return newCounters;
        });
      }, duration / steps);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've helped hospitality businesses across Africa achieve
              remarkable results
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card
                className={cn(
                  "border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full",
                  hoveredIndex === index ? "scale-105" : "scale-100"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="flex flex-col items-center p-8 text-center relative h-full">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>

                  <div
                    className={cn(
                      `mb-6 rounded-full ${stat.color} p-5 relative z-10 group-hover:scale-110 transition-transform duration-300`,
                      hoveredIndex === index && "animate-pulse"
                    )}
                  >
                    {stat.icon}
                  </div>

                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <span className="tabular-nums">
                      {counters[index].toLocaleString()}
                    </span>
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>

                  <div className="text-muted-foreground font-medium mb-2">
                    {stat.label}
                  </div>

                  {stat.description && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.description}
                    </div>
                  )}

                  {/* Bottom decorative element */}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary/10 w-full transform -translate-y-2 group-hover:bg-primary/20 transition-colors duration-300"></div>

                  {/* Animated progress bar */}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
