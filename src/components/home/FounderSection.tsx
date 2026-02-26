"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, Dumbbell } from "lucide-react";

const highlights = [
  { icon: Trophy, value: "12+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Athletes Coached" },
  { icon: Dumbbell, value: "CSCS", label: "Certified Coach" },
];

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[520px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1583500178450-e59f4edce10b?w=800&q=80"
                alt="Satish Bachala — Founder of CFS9"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-primary text-white px-5 py-3 rounded-lg shadow-2xl shadow-primary/20">
              <p
                className="text-2xl font-bold tracking-wider"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                EST. 2014
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
              Meet the Founder
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold uppercase leading-tight text-white"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Satish{" "}
              <span className="text-primary">Bachala</span>
            </h2>
            <div className="mt-2 w-20 h-1 bg-primary rounded-full" />

            <p className="mt-6 text-[var(--color-muted)] leading-relaxed text-lg">
              National-level powerlifter, dedicated bodybuilder, and the driving
              force behind CFS9. Satish built this gym on one belief:{" "}
              <span className="text-white font-medium">
                fitness is a craft, not a commodity.
              </span>
            </p>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              With over a decade of hands-on coaching experience, he has transformed
              hundreds of lives — from first-time gym-goers to competition-stage
              athletes. His philosophy is simple: discipline, consistency, and
              results.
            </p>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((stat) => (
                <div key={stat.label} className="text-center bg-[var(--color-surface)] rounded-lg py-4 px-2 border border-white/5">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[var(--color-muted)] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/founder"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold tracking-wider uppercase text-sm group hover:gap-3 transition-all duration-300"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Discover His Full Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
