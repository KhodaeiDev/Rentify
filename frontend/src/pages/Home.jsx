import {
  Description,
  SearchFilter,
  Services,
  TopWeek,
} from "../components/Home";
import Footer from "./../components/Footer";
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
