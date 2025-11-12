import Footer from "../components/Footer";
import Description from "../components/Home/Description";
      
import SearchFilter from "../components/Home/SearchFilter";
import Services from "../components/Home/Services";
import TopWeek from "../components/Home/TopWeek";

export default function Home() {
  return (
    <div className="w-full bg-primary-tint-6">
      {/* HEADER Component */}
      <SearchFilter />
      <TopWeek />
      <Services />
      <Description />
      {/* FOOTER Component */}
      <Footer/>
      
    </div>
  );
}
