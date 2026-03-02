"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Certified elite trainers",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    description: "Our coaches hold internationally recognized certifications.",
  },
  {
    title: "Result-oriented training programs",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    description: "Every program is designed around measurable outcomes.",
  },
  {
    title: "Limited members for personalized attention",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    description: "Small batches ensure every member gets individual focus.",
  },
  {
    title: "Premium equipment and clean facilities",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    description: "World-class machines in a spotless, motivating environment.",
  },
  {
    title: "Multiple prime locations",
    image:
      "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=800&q=80",
    description: "Conveniently located branches across the city.",
  },
  {
    title: "Transformation-focused approach",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    description: "We measure success by the transformations we deliver.",
  },
];

const COUNT = features.length;

export default function WhyChooseSection() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<"idle" | "bulletin" | "settle" | "auto">(
    "idle",
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const strip = useAnimation();

  /* measure one-slide width in px */
  const slideWidth = useCallback(
    () => containerRef.current?.offsetWidth ?? 0,
    [],
  );

  /* ── detect when carousel enters viewport ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("bulletin");
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── phase 1 — bulletin: one smooth continuous scroll ── */
  useEffect(() => {
    if (phase !== "bulletin") return;
    let cancelled = false;

    const run = async () => {
      const w = slideWidth();
      if (!w) return;

      /* place strip one slide-width to the right (off-screen) */
      strip.set({ x: w });

      /* fast sweep: right → slide 0 → 1 → 2 → 3 → 4 → 5, then stop */
      await strip.start({
        x: [w, 0, -w, -2 * w, -3 * w, -4 * w, -5 * w],
        transition: {
          duration: 2,
          ease: "linear",
          times: [0, 0.14, 0.28, 0.43, 0.57, 0.71, 1],
        },
      });

      if (cancelled) return;
      /* already on last slide (5), settle there then start auto from 5 */
      setCurrent(COUNT - 1);
      setPhase("settle");
    };
    run();

    return () => {
      cancelled = true;
    };
  }, [phase, strip, slideWidth]);

  /* ── phase 2 — settle on current slide for 1 s ── */
  useEffect(() => {
    if (phase !== "settle") return;
    const id = setTimeout(() => setPhase("auto"), 1000);
    return () => clearTimeout(id);
  }, [phase]);

  /* ── phase 3 — auto-advance one-by-one every 3 s ── */
  useEffect(() => {
    if (phase !== "auto") return;
    const id = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % COUNT;
        const w = slideWidth();
        strip.start({
          x: -(next * w),
          transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [phase, strip, slideWidth]);

  /* jump to a dot */
  const goTo = (i: number) => {
    setCurrent(i);
    strip.start({
      x: -(i * slideWidth()),
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    });
  };

  return (
    <section
      className="py-24 md:py-32 bg-background overflow-hidden"
      id="why-cfs9"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ──── Left — text (slides in from the LEFT) ──── */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              The CFS9 Difference
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight mb-4"
            >
              Why Choose <span className="text-primary">CFS9</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="w-16 h-1 bg-primary rounded-full mb-8"
            />

            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-muted text-lg leading-relaxed"
            >
              We don't just offer a gym — we offer a complete transformation
              experience, backed by certified coaches and a results-first
              culture.
            </motion.p>
          </div>

          {/* ──── Right — news-bulletin carousel ──── */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
            ref={sectionRef}
          >
            {/* sizing reference — never moves */}
            <div ref={containerRef} className="absolute inset-0 pointer-events-none" />

            {/* film-strip — slides via translateX in px */}
            <motion.div
              animate={strip}
              className="absolute top-0 left-0 h-full flex will-change-transform"
              style={{ width: `${COUNT * 100}%` }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className="relative shrink-0 h-full"
                  style={{ width: `${100 / COUNT}%` }}
                >
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover"
                  />
                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  {/* caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-white text-xl sm:text-2xl font-bold uppercase font-heading">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base pl-9">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary scale-110"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
