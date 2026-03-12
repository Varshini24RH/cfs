"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  // Founder — Satish Bachala bodybuilder photos
  { src: "/stock/1583454110551-21f2fa2afe61.jpg", alt: "Satish Bachala — competition posing", category: "Founder" },
  { src: "/stock/1605296867424-35fc25c9212a.jpg", alt: "Satish Bachala — heavy deadlift", category: "Founder" },
  { src: "/stock/1581009146145-b5ef050c2e1e.jpg", alt: "Satish Bachala — barbell training", category: "Founder" },
  { src: "/stock/1532029837206-abbe2b7620e3.jpg", alt: "Satish Bachala — muscle-up", category: "Founder" },
  { src: "/stock/1541534741688-6078c6bfb5c5.jpg", alt: "Satish Bachala — gym lifestyle", category: "Founder" },
  // Training
  { src: "/stock/1534438327276-14e5300c3a48.jpg", alt: "Gym floor", category: "Equipment" },
  { src: "/stock/1526401485004-46910ecc8e51.jpg", alt: "Strength training", category: "Training" },
  { src: "/stock/1593079831268-3381b0db4a77.jpg", alt: "Gym interior", category: "Equipment" },
  { src: "/stock/1541534741688-6078c6bfb5c5.jpg", alt: "CrossFit workout", category: "Training" },
  { src: "/stock/1571019614242-c5c5dee9f50b.jpg", alt: "Personal training", category: "Training" },
  { src: "/stock/1570829460005-c840387bb1ca.jpg", alt: "Gym equipment", category: "Equipment" },
  { src: "/stock/1517836357463-d25dfeac3438.jpg", alt: "Intense workout", category: "Training" },
  { src: "/stock/1544367567-0f2fcb009e0b.jpg", alt: "Functional training", category: "Training" },
  { src: "/stock/1574680096145-d05b474e2155.jpg", alt: "Community event", category: "Community" },
  { src: "/stock/1549719386-74dfcbf7dbed.jpg", alt: "Boxing session", category: "Training" },
  { src: "/stock/1506126613408-eca07ce68773.jpg", alt: "Yoga class", category: "Community" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/stock/1534438327276-14e5300c3a48.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-[center_7%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-12 sm:pt-20">
          <p
            className="text-xs sm:text-base tracking-[0.22em] sm:tracking-[0.3em] uppercase text-primary font-medium mb-4 sm:mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Inside CFS9
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-none font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <span className="text-accent">Gallery</span>
          </h1>
          <div className="mx-auto w-28 h-1 bg-primary rounded-full mb-6" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg ${
                  i % 3 === 0 ? "h-[350px]" : i % 3 === 1 ? "h-[280px]" : "h-[400px]"
                }`}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
              src={images[lightbox]?.src}
              alt={images[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
