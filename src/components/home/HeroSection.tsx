"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/barbell.png"
        alt="CFS9 Gym — Weight Plates"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlays — lighter to keep image visible like reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Welcome Tag */}
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-medium mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Welcome to CFS
          </p>

          {/* Main Title */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Stronger Every Day
          </h1>
          <div className="mt-4 mx-auto w-28 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          CFS9 – Where Fitness Meets Luxury.{" "}
          Every workout here is more than just exercise — it&apos;s a step toward a{" "}
          <span className="text-white font-semibold">stronger, sharper, and more confident you</span>.{" "}
          Train with purpose, recover with care, and live the lifestyle you deserve.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" variant="primary" size="lg" arrow>
            Start Your Journey
          </Button>
          <Button href="/about" variant="outline" size="lg">
            <Dumbbell className="w-4 h-4 mr-1" />
            Workout
          </Button>
        </motion.div>
      </div>


    </section>
  );
}
