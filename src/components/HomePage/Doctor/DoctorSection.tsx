"use client";

import RootContainer from "@/components/Shared/RootContainer";
import SectionStarter from "@/components/Shared/SectionStarter";
import DoctorCard from "./DoctorCard";

const doctorSpecialtyList = [
  {
    title: "All",
  },
  {
    title: "Orthopedic",
  },
  {
    title: "Nutritionist",
  },
  {
    title: "Pediatric",
  },
  {
    title: "Anaesthestic",
  },
];

const doctors = [
  {
    name: "Dr. Emma Johnson",
    specialty: "Cardiologist",
    likes: 320,
    experience: "12 years",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Daniel Lee",
    specialty: "Orthopedic Surgeon",
    likes: 410,
    experience: "8 years",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Dr. Sophia Martinez",
    specialty: "Pediatrician",
    likes: 280,
    experience: "10 years",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. James Smith",
    specialty: "Neurologist",
    likes: 510,
    experience: "15 years",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Dr. Olivia Chen",
    specialty: "Dermatologist",
    likes: 340,
    experience: "7 years",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Dr. Michael Thompson",
    specialty: "Psychiatrist",
    likes: 230,
    experience: "9 years",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

const DoctorSection = () => {
  return (
    <SectionStarter>
      <RootContainer>
        <div className="flex gap-24">
          <div className="mt-20">
            <h1 className="font-black text-5xl mb-7">Ask Doctor</h1>
            <ul className="space-y-6">
              {doctorSpecialtyList.map((item) => (
                <li
                  className="font-normal text-2xl leading-9 cursor-pointer hover:bg-[#B3E5FC] hover:text-med-primary-dark pl-4 rounded-full"
                  key={item.title}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-y-20 gap-x-20">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </RootContainer>
    </SectionStarter>
  );
};

export default DoctorSection;
