"use client";

import RootContainer from "@/components/Shared/RootContainer";
import SectionSpacer from "@/components/Shared/SectionSpacer";
import SectionStarter from "@/components/Shared/SectionStarter";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import assets from "@/assets";
import { useGetTestimonialsQuery } from "@/libs/redux/features/testimonial/testimonialApi";
import { ITestimonial } from "@/types/testimonial";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialLoadingCard from "./TestimonialLoadingCard";

const Testimonial = () => {
  const { data, error, isLoading } = useGetTestimonialsQuery("");

  return (
    <SectionSpacer>
      <RootContainer>
        <SectionStarter
          title="People Testimonials"
          description="Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
        />
      </RootContainer>
      <div className="flex items-center gap-16">
        <div className="w-[60%] pt-16">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            style={{
              width: "100%",
              paddingTop: "40px",
              paddingBottom: "100px",
            }}
            className="testimonials-swiper"
          >
            {isLoading
              ? // Render loading cards when data is loading
                Array.from({ length: 3 }).map((_, index) => (
                  <SwiperSlide key={index + 2}>
                    <TestimonialLoadingCard />
                  </SwiperSlide>
                ))
              : data &&
                data.data.map((testimonial: ITestimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    <TestimonialCard testimonial={testimonial} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        <div>
          <Image
            src={assets.images.testimonialsImage}
            alt="Testimonials"
            width={500}
            height={500}
          />
        </div>
      </div>
    </SectionSpacer>
  );
};

export default Testimonial;
