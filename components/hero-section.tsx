"use client";

import type React from "react";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  cta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

interface HeroSectionProps {
  slides?: HeroSlide[];
  autoplay?: boolean;
  interval?: number;
}

export function HeroSection({
  slides = [
    {
      title: "HOSPITALITY MANAGEMENT FIRM",
      subtitle:
        "We provide comprehensive hospitality management solutions to help your business thrive in the competitive hospitality industry",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      cta: {
        text: "Get Started",
        link: "/contact",
      },
      secondaryCta: {
        text: "Our Services",
        link: "/services",
      },
    },
    {
      title: "PROFESSIONAL HOSPITALITY COURSES",
      subtitle:
        "Enhance your skills and advance your career with our industry-leading hospitality management courses",
      image: "/images/study-group-learning-library.jpg",
      cta: {
        text: "Browse Courses",
        link: "/courses",
      },
      secondaryCta: {
        text: "Learn More",
        link: "/about",
      },
    },
    {
      title: "EXPERT CONSULTING SERVICES",
      subtitle:
        "Strategic advisory and operational expertise to optimize your hospitality business performance",
      image: "/images/top-view-people-working-with-laptops.jpg",
      cta: {
        text: "Our Services",
        link: "/services",
      },
      secondaryCta: {
        text: "Book Consultation",
        link: "/book-consultation",
      },
    },
  ],
  autoplay = true,
  interval = 6000,
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [isAnimating, slides.length]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [isAnimating, slides.length]);

  useEffect(() => {
    if (!autoplay || isPaused) return;

    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, isPaused, next]);

  const handleSlideChange = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        sliderRef.current &&
        sliderRef.current.contains(document.activeElement)
      ) {
        if (e.key === "ArrowLeft") {
          prev();
          setIsPaused(true);
          // Resume autoplay after 10 seconds of inactivity
          setTimeout(() => setIsPaused(false), 10000);
        } else if (e.key === "ArrowRight") {
          next();
          setIsPaused(true);
          // Resume autoplay after 10 seconds of inactivity
          setTimeout(() => setIsPaused(false), 10000);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      next();
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 10000);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prev();
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 10000);
    }
  };

  return (
    <section
      ref={sliderRef}
      className="relative h-[700px] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Hero slider"
    >
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 dark:from-dark-primary/90 dark:to-dark-primary/70">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt="Hero Image"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </div>

          {/* Overlay pattern */}
          
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl"
          >
            <Badge className="mb-6 bg-gold text-primary dark:bg-dark-gold dark:text-dark-primary px-4 py-1.5 text-sm font-medium shadow-md">
              Premium Hospitality Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl dark:text-dark-white">
              {slides[currentSlide].title}
            </h1>
            <p className="mb-8 max-w-2xl mx-auto text-lg text-white/90 dark:text-dark-white/90">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-primary shadow-lg text-base px-8 group"
                asChild
              >
                <Link href={slides[currentSlide].cta.link}>
                  {slides[currentSlide].cta.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {slides[currentSlide].secondaryCta?.link &&
                slides[currentSlide].secondaryCta?.text && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-base px-8 dark:text-white text-primary"
                    asChild
                  >
                    <Link href={slides[currentSlide].secondaryCta?.link || "#"}>
                      {slides[currentSlide].secondaryCta?.text}
                    </Link>
                  </Button>
                )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "w-8 bg-gold"
                  : "w-2 bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="absolute top-1/2 left-4 right-4 flex -translate-y-1/2 justify-between pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white pointer-events-auto"
            onClick={() => {
              prev();
              setIsPaused(true);
              // Resume autoplay after 10 seconds of inactivity
              setTimeout(() => setIsPaused(false), 10000);
            }}
            aria-label="Previous slide"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white pointer-events-auto"
            onClick={() => {
              next();
              setIsPaused(true);
              // Resume autoplay after 10 seconds of inactivity
              setTimeout(() => setIsPaused(false), 10000);
            }}
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: interval / 1000,
            ease: "linear",
            repeat: autoplay && !isPaused ? Number.POSITIVE_INFINITY : 0,
            repeatType: "loop",
          }}
          key={`progress-${currentSlide}-${isPaused}`}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
