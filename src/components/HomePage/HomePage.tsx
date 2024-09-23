import assets from "@/assets";
import ClinicSection from "./Clinic/ClinicSection";
import DoctorSection from "./Doctor/DoctorSection";
import Banner from "./Hero/Banner";
import HeroCard from "./Hero/HeroCard";
import Navbar from "./Hero/Navbar";
import Testimonial from "./Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${assets.images.heroCornerBg.src})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute -top-[30%] right-0 w-[50%] h-[100%] z-0"
      />
      <Navbar />
      <Banner />
      <HeroCard />
      <DoctorSection />
      <Testimonial />
      <ClinicSection />
    </>
  );
};

export default HomePage;
