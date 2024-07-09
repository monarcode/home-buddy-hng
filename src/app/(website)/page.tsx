import ClearanceSalesList from "@/modules/home/components/clearance-sales-list";
import Hero from "@/modules/home/components/hero";

export default function HomePage() {
  return (
    <div className="space-y-8 lg:space-y-16 mb-28 lg:mb-16">
      <div className="relative">
        <Hero />
      </div>

      <div className="container space-y-4 lg:space-y-8">
        <h2 className="text-2xl lg:text-[52px] font-bold">Clearance Sales</h2>

        <ClearanceSalesList />
      </div>
    </div>
  );
}
