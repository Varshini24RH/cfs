"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { ChevronDown, Dumbbell, Users, MapPin, Trophy } from "lucide-react";

/* ── Real gym photos that auto-rotate ── */
const HERO_SLIDES = [
  { src: "/hero-bg.jpg",            top: "PUSH YOUR",    bottom: "LIMITS" },
  { src: "/barbell.png",            top: "FORGE YOUR",   bottom: "STRENGTH" },
  { src: "/@12340691a-Edit.jpg",    top: "TRAIN LIKE A", bottom: "CHAMPION" },
  { src: "/@12340679a-Edit.jpg",    top: "UNLEASH YOUR", bottom: "POWER" },
  { src: "/@12340762a-Edit.jpg",    top: "BUILD YOUR",   bottom: "LEGACY" },
];

/* ── Animated counting number ── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, 2000 / steps);
    return () => clearInterval(id);
  }, [started, target]);

  return <span>{started ? count.toLocaleString() : "0"}{suffix}</span>;
}

/* ── Single stat block ── */
function GymStat({
  icon: Icon, value, suffix, label, delay,
}: {
  icon: React.ElementType; value: number; suffix: string; label: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/[0.06] hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-oswald)" }}>
          <CountUp target={value} suffix={suffix} />
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted">{label}</div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */
export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background image carousel with Ken Burns zoom ── */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={current}
          src={slide.src}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-[60%_55%]"
        />
      </AnimatePresence>

      {/* ── Top fade into navbar ── */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background via-background/70 to-transparent z-[2] pointer-events-none" />

      {/* ── Dark overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-[2]" />

      {/* ── Diagonal red accent stripe ── */}
      <div className="absolute -left-20 top-0 w-[500px] h-full bg-primary/[0.04] skew-x-[-12deg] z-[3]" />

      {/* ── Red energy blurs ── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] z-[3] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[100px] z-[3] animate-float" style={{ animationDelay: "2s" }} />

      {/* ── Content ── */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-28">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Dumbbell className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium" style={{ fontFamily: "var(--font-oswald)" }}>
                #1 Gym in Hyderabad
              </span>
            </span>
          </motion.div>

          {/* Rotating tagline synced with photo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                <span className="text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                  {slide.top}
                </span>
                <br />
                <span className="text-primary drop-shadow-[0_4px_30px_rgba(220,38,38,0.3)]">
                  {slide.bottom}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Weight-plate divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 flex items-center gap-2 origin-center lg:origin-left"
          >
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-3 h-3 rounded-full border-2 border-primary" />
            <div className="w-8 h-1 bg-primary/50 rounded-full" />
          </motion.div>

          {/* Brand + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 tracking-wide" style={{ fontFamily: "var(--font-oswald)" }}>
              CFS9 <span className="text-lg sm:text-xl md:text-2xl font-light text-white/50">— Central Fitness Station</span>
            </p>
            <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              Premium equipment. Expert coaches. Real results.{" "}
              <span className="text-white font-medium">Elite training across Kondapur &amp; Madhapur.</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <Button href="https://wa.me/918886564999" variant="primary" size="lg" arrow className="animate-pulse-glow">
              Start Training Today
            </Button>
            <Button href="/programs" variant="outline" size="lg" arrow>
              View Programs
            </Button>
          </motion.div>

          {/* Gym stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <GymStat icon={Users}    value={10000} suffix="+" label="Members"  delay={1.4} />
            <GymStat icon={Dumbbell} value={50}    suffix="+" label="Trainers" delay={1.5} />
            <GymStat icon={MapPin}   value={5}     suffix=""  label="Branches" delay={1.6} />
            <GymStat icon={Trophy}   value={15}    suffix="+" label="Years"    delay={1.7} />
          </div>
        </div>
      </div>

      {/* ── Carousel dots ── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 z-30 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-3 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        role="button"
        aria-label="Scroll down"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
