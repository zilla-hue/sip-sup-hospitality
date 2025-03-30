"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  description: string;
  metrics: Metric[];
}

interface ServiceDetailCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  caseStudy: CaseStudy;
  reversed?: boolean;
}

export function ServiceDetailCard({
  title,
  description,
  image,
  features,
  caseStudy,
  reversed = false,
}: ServiceDetailCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-2",
        reversed && "md:[direction:rtl]"
      )}
    >
      <div className={cn("text-left", reversed && "md:[direction:ltr]")}>
        <h3 className="mb-4 text-2xl font-bold text-primary">{title}</h3>
        <p className="mb-6 text-muted-foreground">{description}</p>

        <h4 className="mb-3 text-lg font-semibold text-primary">
          Key Features
        </h4>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="group bg-gold hover:bg-gold/90 text-primary">
          Learn More
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div className={cn("flex flex-col", reversed && "md:[direction:ltr]")}>
        <div
          className="relative mb-6 h-64 overflow-hidden rounded-lg shadow-lg md:h-72"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={
              image ||
              "https://placehold.co/600x400/e2e8f0/1e293b?text=Service+Detail"
            }
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        </div>

        <Card className="border-primary/10 bg-primary/5">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-gold" />
              <h4 className="text-lg font-semibold text-primary">
                Case Study: {caseStudy.title}
              </h4>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {caseStudy.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {caseStudy.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg bg-white p-3 text-center shadow-sm"
                >
                  <p className="text-xl font-bold text-primary">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
