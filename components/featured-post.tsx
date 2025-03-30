"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Tag, Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    image?: string;
  };
  date: string;
  readTime: string;
  slug: string;
  category: string;
  tags?: string[];
}

export function FeaturedPost({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  slug,
  category,
  tags = [],
}: FeaturedPostProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-2">
        <div
          className="relative h-64 overflow-hidden md:h-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent md:hidden" />

          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            <Badge className="bg-gold text-primary font-medium shadow-sm">
              {category}
            </Badge>
            <Badge className="bg-white text-primary font-medium shadow-sm">
              Featured Article
            </Badge>
          </div>
        </div>

        <div className="relative p-6 md:p-8">
          {/* Save button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? "Unsave article" : "Save article"}
          >
            <Bookmark
              className={cn(
                "h-5 w-5 transition-colors",
                isSaved ? "fill-primary text-primary" : "text-muted-foreground"
              )}
            />
          </button>

          <Link href={`/blog/${slug}`} className="group">
            <h2 className="mb-4 text-2xl font-bold text-primary hover:text-primary/80 transition-colors md:text-3xl">
              {title}
            </h2>
          </Link>
          <p className="mb-6 text-muted-foreground">{excerpt}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center text-xs bg-primary/5 hover:bg-primary/10 text-primary/70 px-2 py-1 rounded-full transition-colors"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Link>
              ))}
            </div>
          )}

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              {author.image ? (
                <div className="relative h-8 w-8 overflow-hidden rounded-full mr-2">
                  <Image
                    src={author.image || "/placeholder.svg"}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <User className="mr-2 h-4 w-4 text-primary" />
              )}
              <span>{author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-primary" />
              <span>{readTime}</span>
            </div>
          </div>

          <Button
            asChild
            className="group bg-gold hover:bg-gold/90 text-primary"
          >
            <Link href={`/blog/${slug}`}>
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
