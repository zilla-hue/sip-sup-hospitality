"use client";

import type React from "react";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating?: number;
  location?: string;
  projectType?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "General Manager",
    company: "Luxury Resort & Spa",
    content:
      "SIP-SUP Hospitality transformed our operations completely. Their expertise in hotel management helped us increase our occupancy rates by 30% and significantly improve guest satisfaction scores. The team's attention to detail and commitment to excellence is unmatched in the industry.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    location: "Lagos, Nigeria",
    projectType: "Hotel Management",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Owner",
    company: "Boutique Hotel Group",
    content:
      "Working with SIP-SUP has been a game-changer for our boutique hotels. Their financial advisory services helped us optimize our revenue streams and reduce operational costs without compromising on quality. I highly recommend their services to any hospitality business looking to improve performance.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    location: "Accra, Ghana",
    projectType: "Financial Advisory",
  },
  {
    id: 3,
    name: "Olivia Williams",
    role: "HR Director",
    company: "Grand Hotel Chain",
    content:
      "The training programs developed by SIP-SUP Hospitality have significantly improved our staff performance and retention. Their people-focused approach has created a positive work environment that translates to exceptional guest experiences. We've seen a 25% reduction in staff turnover since implementing their recommendations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.9,
    location: "Nairobi, Kenya",
    projectType: "Training & Development",
  },
  {
    id: 4,
    name: "David Okafor",
    role: "CEO",
    company: "Sunset Resorts",
    content:
      "SIP-SUP Hospitality's marketing strategies revolutionized our approach to guest acquisition. Their digital marketing team helped us increase direct bookings by 45% and reduce our dependency on OTAs. The ROI on their services has been exceptional, and we continue to see growth in our market share.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    location: "Abuja, Nigeria",
    projectType: "Marketing Services",
  },
];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((current + 1) % testimonials.length);
  }, [current, isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  }, [current, isAnimating]);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, [current, autoplay, next]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        sliderRef.current &&
        sliderRef.current.contains(document.activeElement)
      ) {
        if (e.key === "ArrowLeft") {
          prev();
          setAutoplay(false);
        } else if (e.key === "ArrowRight") {
          next();
          setAutoplay(false);
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
      setAutoplay(false);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prev();
      setAutoplay(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden py-20 bg-gray-50"
      ref={sliderRef}
      tabIndex={0}
      aria-label="Testimonial slider"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute top-0 left-0 right-0 h-40 bg-primary" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from hospitality businesses that have transformed their
            operations with our services
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative">
          <div className="absolute top-8 right-8 text-primary/5">
            <Quote size={120} strokeWidth={1} />
          </div>

          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                <div className="mb-6 relative">
                  <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-gold shadow-lg">
                    <Image
                      src={
                        testimonials[current].image ||
                        "https://randomuser.me/api/portraits/men/32.jpg"
                      }
                      alt={testimonials[current].name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-primary/10"></div>
                  <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-gold/30"></div>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {testimonials[current].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>

                {testimonials[current].location && (
                  <div className="mt-1 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/60 mr-1"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-xs text-muted-foreground">
                      {testimonials[current].location}
                    </span>
                  </div>
                )}

                {testimonials[current].projectType && (
                  <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {testimonials[current].projectType}
                  </div>
                )}

                <div className="mt-4 flex text-gold">
                  {testimonials[current].rating && (
                    <>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarComponent
                          key={star}
                          filled={
                            star <=
                            Math.floor(testimonials[current].rating || 0)
                          }
                          halfFilled={
                            star ===
                              Math.ceil(testimonials[current].rating || 0) &&
                            !Number.isInteger(testimonials[current].rating || 0)
                          }
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-primary">
                        {(testimonials[current].rating || 0).toFixed(1)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" />
                  <p className="text-lg italic text-muted-foreground pt-4 leading-relaxed">
                    "{testimonials[current].content}"
                  </p>

                  {/* Results section */}
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <h4 className="text-sm font-semibold text-primary mb-2">
                      Project Results:
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {current === 0 && (
                        <>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +30%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Occupancy
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +25%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Revenue
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +40%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Satisfaction
                            </div>
                          </div>
                        </>
                      )}
                      {current === 1 && (
                        <>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              -15%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Costs
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +22%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Revenue
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +18%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Profit
                            </div>
                          </div>
                        </>
                      )}
                      {current === 2 && (
                        <>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              -25%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Turnover
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +35%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Engagement
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +30%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Service Quality
                            </div>
                          </div>
                        </>
                      )}
                      {current === 3 && (
                        <>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +45%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Direct Bookings
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              -20%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              OTA Dependency
                            </div>
                          </div>
                          <div className="bg-primary/5 p-2 rounded text-center">
                            <div className="text-lg font-bold text-primary">
                              +28%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Market Share
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setCurrent(index);
                  setAutoplay(false);
                  setIsAnimating(true);
                }}
                className={cn(
                  "h-2 rounded-full transition-all",
                  current === index
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={current === index ? "true" : "false"}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-4 right-4 flex -translate-y-1/2 justify-between">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
              onClick={() => {
                prev();
                setAutoplay(false);
              }}
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
              onClick={() => {
                next();
                setAutoplay(false);
              }}
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/10">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: autoplay ? Number.POSITIVE_INFINITY : 0,
                repeatType: "loop",
              }}
              key={`progress-${current}-${autoplay}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Star component for ratings
function StarComponent({
  filled,
  halfFilled,
}: {
  filled: boolean;
  halfFilled?: boolean;
}) {
  return (
    <div className="relative w-5 h-5">
      {/* Empty star (background) */}
      <Star className="absolute inset-0 text-gold/30" fill="none" />

      {/* Filled star */}
      {filled && (
        <Star className="absolute inset-0 text-gold" fill="currentColor" />
      )}

      {/* Half-filled star */}
      {halfFilled && (
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star className="text-gold" fill="currentColor" />
        </div>
      )}
    </div>
  );
}
