import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Filter from "./Filter";

export default function PropertiesList() {
  return (
    <div>
      <div className="relative h-20 top-20 bg-white rounded-2xl mx-27 my-auto">
        <div className="container mx-auto px-4">
          <Navbar textColor="text-black" />
        </div>
      </div>
      <Filter/>
      {/* <Footer /> */}
    </div>
  );
}
