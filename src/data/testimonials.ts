// src/data/testimonials.ts
export interface Testimonial {
  id?: number;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We’re so fortunate to have the Third Place Books Literary Foundation in our community. Nothing brings joy like getting brand new books into the hands of aspiring readers, and the foundation makes this possible. We’re grateful for a donation of over 300 bright and engaging books that are now being read, reread, and loved by Team Read participants and their families.",
    author: "Team Read",
    role: "Local community organization",
    image: "/images/testimonials/team-read.jpg",
  },
    {
    id: 2,
    quote: "This foundation has made a tremendous impact on our community. The work they do is truly inspiring.",
    author: "Sarah Johnson",
    role: "Community Leader",
    company: "Seattle Public Schools",
    // image: "/images/testimonials/sarah-johnson.jpg",
  },
];

export const featuredTestimonials = testimonials.slice(0, 2);