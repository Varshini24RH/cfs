"use client";

import CoachCard from "@/components/CoachCard";
import Button from "@/components/Button";

const coaches = [
  {
    name: "Akshay",
    role: "Senior Fitness Trainer — Level 3",
    specialization: "Strength & Conditioning",
    experience: "7+ Years",
    image: "/akshay.jpg",
    bio: "ACE CPT certified and Nutrition & Exercise Correction Specialist. Akshay specialises in competition prep, chronic conditions, and high-performance functional training. His evidence-based programming pushes athletes to new peaks.",
    rotateImage: true,
  },
  {
    name: "Vidya Yates",
    role: "Senior Fitness Trainer — Level 3",
    specialization: "Nutrition & Transformation",
    experience: "10+ Years",
    image: "/vidya-yates.jpg",
    bio: "INFS-certified Nutrition & Fitness Coach with over a decade of experience. Vidya specialises in weight management, PCOD, hypertension, and full-body transformation for clients of all fitness levels.",
    rotateImage: true,
  },
  {
    name: "Mahesh Kumar",
    role: "Fitness Trainer — Level 2",
    specialization: "Functional Training",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=500&q=80",
    bio: "BFY Certified Trainer and Nutrition Advisor. Mahesh focuses on functional training, injury rehab, and strength conditioning. He builds sustainable programs tailored to individual goals and special populations.",
  },
  {
    name: "Mahender",
    role: "Fitness Trainer — Level 2",
    specialization: "Injury Rehab & Exercise Correction",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80",
    bio: "BFY Certified Trainer with expertise in exercise correction, special populations, and rehabilitation. Mahender brings structured programming for clients managing diabetics, thyroid, PCOD, and obesity.",
  },
  {
    name: "Ajay",
    role: "Fitness Trainer — Level 2",
    specialization: "CrossFit & Sports Nutrition",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
    bio: "BFY Certified Trainer skilled in CrossFit, sports nutrition, and workload management. Ajay works extensively with clients dealing with lower back issues, injury rehab, PCOD, and obesity for long-term results.",
  },
  {
    name: "N. Surya Prakash",
    role: "Fitness Trainer — Level 2",
    specialization: "Nutrition & Kettlebell Training",
    experience: "5+ Years",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80",
    bio: "ProPower Fitness Academy certified trainer, Nutrition Advisor, and Kettlebell-EKFA specialist. Surya excels in competition prep, carbs manipulation, and rehab & mobility — with a strong focus on clients managing PCOD, diabetics, thyroid, and injury recovery.",
  },
];

export default function CoachingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/coaching-hero.jpg"
          alt="CFS9 Coaching Team"
          className="absolute inset-0 w-full h-full object-cover object-[center_7%]"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-medium mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Elite Training Staff
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            Our <span className="text-accent">Coaches</span>
          </h1>
          <div className="mx-auto w-28 h-1 bg-primary rounded-full mb-6" />
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every champion needs a great coach. Ours have the experience, certifications, and passion to get you there.
          </p>
        </div>
      </section>

      {/* Coach Grid */}
      <section className="py-20 md:py-28 relative -mt-20">
        {/* Fade continuation from hero */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Intro Section */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              Meet Your Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6" style={{ fontFamily: "var(--font-oswald)" }}>
              Certified. <span className="text-primary">Experienced.</span> Dedicated.
            </h2>
            <button 
              onClick={() => document.getElementById('coaches-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Scroll to coaches"
            >
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="coaches-grid">
            {coaches.map((coach, index) => (
              <div key={coach.name} className="flex flex-col">
                <CoachCard {...coach} index={index} />
                <p className="text-muted text-sm mt-4 leading-relaxed px-1">
                  {coach.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Train With the Best
          </h2>
          <p className="text-muted mb-8">
            Book a free trial session and experience CFS9 coaching first-hand.
          </p>
          <Button href="/contact" size="lg" arrow>
            Book Free Trial
          </Button>
        </div>
      </section>
    </main>
  );
}
