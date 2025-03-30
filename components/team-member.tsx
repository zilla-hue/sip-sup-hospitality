"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail, ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: SocialLinks;
  achievements?: string[];
}

export function TeamMember({
  name,
  role,
  image,
  bio,
  socialLinks,
  achievements = [],
}: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000">
      <motion.div
        className={cn(
          "relative w-full transition-all duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Front of card */}
        <Card
          className="overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg card-hover backface-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={image || "https://randomuser.me/api/portraits/men/32.jpg"}
              alt={name}
              fill
              className={cn(
                "object-cover transition-transform duration-700",
                isHovered ? "scale-110" : "scale-100"
              )}
            />
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{
                duration: 0.3,
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-sm text-white/90">{role}</p>
                </div>
                <div className="flex space-x-2">
                  {socialLinks.linkedin && (
                    <Link
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                      aria-label={`${name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  )}
                  {socialLinks.twitter && (
                    <Link
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                      aria-label={`${name}'s Twitter profile`}
                    >
                      <Twitter className="h-4 w-4" />
                    </Link>
                  )}
                  {socialLinks.email && (
                    <Link
                      href={`mailto:${socialLinks.email}`}
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                      aria-label={`Email ${name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
            <p className="text-sm text-primary/70 mb-4">{role}</p>
            <p className="text-sm text-muted-foreground line-clamp-3">{bio}</p>

            {achievements && achievements.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {achievements.slice(0, 1).map((achievement, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-primary/5 text-primary"
                  >
                    <Award className="mr-1 h-3 w-3" /> {achievement}
                  </Badge>
                ))}
                {achievements.length > 1 && (
                  <Badge
                    variant="outline"
                    className="bg-primary/5 text-primary"
                  >
                    +{achievements.length - 1} more
                  </Badge>
                )}
              </div>
            )}

            <div className="mt-4 flex justify-between items-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80 p-0 h-auto"
                onClick={() => setIsFlipped(true)}
              >
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </Button>

              <div className="flex space-x-1">
                {socialLinks.linkedin && (
                  <Link
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/60 hover:text-primary transition-colors"
                    aria-label={`${name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                )}
                {socialLinks.twitter && (
                  <Link
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/60 hover:text-primary transition-colors"
                    aria-label={`${name}'s Twitter profile`}
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg backface-hidden rotate-y-180">
          <div className="h-full flex flex-col p-6">
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full mr-4">
                <Image
                  src={
                    image || "https://randomuser.me/api/portraits/men/32.jpg"
                  }
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{name}</h3>
                <p className="text-sm text-primary/70">{role}</p>
              </div>
            </div>

            <div className="flex-grow overflow-auto">
              <h4 className="font-semibold text-primary mb-2">About</h4>
              <p className="text-sm text-muted-foreground mb-4">{bio}</p>

              {achievements && achievements.length > 0 && (
                <>
                  <h4 className="font-semibold text-primary mb-2 mt-4">
                    Achievements & Certifications
                  </h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Award className="mr-2 h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-primary/10">
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary border-primary/20"
                  onClick={() => setIsFlipped(false)}
                >
                  Back to Profile
                </Button>

                <div className="flex space-x-2">
                  {socialLinks.linkedin && (
                    <Link
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
                      aria-label={`${name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </Link>
                  )}
                  {socialLinks.twitter && (
                    <Link
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
                      aria-label={`${name}'s Twitter profile`}
                    >
                      <Twitter className="h-4 w-4 text-primary" />
                    </Link>
                  )}
                  {socialLinks.email && (
                    <Link
                      href={`mailto:${socialLinks.email}`}
                      className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
                      aria-label={`Email ${name}`}
                    >
                      <Mail className="h-4 w-4 text-primary" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
