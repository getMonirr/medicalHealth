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
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alice Carter",
    designation: "Marketing Manager",
    rating: 4.8,
    review:
      "The service was exceptional! The team went above and beyond to ensure we were satisfied.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Software Engineer",
    rating: 4.5,
    review:
      "Very professional and timely service. Would highly recommend to anyone looking for quality.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    designation: "Graphic Designer",
    rating: 4.9,
    review:
      "An amazing experience! The results exceeded my expectations and I will definitely come back.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    designation: "Project Manager",
    rating: 4.7,
    review:
      "Very efficient and high-quality service. The team was responsive and helpful throughout.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 5,
    name: "Emily White",
    designation: "HR Specialist",
    rating: 4.6,
    review:
      "Great customer service and attention to detail. I felt well taken care of during the entire process.",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
  },
  {
    id: 6,
    name: "Michael Brown",
    designation: "Data Analyst",
    rating: 4.4,
    review:
      "Good experience overall. The team handled my project professionally and on time.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 7,
    name: "Sophia Johnson",
    designation: "Content Strategist",
    rating: 4.9,
    review:
      "I am extremely satisfied with the service. The team really listened to my needs and delivered outstanding work.",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    id: 8,
    name: "David Lee",
    designation: "Business Consultant",
    rating: 4.7,
    review:
      "High-quality service with prompt responses and a smooth process. Would definitely recommend.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 9,
    name: "Isabella Martinez",
    designation: "Sales Executive",
    rating: 4.8,
    review:
      "Exceptional work! I was thoroughly impressed with their professionalism and dedication.",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    id: 10,
    name: "Oliver Green",
    designation: "Financial Analyst",
    rating: 4.5,
    review:
      "Great results delivered in a timely manner. The team was supportive and always available for any questions.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Testimonial = () => {
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
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.review}>
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
