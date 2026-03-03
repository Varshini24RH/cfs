"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Founder", "Training", "Equipment", "Community", "Events"] as const;

const images = [
  // Founder — Satish Bachala bodybuilder photos
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", alt: "Satish Bachala — competition posing", category: "Founder" },
  { src: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800&q=80", alt: "Satish Bachala — heavy deadlift", category: "Founder" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", alt: "Satish Bachala — physique posing", category: "Founder" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80", alt: "Satish Bachala — barbell training", category: "Founder" },
  { src: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&q=80", alt: "Satish Bachala — muscle-up", category: "Founder" },
  { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80", alt: "Satish Bachala — gym lifestyle", category: "Founder" },
  // Training
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Gym floor", category: "Equipment" },
  { src: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=800&q=80", alt: "Strength training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80", alt: "Gym interior", category: "Equipment" },
  { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80", alt: "CrossFit workout", category: "Training" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", alt: "Personal training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=800&q=80", alt: "Gym equipment", category: "Equipment" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", alt: "Intense workout", category: "Training" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", alt: "Functional training", category: "Training" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80", alt: "Community event", category: "Community" },
  { src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80", alt: "Boxing session", category: "Training" },
  { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80", alt: "Yoga class", category: "Community" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_7%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-medium mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Inside CFS9
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <span className="text-accent">Gallery</span>
          </h1>
          <div className="mx-auto w-28 h-1 bg-primary rounded-full mb-6" />
          <button 
            onClick={() => document.querySelector('main')?.children[1]?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Filter */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "bg-surface text-muted hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i % 3 === 0 ? "h-[350px]" : i % 3 === 1 ? "h-[280px]" : "h-[400px]"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white text-sm font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={filtered[lightbox]?.src.replace("w=800", "w=1600")}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
