import { Metadata } from "next";
import CoachCard from "@/components/CoachCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Coaching | CFS9 — Central Fitness Station",
  description:
    "Meet CFS9's elite coaching team. Certified professionals with decades of combined experience in strength, bodybuilding, CrossFit, nutrition and more.",
};

const coaches = [
  {
    name: "Satish Bachala",
    role: "Head Coach & Founder",
    specialization: "Strength & Powerlifting",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1583500178450-e59f4edce10b?w=500&q=80",
    bio: "National-level powerlifter and dedicated bodybuilder turned coach. Satish founded CFS9 with a mission to bring world-class strength training to Hyderabad. He's coached 200+ athletes to competition-level strength.",
    isFounder: true,
  },
  {
    name: "Priya Reddy",
    role: "Lead CrossFit Trainer",
    specialization: "CrossFit & HIIT",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1609899517237-354fba8d18c5?w=500&q=80",
    bio: "CrossFit Level 2 certified and former state-level athlete. Priya specialises in metabolic conditioning and functional movements that build real-world athleticism.",
  },
  {
    name: "Vikram Singh",
    role: "Bodybuilding Coach",
    specialization: "Physique & Contest Prep",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=500&q=80",
    bio: "Multiple-time natural bodybuilding champion. Vikram's contest prep protocols and posing coaching have helped dozens of competitors earn their pro cards.",
  },
  {
    name: "Anjali Nair",
    role: "Nutrition & Wellness Coach",
    specialization: "Sports Nutrition & Recovery",
    experience: "6+ Years",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80",
    bio: "Certified sports nutritionist with an MS in Dietetics. Anjali builds custom meal plans aligned with training goals — from fat loss to performance optimisation.",
  },
  {
    name: "Arjun Kapoor",
    role: "Functional Training Coach",
    specialization: "Athletic Performance",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500&q=80",
    bio: "Former military fitness instructor. Arjun brings discipline, structure, and high-energy programming that pushes athletes beyond their perceived limits.",
  },
  {
    name: "Meera Joshi",
    role: "Yoga & Mobility Coach",
    specialization: "Power Yoga & Recovery",
    experience: "9+ Years",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80",
    bio: "RYT-500 certified yoga instructor. Meera integrates mobility work with strength training to help athletes move better, recover faster, and train harder.",
  },
];

export default function CoachingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-4">
            Our <span className="text-accent">Coaches</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Every champion needs a great coach. Ours have the experience, certifications, and passion to get you there.
          </p>
        </div>
      </section>

      {/* Coach Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={coach.name} className="flex flex-col relative">
                {"isFounder" in coach && coach.isFounder && (
                  <div className="absolute top-3 right-3 z-30 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg"
                    style={{ fontFamily: "var(--font-oswald)" }}>
                    ★ Founder
                  </div>
                )}
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
