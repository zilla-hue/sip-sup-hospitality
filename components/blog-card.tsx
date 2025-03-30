"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
  author?: {
    name: string;
    image?: string;
  };
  tags?: string[];
}

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  slug,
  featured = false,
  author,
  tags = [],
}: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg card-hover",
        featured && "border-gold/30"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${slug}`} className="block">
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
              "absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent transition-opacity duration-300",
              isHovered ? "opacity-90" : "opacity-70"
            )}
          />

          <div className="absolute top-4 left-4 z-10">
            <Badge
              className={cn(
                "font-medium shadow-sm",
                featured ? "bg-gold text-primary" : "bg-primary text-white"
              )}
            >
              {category}
            </Badge>
            {featured && (
              <Badge className="ml-2 bg-white text-primary font-medium shadow-sm">
                Featured
              </Badge>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3
              className={cn(
                "font-bold transition-all duration-300 line-clamp-2",
                featured ? "text-2xl" : "text-xl"
              )}
            >
              {title}
            </h3>
          </div>
        </div>
      </Link>

      <CardContent className="p-6">
        {/* Author and metadata */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>

          {author && (
            <div className="flex items-center">
              {author.image ? (
                <div className="relative h-5 w-5 overflow-hidden rounded-full mr-1">
                  <Image
                    src={author.image || "/placeholder.svg"}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <User className="mr-1 h-3 w-3" />
              )}
              <span>{author.name}</span>
            </div>
          )}
        </div>

        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <div
                key={index}
                className="flex items-center text-xs text-primary/70"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </div>
            ))}
            {tags.length > 3 && (
              <div className="text-xs text-primary/70">
                +{tags.length - 3} more
              </div>
            )}
          </div>
        )}

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary hover:text-gold transition-colors group"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
