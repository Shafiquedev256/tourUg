import { Explore_pearl } from "../components/explore";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navbar } from "../components/navbar";
import { Offers } from "../components/offers";
import { PorpularDestinations } from "../components/porpularDestinations";
import { CommonQuestions } from "../components/questions";

const Homepage = () => {
  return (
    <div className='w-screen'>
      <Navbar />
      <Header />
      <Offers />
      <PorpularDestinations />
      <Explore_pearl />
      <CommonQuestions />
      <Footer />
    </div>
  );
};
export default Homepage;
