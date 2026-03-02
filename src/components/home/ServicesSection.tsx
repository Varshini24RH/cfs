"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  User,
  TrendingDown,
  Zap,
  Shield,
  Salad,
} from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    label: "Gym Access",
    description: "State-of-the-art equipment and premium facilities for every fitness level.",
    skills: ["Free Weights", "Machines", "Cardio Zone"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&q=85&fit=crop",
  },
  {
    icon: User,
    label: "Personal Training",
    description: "One-on-one guidance from certified trainers to maximize your results.",
    skills: ["Custom Workouts", "Form Correction", "Goal Setting"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&q=85&fit=crop",
  },
  {
    icon: TrendingDown,
    label: "Weight Loss Programs",
    description: "Science-backed programs designed to help you shed fat and keep it off.",
    skills: ["HIIT Training", "Calorie Planning", "Body Composition"],
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&h=800&q=85&fit=crop",
  },
  {
    icon: Zap,
    label: "Strength & Conditioning",
    description: "Build raw power and functional strength with progressive overload training.",
    skills: ["Powerlifting", "Olympic Lifts", "Core Strength"],
    image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=1200&h=800&q=85&fit=crop",
  },
  {
    icon: Shield,
    label: "Boxing & Functional Training",
    description: "High-intensity boxing workouts paired with functional movement patterns.",
    skills: ["Pad Work", "Bag Training", "Footwork"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=800&q=85&fit=crop",
  },
  {
    icon: Salad,
    label: "Nutrition Guidance",
    description: "Tailored meal plans and dietary advice to fuel your transformation.",
    skills: ["Meal Plans", "Macro Tracking", "Supplements"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=800&q=85&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-black/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-950/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-muted text-lg max-w-2xl mx-auto"
          >
            A complete range of fitness solutions designed to meet diverse goals.
          </motion.p>
        </div>

        {/* Services — 1 per row, full width landscape cards */}
        <div className="flex flex-col gap-8">
          {services.map(({ icon: Icon, label, description, skills, image }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring" as const,
                stiffness: 50,
                damping: 20,
              }}
              className="group relative w-full rounded-2xl overflow-hidden border border-white/[0.06] hover:border-primary/50 transition-all duration-500 cursor-pointer"
            >
              {/* Full-width landscape image */}
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] overflow-hidden">
                <img
                  src={image}
                  alt={label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay — only at the bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent group-hover:from-black/75 group-hover:via-black/20 transition-all duration-500" />

                {/* Icon badge — top left */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-primary/40 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/70 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Name + description on the photo — bottom left */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3
                    className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight drop-shadow-lg mb-2"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {label}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base max-w-2xl leading-relaxed drop-shadow-md">
                    {description}
                  </p>
                </div>

                {/* Skills tags — appear on hover */}
                <div className="absolute bottom-6 right-5 sm:right-8 flex flex-wrap justify-end gap-2.5 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-black/60 backdrop-blur-md text-primary border border-primary/30"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
