"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CoachCardProps {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  index: number;
}

export default function CoachCard({
  name,
  role,
  specialization,
  experience,
  image,
  index,
}: CoachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-lg bg-surface border border-border hover:border-primary/40 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
          style={{ objectPosition: "50% 5%" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
      </div>

      {/* Info */}
      <div className="relative z-20 p-5 -mt-12">
        <h3
          className="text-xl font-bold text-white tracking-wider uppercase"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          {name}
        </h3>
        <p className="text-primary text-sm font-semibold mt-1">{role}</p>
        <div className="mt-3 flex items-center gap-4 text-xs text-muted">
          <span className="bg-surface-light px-2 py-1 rounded">{specialization}</span>
          <span className="bg-surface-light px-2 py-1 rounded">{experience}</span>
        </div>
      </div>
    </motion.div>
  );
}
