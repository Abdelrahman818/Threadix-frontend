import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      
      <Hero />
      
      <Categories />

      <Featured />

      <Benefits />

      <Footer />

    </div>
  );
}
