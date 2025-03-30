// This is a server component file that exports the generateStaticParams function
// for the [slug] dynamic route and its nested routes

// Sample course slugs for static generation
const courseSlugs = [
  "hotel-operations-management",
  "front-desk-operations",
  "housekeeping-management",
  "food-and-beverage-service",
  "hospitality-marketing",
];

export function generateStaticParams() {
  return courseSlugs.map((slug) => ({
    slug,
  }));
}
