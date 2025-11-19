import Description from "../components/Home/Description";
import SearchFilter from "../components/Home/SearchFilter";
import TopWeek from "../components/Home/TopWeek";
import Footer from "./../components/Footer";
import Services from "./../components/Home/Services";
import Navbar from "./../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchFilter />
      <TopWeek />
      <Services />
      <Description />
      <Footer />
    </div>
  );
}
