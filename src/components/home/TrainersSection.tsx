import SectionHeader from "@/components/SectionHeader";
import CoachCard from "@/components/CoachCard";

const coaches = [
  {
    name: "Satish Bachala",
    role: "Head Coach & Founder",
    specialization: "Strength & Power",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1583500178450-e59f4edce10b?w=500&q=80",
  },
  {
    name: "Priya Reddy",
    role: "Fitness Trainer",
    specialization: "CrossFit & HIIT",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1609899517237-354fba8d18c5?w=500&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Bodybuilding Coach",
    specialization: "Physique & Contest Prep",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=500&q=80",
  },
  {
    name: "Anjali Nair",
    role: "Nutrition Coach",
    specialization: "Sports Nutrition",
    experience: "6+ Years",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80",
  },
];

export default function TrainersSection() {
  return (
    <section className="py-24 md:py-32 bg-surface" id="trainers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Elite Coaches"
          subtitle="Trained, certified, and battle-tested. Our coaches have transformed hundreds of lives. Your turn."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, index) => (
            <CoachCard key={coach.name} {...coach} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
