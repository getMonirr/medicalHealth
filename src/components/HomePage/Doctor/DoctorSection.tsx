"use client";

import RootContainer from "@/components/Shared/RootContainer";
import SectionSpacer from "@/components/Shared/SectionSpacer";
import { useGetDoctorsQuery } from "@/libs/redux/features/doctor/doctorApi";
import { IDoctor } from "@/types/doctor";
import { useState } from "react";
import DoctorCard from "./DoctorCard";
import LoadingDoctorCard from "./LoadingDoctorCard";

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

const DoctorSection = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const { data, isLoading, isFetching } = useGetDoctorsQuery(selectedSpecialty);

  return (
    <SectionSpacer>
      <RootContainer>
        <div className="flex gap-24">
          <div className="mt-20">
            <h1 className="font-black text-5xl mb-7">Ask Doctor</h1>
            <ul className="space-y-6">
              {doctorSpecialtyList.map((item) => (
                <li
                  onClick={() => setSelectedSpecialty(item.title)}
                  className={`font-normal text-2xl leading-9 cursor-pointer hover:bg-[#B3E5FC] hover:text-med-primary-dark pl-4 rounded-full ${
                    selectedSpecialty === item.title
                      ? "bg-[#B3E5FC] text-med-primary-dark"
                      : "text-med-text-light"
                  }`}
                  key={item.title}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-y-20 gap-x-20">
            {isLoading || isFetching
              ? Array.from({ length: 4 }).map((_, index) => (
                  <LoadingDoctorCard key={index + 3} />
                ))
              : data &&
                Array.isArray(data.data) &&
                data.data.map((doctor: IDoctor) => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                ))}
          </div>
        </div>
      </RootContainer>
    </SectionSpacer>
  );
};

export default DoctorSection;
