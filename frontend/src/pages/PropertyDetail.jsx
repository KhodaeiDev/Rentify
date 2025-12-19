import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PropertyGallery } from "../components/propertyDetail";
import OwnerSummaryCard from "../components/PropertyDetail/Main/OwnerSummaryCard";
import PropertyMainInfo from "../components/PropertyDetail/Main/PropertyMainInfo";

export default function PropertyDetail() {
  return (
    <div>
      <div className="relative h-20 top-10 bg-white rounded-2xl mx-28 my-auto mb-12">
        <div className="absolute top-[10%] w-full">
          <Navbar textColor="text-black" />
        </div>
      </div>
      <PropertyGallery />
      <section className="w-full mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <PropertyMainInfo />
          </div>
          <div className="md:col-span-1">
            <OwnerSummaryCard />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
