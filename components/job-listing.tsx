"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface JobListingProps {
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  department: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export function JobListing({
  title,
  location,
  type,
  department,
  description,
  requirements,
  responsibilities,
}: JobListingProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-primary/10 bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      <div
        className={cn(
          "flex cursor-pointer flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between",
          isOpen && "border-b border-primary/10"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4 text-primary" />
              {location}
            </div>
            <Badge variant="outline" className="bg-primary/5 text-primary">
              {type}
            </Badge>
            <Badge variant="outline" className="bg-gold/10 text-gold">
              {department}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex"
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                `/apply?position=${encodeURIComponent(title)}`,
                "_blank"
              );
            }}
          >
            Apply Now
          </Button>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-primary transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6">
              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-primary">Description</h4>
                <p className="text-muted-foreground">{description}</p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-primary">
                  Requirements
                </h4>
                <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                  {requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 font-semibold text-primary">
                  Responsibilities
                </h4>
                <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                  {responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full md:hidden bg-gold hover:bg-gold/90 text-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    `/apply?position=${encodeURIComponent(title)}`,
                    "_blank"
                  );
                }}
              >
                Apply Now
              </Button>
              <Button
                className="hidden md:block bg-gold hover:bg-gold/90 text-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    `/apply?position=${encodeURIComponent(title)}`,
                    "_blank"
                  );
                }}
              >
                Apply for this position
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
