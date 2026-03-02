"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Dumbbell,
  User,
  TrendingDown,
  Zap,
  Shield,
  Laptop,
  Salad,
} from "lucide-react";

const services = [
  { icon: Dumbbell, label: "Gym Access", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
  { icon: User, label: "Personal Training", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80" },
  { icon: TrendingDown, label: "Weight Loss Programs", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80" },
  { icon: Zap, label: "Strength & Conditioning", image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=400&q=80" },
  { icon: Shield, label: "Boxing & Functional Training", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80" },
  { icon: Laptop, label: "Online Coaching", image: "https://images.unsplash.com/photo-1609899517237-354fba8d18c5?w=400&q=80" },
  { icon: Salad, label: "Nutrition Guidance", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-black/30">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-950/10" />
      
      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl opacity-15 pointer-events-none"
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/3 w-36 h-36 bg-primary/8 rounded-full blur-3xl opacity-20 pointer-events-none"
      />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
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
            className="font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
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

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, label, image }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col items-center gap-4 rounded-xl border border-white/8 hover:border-primary/50 transition-all duration-300 overflow-hidden h-full min-h-96"
            >
              {/* Full background image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40 group-hover:via-background/50 group-hover:to-background/30 transition-colors duration-300" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center gap-4 p-6 h-full justify-end">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Label */}
                <p
                  className="text-white font-semibold text-center text-sm sm:text-base leading-tight"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {label}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Custom plans card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.08 }}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-red-500/50 bg-red-950/20 col-span-2 sm:col-span-1 min-h-96 h-full"
          >
            <p className="text-red-500 font-bold text-center text-2xl sm:text-3xl leading-snug"
               style={{ fontFamily: "var(--font-oswald)" }}>
              CFS9
            </p>
            <p className="text-muted text-sm text-center">
              Complete Fitness Solutions
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
