import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Featured from "../components/home/Featured";
import NewArrivals from "../components/home/NewArrivals";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar overlay />
      <Hero />
      <Categories />
      <Featured />
      <NewArrivals />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
