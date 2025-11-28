import Navbar from "../components/Navbar";
import {
  PropertyCard,
  PropertyFilter,
  PropertySort,
} from "../components/PropertiesList";
import Footer from "./../components/Footer";

export default function PropertiesList() {
  return (
    <div className="">
      <div className="relative h-20 top-10 bg-white rounded-2xl mx-28 my-auto mb-12">
        <div className="absolute top-[10%] w-full">
          <Navbar textColor="text-black" />
        </div>
      </div>
      <PropertyFilter />
      <PropertySort />
      <PropertyCard />

      {/* <Footer /> */}
    </div>
  );
}
