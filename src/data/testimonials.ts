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
    quote: "I’ve been lucky enough to watch Third Place Books work its magic first-hand. Trust me: There’s nothing quite like the moment a child hugs a new book to her heart like the friend she didn’t know she needed. Every time it happens, it’s a little miracle.",
    author: "Katherine Applegate",
    role: "Author",
    image: "/images/testimonials/katherine-applegate.jpg",
  },
  {
    id: 2,
    quote: "Gifting books to children enhances their self-confidence, empathy and imagination. It is so joyful to see a child, their eyes bright, hugging a book, and realizing “This book is mine!” Third Place Books Literary Foundation, thank you for impacting lives, inspiring dreams, and supporting literacy within our community.",
    author: "Jewell Parker Rhodes",
    role: "Author",
    image: "/images/testimonials/jewell-parker-rhodes.jpg",
  },
  {
    id: 3,
    quote: "We’re so fortunate to have the Third Place Books Literary Foundation in our community. Nothing brings joy like getting brand new books into the hands of aspiring readers, and the foundation makes this possible. We’re grateful for a donation of over 300 bright and engaging books that are now being read, reread, and loved by Team Read participants and their families.",
    author: "Team Read",
    role: "Local community organization",
    image: "/images/testimonials/team-read.jpg",
  },
];

export const featuredTestimonials = testimonials.slice(0, 2);