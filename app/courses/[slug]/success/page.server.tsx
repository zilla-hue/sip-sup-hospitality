// This is a server component file that exports the generateStaticParams function
// for the success page dynamic route

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
