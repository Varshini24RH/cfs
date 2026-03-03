"use client";

import Button from "@/components/Button";
import { Dumbbell, Target, Users, Trophy } from "lucide-react";

const values = [
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    description:
      "Competition-grade power racks, Olympic platforms, calibrated plates, and premium cardio machines from Rogue, Hammer Strength, and Life Fitness.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every program is built on evidence-based training. We track progress, adjust protocols, and ensure you see measurable improvement.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "CFS9 isn't just a gym — it's a tribe of like-minded athletes who motivate, support, and push each other to be better.",
  },
  {
    icon: Trophy,
    title: "Champion Mindset",
    description:
      "We've produced state and national-level competitors in powerlifting, bodybuilding, and CrossFit. Excellence is our standard.",
  },
];

const timeline = [
  { year: "2014", event: "CFS9 founded in Kondapur with a 3,000 sq ft facility" },
  { year: "2016", event: "Expanded to 8,000 sq ft with dedicated CrossFit & cardio zones" },
  { year: "2018", event: "Launched CFS9 Madhapur — our second premium branch" },
  { year: "2020", event: "Introduced online coaching & home workout programs" },
  { year: "2022", event: "500+ active members milestone & competition coaching program" },
  { year: "2024", event: "Full facility renovation with world-class equipment upgrade" },
];

export default function AboutPage() {
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
            Our Story
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            About <span className="text-accent">CFS9</span>
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

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
                Forged in Iron,{" "}
                <span className="text-accent">Built on Passion</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  CFS9 — Central Fitness Station — was founded on a simple belief:
                  <span className="text-foreground font-medium"> Fitness should deliver results, not promises.</span>
                </p>
                <p>
                  We focus on structured training, scientific programming, and personalised
                  guidance to help members transform their health, confidence, and lifestyle.
                  What started in Kondapur in 2014 has grown into two premium branches
                  serving 500+ members across Hyderabad.
                </p>
                <p>
                  Our premium facilities and expert trainers create an environment where
                  fitness goals become achievable and sustainable.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80"
                alt="CFS9 gym interior"
                className="rounded-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-accent text-white font-heading text-2xl font-bold px-6 py-3 rounded">
                10+ YEARS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              What Drives Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
              Vision &amp; <span className="text-accent">Mission</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-white/5 rounded-xl p-8 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Our Vision</h3>
              <p className="text-muted leading-relaxed">
                To become Hyderabad&apos;s most trusted and result-driven premium fitness brand.
              </p>
            </div>
            <div className="bg-surface border border-white/5 rounded-xl p-8 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-5">
                <Dumbbell className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-3">Our Mission</h3>
              <p className="text-muted leading-relaxed">
                To empower individuals through disciplined training, expert coaching, and customised fitness programs that deliver real, long-term results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
                The Man Behind CFS9
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
                Meet <span className="text-accent">Satish Bachala</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  CFS9 was founded by Satish Bachala — a national-level powerlifter
                  and dedicated bodybuilder who turned his passion for iron into
                  Hyderabad&apos;s premier fitness destination.
                </p>
                <p>
                  With 12+ years of coaching experience, CSCS and IFBB certifications,
                  and over 1000 athletes trained, Satish leads by example — both on
                  the competition stage and on the gym floor.
                </p>
              </div>
              <div className="mt-6">
                <Button href="/founder" arrow>
                  His Full Story
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[260px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                  alt="Satish Bachala — bodybuilder posing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-[260px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&q=80"
                  alt="Satish Bachala — training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-[260px] rounded-lg overflow-hidden col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
                  alt="Satish Bachala — gym lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
              Our <span className="text-accent">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background border border-white/5 rounded-lg p-6 text-center hover:border-accent/30 transition-colors"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase mb-2">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              Our Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
              The CFS9 <span className="text-accent">Timeline</span>
            </h2>
          </div>
          <div className="relative border-l-2 border-accent/30 ml-4">
            {timeline.map((item) => (
              <div key={item.year} className="mb-10 ml-8 relative">
                <div className="absolute -left-[2.65rem] top-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
                <span className="text-accent font-heading font-bold text-xl">
                  {item.year}
                </span>
                <p className="text-muted mt-1">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Be Part of the CFS9 Story
          </h2>
          <p className="text-muted mb-8">
            Join a community that has been pushing limits for over a decade.
          </p>
          <Button href="/contact" size="lg" arrow>
            Join CFS9 Today
          </Button>
        </div>
      </section>
    </main>
  );
}
