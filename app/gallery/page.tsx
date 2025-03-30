"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";

// Gallery categories and images
const categories = [
  { id: "all", name: "All" },
  { id: "hotels", name: "Hotels & Resorts" },
  { id: "restaurants", name: "Restaurants" },
  { id: "events", name: "Events & Conferences" },
  { id: "amenities", name: "Amenities" },
];

const galleryItems = [
  {
    id: 1,
    title: "Luxury Resort Lobby",
    description:
      "Modern luxury resort lobby with elegant furnishings and natural light.",
    category: "hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Fine Dining Restaurant",
    description:
      "Upscale restaurant with sophisticated ambiance and gourmet cuisine.",
    category: "restaurants",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Conference Hall Setup",
    description:
      "Professional conference hall arrangement for corporate events.",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Suite",
    description:
      "Spacious luxury suite with modern amenities and stunning views.",
    category: "hotels",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Poolside Bar",
    description:
      "Elegant poolside bar offering refreshing beverages in a relaxing setting.",
    category: "amenities",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Rooftop Restaurant",
    description: "Scenic rooftop restaurant with panoramic city views.",
    category: "restaurants",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Banquet Hall",
    description:
      "Elegant banquet hall setup for weddings and special occasions.",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Spa Treatment Room",
    description:
      "Tranquil spa treatment room designed for ultimate relaxation.",
    category: "amenities",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Boutique Hotel Exterior",
    description:
      "Charming boutique hotel exterior with distinctive architectural elements.",
    category: "hotels",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Casual Dining Area",
    description:
      "Comfortable casual dining area with warm, inviting atmosphere.",
    category: "restaurants",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Executive Boardroom",
    description:
      "Professional executive boardroom equipped with modern technology.",
    category: "events",
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Infinity Pool",
    description: "Stunning infinity pool with breathtaking ocean views.",
    category: "amenities",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Our Gallery
              </h1>
              <p className="text-lg text-white/90">
                Explore our portfolio of exceptional hospitality projects and
                properties
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "border-primary/20 text-primary hover:bg-primary/10"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <div
                    className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={
                          item.image || "/placeholder.svg?height=256&width=384"
                        }
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>

              {selectedImage && (
                <>
                  <div className="relative h-[80vh] w-[80vw] max-w-5xl overflow-hidden rounded-lg">
                    <Image
                      src={
                        galleryItems.find((item) => item.id === selectedImage)
                          ?.image || ""
                      }
                      alt={
                        galleryItems.find((item) => item.id === selectedImage)
                          ?.title || ""
                      }
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center text-white">
                    <h3 className="text-xl font-bold">
                      {
                        galleryItems.find((item) => item.id === selectedImage)
                          ?.title
                      }
                    </h3>
                    <p className="text-white/80">
                      {
                        galleryItems.find((item) => item.id === selectedImage)
                          ?.description
                      }
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
