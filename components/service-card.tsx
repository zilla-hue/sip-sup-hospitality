"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  slug?: string;
  premium?: boolean;
}

export function ServiceCard({
  title,
  description,
  image,
  features,
  slug,
  premium = false,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-500 card-hover",
        isHovered ? "shadow-xl" : "shadow-md",
        premium ? "border-gold/30" : "border-primary/10 hover:border-primary/30"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=224&width=384"}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-90" : "opacity-70"
          )}
        />

        <div className="absolute top-4 left-4">
          {premium ? (
            <Badge className="bg-gold text-primary font-medium shadow-sm">
              Premium Service
            </Badge>
          ) : (
            <Badge className="bg-primary text-white font-medium shadow-sm">
              Core Service
            </Badge>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-white/90 line-clamp-2">{description}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
          {/* <Check className="mr-2 h-5 w-5 text-gold" /> */}
          Key Features
        </h4>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group">
              <div className="mr-2 h-5 w-5 shrink-0 mt-0.5 relative">
                <div className="absolute inset-0 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <Check className="h-5 w-5 text-gold relative z-10" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          className={cn(
            "w-full group",
            premium
              ? "bg-gold hover:bg-gold/90 text-primary"
              : "bg-primary hover:bg-primary/90 text-white"
          )}
          asChild
        >
          <Link href={slug ? `/services/${slug}` : "/services"}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
