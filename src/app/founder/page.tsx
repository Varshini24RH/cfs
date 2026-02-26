"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Dumbbell, Users, Target, Award, Star, Sparkles } from "lucide-react";
import Button from "@/components/Button";

const milestones = [
  {
    icon: Dumbbell,
    title: "Personal Trainer to Entrepreneur",
    description:
      "Transformed from a personal trainer to a successful fitness entrepreneur and brand builder.",
  },
  {
    icon: Award,
    title: "Organised S9 Classic Expo",
    description:
      "Organized the grand S9 Classic The Ultimate Fitness Expo in March 2023, drawing attention from the Indian fitness community.",
  },
  {
    icon: Trophy,
    title: "Welcoming a Legend",
    description:
      "Hosted Ronnie Coleman, 8-time Mr. Olympia champion, at CFS9 Gym in December 2023 — a proud moment for the brand and its members.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function FounderPage() {
  return (
    <main>
      {/* === Hero === */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1583500178450-e59f4edce10b?w=1920&q=80"
            alt="Satish Bachala"
            fill
            priority
            className="object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--color-background)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                Entrepreneur | Fitness Coach | Celebrity Trainer
              </p>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-tight"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Satish{" "}
                <span className="text-primary">Bachala</span>
              </h1>
              <p className="mt-6 text-[var(--color-muted)] text-lg leading-relaxed max-w-xl">
                Meet the Visionary Behind CFS
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" size="lg" arrow>
                  Train With Satish
                </Button>
                <Button href="/coaching" variant="outline" size="lg">
                  Meet the Team
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1583500178450-e59f4edce10b?w=800&q=80"
                alt="Satish Bachala — Founder of CFS9"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p
                  className="text-white text-xl font-bold tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Satish Bachala
                </p>
                <p className="text-primary text-sm font-semibold mt-1">
                  Fitness Entrepreneur | Celebrity Trainer | Founder of CFS9
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === About the Founder === */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              About the Founder
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Satish Bachala: The Visionary Fitness Coach Behind{" "}
              <span className="text-primary">CFS9 Gym</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp} className="space-y-5 text-[var(--color-muted)] leading-relaxed">
              <p>
                Satish Bachala founded CFS9 Gym in 2008, starting his inspiring fitness
                journey in Hyderabad. He transformed his passion into a mission to help
                people live healthier, more disciplined lives. With over a decade of
                hands-on experience, Satish brings unmatched expertise to the fitness
                industry. He built CFS9 into one of Hyderabad&apos;s most luxurious and
                trusted fitness chains. His journey reflects grit, consistency, and a
                strong belief in human transformation.
              </p>
              <p>
                In a milestone moment, Satish invited legendary bodybuilder Ronnie Coleman
                to visit CFS9 Jubilee Hills. Ronnie toured the gym and worked out with
                members, proving CFS9&apos;s world-class reputation. This event strengthened
                Satish&apos;s global credibility and highlighted CFS9&apos;s elite status.
              </p>
              <p>
                Satish began as a personal trainer, coaching clients to lose weight, build
                muscle, and improve health. His client-first approach delivered real results
                and quickly earned him local recognition. He realized fitness goes beyond
                the body — it also shapes mindset and discipline. This insight led him to
                create the CFS concept.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800&q=80"
                alt="Satish Bachala — training session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Building a Luxury Fitness Brand === */}
      <section className="py-20 md:py-28 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              The Brand
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Building a Luxury Fitness Brand{" "}
              <span className="text-primary">With Purpose</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              {...fadeUp}
              className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=800&q=80"
                alt="CFS9 luxury gym interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div {...fadeUp} className="space-y-5 text-[var(--color-muted)] leading-relaxed">
              <p>
                Satish launched the CFS9 brand with elite branches in Jubilee Hills,
                Madhapur, and Kondapur. Each branch reflects luxury, scientific training,
                professional standards, and a client-focused culture. He designed CFS9
                gyms as wellness ecosystems, not just workout spaces.
              </p>
              <p>
                Satish believes fitness should become a lifestyle, not a short-term
                solution. He helps people unlock potential through structured workouts
                and personalized nutrition plans. CFS9 attracts professionals, celebrities,
                and athletes seeking transformation and expert guidance.
              </p>
              <p>
                As a fitness entrepreneur, Satish continues to raise standards in
                India&apos;s wellness industry. He leads new ventures and builds partnerships
                that reinforce CFS9&apos;s authority and trust. Satish also mentors fitness
                coaches, helping them grow and maintain high industry standards.
              </p>
              <p>
                He organized the S9 Classic Expo in 2023, drawing top fitness talent from
                across India. Satish also hosted Ronnie Coleman in 2023, marking a proud
                chapter in CFS9&apos;s journey. These milestones reflect his commitment to
                experience, authority, and global excellence in fitness.
              </p>
              <p>
                Satish ensures every gym has a customer relationship manager to enhance
                member satisfaction. He envisions CFS9 as a transformation hub where expert
                support meets luxury fitness.
              </p>
              <p className="text-white font-semibold text-lg italic border-l-4 border-primary pl-4">
                His mission: create life-changing fitness experiences in a premium,
                science-backed environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Notable Milestones === */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              Milestones
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Notable Milestones and{" "}
              <span className="text-primary">Recognition</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 text-center hover:border-primary/40 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <milestone.icon className="w-8 h-8 text-primary" />
                </div>
                <h3
                  className="text-xl font-bold text-white uppercase mb-3"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {milestone.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Celebrity Trainer & Mentor === */}
      <section className="py-20 md:py-28 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-3">
                Celebrity Trainer & Mentor
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase mb-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Coaching <span className="text-primary">Hundreds</span> of Lives
              </h2>
              <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
                <p>
                  As a celebrity fitness trainer, transformation specialist, and mentor,
                  Satish Bachala has coached hundreds of individuals, each with a unique
                  story of struggle and success. He also trains other fitness professionals,
                  helping them grow in their careers while maintaining industry standards.
                </p>
                <p>
                  His passion for continuous learning and innovation drives the quality
                  and evolution of services offered at CFS9.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
                alt="Satish Bachala — coaching athletes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* === The Vision Behind CFS9 === */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeUp}
              className="flex items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-glow" />
                <div className="absolute inset-4 bg-[var(--color-surface)] rounded-full flex items-center justify-center border border-[var(--color-border)]">
                  <div className="text-center">
                    <p
                      className="text-4xl md:text-5xl font-bold text-primary"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      CFS9
                    </p>
                    <p className="text-[var(--color-muted)] text-xs tracking-[0.2em] uppercase mt-1">
                      Gym
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <p className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-3">
                CFS9 Gym
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase mb-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                The Vision Behind{" "}
                <span className="text-primary">CFS9</span>
              </h2>
              <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Satish envisions CFS9 as more than just a gym — it&apos;s a lifestyle
                  transformation hub. CFS9 focuses on functional fitness, luxury comfort,
                  and consistent performance tracking, treating every member as a top
                  priority.
                </p>
                <p>
                  Whether you want to lose weight, gain strength, recover from stress,
                  or adopt a healthier lifestyle, CFS9 supports you with a personalized
                  and premium experience.
                </p>
                <p>
                  Satish also ensures the presence of dedicated customer relationship
                  managers at every center, setting a new benchmark for member satisfaction
                  in the Indian fitness industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Quote === */}
      <section className="py-20 md:py-28 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug italic"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              &ldquo;I built CFS9 with one mission — to create a space where people
              can truly transform their lives with the support of expert trainers,
              world-class facilities, and a luxury wellness environment.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p
                className="text-primary font-bold text-lg uppercase tracking-wider"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Satish Bachala
              </p>
              <p className="text-[var(--color-muted)] text-sm mt-1">
                Fitness Entrepreneur | Celebrity Trainer | Founder of CFS9 Gym Hyderabad
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] to-[var(--color-background)]/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <p
              className="text-primary font-bold text-lg uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Luxury. Discipline. Transformation.
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Ready to Train With{" "}
              <span className="text-primary">Satish?</span>
            </h2>
            <p className="text-[var(--color-muted)] text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation and experience the CFS9 difference.
              Your transformation starts with a single decision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" arrow>
                Book Free Session
              </Button>
              <Button href="/programs" variant="outline" size="lg">
                View Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
