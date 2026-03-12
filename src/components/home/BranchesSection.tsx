import SectionHeader from "@/components/SectionHeader";
import BranchCard from "@/components/BranchCard";

const branches = [
  {
    name: "CFS9 Kondapur",
    address: "Plot 42, Botanical Garden Road, Kondapur, Hyderabad 500084",
    phone: "+91 88865 64999",
    hours: "5:00 AM – 10:00 PM (Mon – Sat) | 6:00 AM – 10:00 AM (Sun)",
    image: "/stock/1534438327276-14e5300c3a48.jpg",
    mapUrl: "https://maps.app.goo.gl/57UHLe19jvK1wUCVA",
  },
  {
    name: "CFS9 Madhapur",
    address: "Durgam Cheruvu Road, Near Inorbit Mall, Madhapur, Hyderabad 500081",
    phone: "+91 90522 88888",
    hours: "5:00 AM – 10:00 PM (Mon – Sat) | 6:00 AM – 10:00 AM (Sun)",
    image: "/stock/1570829460005-c840387bb1ca.jpg",
    mapUrl: "https://maps.app.goo.gl/agDzKuR5PmB8VKCS9",
  },
];

export default function BranchesSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="branches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Branches"
          subtitle="Two premium locations across Hyderabad — designed for serious athletes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <BranchCard key={branch.name} {...branch} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
