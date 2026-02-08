import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Engineering{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              Principles.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                I approach software engineering with a strong emphasis on scalability, security, and long-term maintainability. My work focuses on making systems reliable under real-world constraints while enabling teams to evolve them confidently over time.
              </blockquote>
              <div className="text-sm text-muted-foreground">
                How I work:
                </div>
                 <ul className="space-y-4 text-gray-300 text-lg max-w-3xl mx-auto mt-5 px-4 pr-6">
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <span>Design scalable, secure, and maintainable systems</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <span>Build cloud-native platforms with clear ownership and boundaries</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <span>Prioritize performance, observability, and reliability from day one</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <span>Write clean, testable, and future-proof code</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <span>Balance rapid delivery with long-term architecture</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-1">•</span>
          <span>Communicate clearly across engineering, product, and stakeholders</span>
        </li>
      </ul>
              
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
