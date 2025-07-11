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
    icon: <Building className="h-8 w-8 md:h-10 md:w-10" />,
    value: 150,
    label: "Hotels Managed",
    suffix: "+",
    color: "bg-blue-50 text-blue-600",
    duration: 2000,
    description: "Across 15 African countries",
  },
  {
    icon: <Users className="h-8 w-8 md:h-10 md:w-10" />,
    value: 2500,
    label: "Professionals Trained",
    suffix: "+",
    color: "bg-purple-50 text-purple-600",
    duration: 2500,
    description: "Through our hospitality programs",
  },
  {
    icon: <Award className="h-8 w-8 md:h-10 md:w-10" />,
    value: 25,
    label: "Years of Experience",
    suffix: "+",
    color: "bg-gold/10 text-gold-dark",
    duration: 1500,
    description: "In hospitality management",
  },
  {
    icon: <Globe className="h-8 w-8 md:h-10 md:w-10" />,
    value: 15,
    label: "Countries",
    color: "bg-green-50 text-green-600",
    duration: 1000,
    description: "With active operations",
  },
  {
    icon: <TrendingUp className="h-8 w-8 md:h-10 md:w-10" />,
    value: 40,
    prefix: "+",
    label: "Revenue Growth",
    suffix: "%",
    color: "bg-red-50 text-red-600",
    duration: 1800,
    description: "Average for our clients",
  },
  {
    icon: <Star className="h-8 w-8 md:h-10 md:w-10" />,
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
    color: "bg-amber-50 text-amber-600",
    duration: 1600,
    description: "Based on client surveys",
  },
  {
    icon: <Briefcase className="h-8 w-8 md:h-10 md:w-10" />,
    value: 300,
    label: "Projects Completed",
    suffix: "+",
    color: "bg-indigo-50 text-indigo-600",
    duration: 2200,
    description: "Across all service areas",
  },
  {
    icon: <Clock className="h-8 w-8 md:h-10 md:w-10" />,
    value: 24,
    label: "Support Hours",
    suffix: "/7",
    color: "bg-teal-50 text-teal-600",
    duration: 1200,
    description: "Available to all clients",
  },
];

const Counter = ({
  value,
  duration,
  isInView,
}: {
  value: number;
  duration: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, value, duration]);

  return <span className="tabular-nums">{count.toLocaleString()}</span>;
};

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              We've helped hospitality businesses across Africa achieve
              remarkable results
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
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
                <CardContent className="flex flex-col items-center p-4 md:p-8 text-center relative h-full">
                  <div
                    className={cn(
                      `mb-4 rounded-full ${stat.color} p-4 md:p-5 relative z-10 group-hover:scale-110 transition-transform duration-300`,
                      hoveredIndex === index && "animate-pulse"
                    )}
                  >
                    {stat.icon}
                  </div>

                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <Counter
                      value={stat.value}
                      duration={stat.duration || 2000}
                      isInView={isInView}
                    />
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>

                  <div className="text-sm md:text-base text-muted-foreground font-medium mb-2">
                    {stat.label}
                  </div>

                  {stat.description && (
                    <div className="text-xs text-muted-foreground mt-1 hidden sm:block">
                      {stat.description}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
