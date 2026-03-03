import SectionHeader from "@/components/SectionHeader";
import CoachCard from "@/components/CoachCard";

const coaches = [
  {
    name: "Akshay",
    role: "Senior Fitness Trainer",
    specialization: "Strength & Conditioning",
    experience: "7+ Years",
    image: "/akshay.jpg",
  },
  {
    name: "Vidya Yates",
    role: "Senior Fitness Trainer",
    specialization: "Nutrition & Transformation",
    experience: "10+ Years",
    image: "/vidya-yates.jpg",
  },
  {
    name: "Mahesh Kumar",
    role: "Fitness Trainer",
    specialization: "Functional Training",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=500&q=80",
  },
  {
    name: "Mahender",
    role: "Fitness Trainer",
    specialization: "Injury Rehab & Exercise Correction",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80",
  },
  {
    name: "Ajay",
    role: "Fitness Trainer",
    specialization: "CrossFit & Sports Nutrition",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
  },
  {
    name: "N. Surya Prakash",
    role: "Fitness Trainer",
    specialization: "Nutrition & Kettlebell Training",
    experience: "5+ Years",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {coaches.map((coach, index) => (
            <CoachCard key={coach.name} {...coach} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
