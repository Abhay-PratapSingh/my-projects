import React from "react";
import heroImage from "../assets/hero.png";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeCollection from "../components/HomeCollection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (

<div>

  <img
  src={heroImage}
  alt="Pradeep Jewellers Banner"
  className=" "
/>


<HomeCollection/>
<WhyChooseUs/>
<Testimonials/>
</div>




  );
};

export default Home;
