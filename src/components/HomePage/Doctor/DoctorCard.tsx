import MedBtn from "@/components/Shared/MedBtn";
import { IDoctor } from "@/types/doctor";
import { Button, Divider } from "antd";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";

const DoctorCard = ({ doctor }: { doctor: IDoctor }) => {
  const { name, specialty, likes, experience, image } = doctor;
  return (
    <div
      style={{
        boxShadow: "0px 3px 49px 9px #0000000F",
      }}
      className="bg-med-white rounded-xl p-5 relative min-w-[395px]"
    >
      <Image
        src={image}
        alt={name}
        className="rounded-r-full rounded-b-full rounded-t-none rounded-tr-full w-24 h-24 absolute -left-[12%] -top-[10%]"
        width={93}
        height={93}
      />
      <div className="pl-10">
        <h3 className="text-2xl leading-7 text-med-text mb-2">dr. {name}</h3>
        <p className="text-lg text-med-text-light">{specialty}</p>
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <Button type="text" icon={<FaThumbsUp color="#0000008a" />}>
          {likes}%
        </Button>
        <Button type="text" icon={<ImBriefcase color="#0000008a" />}>
          {experience} Years
        </Button>
        <MedBtn className="min-w-[120px] uppercase">CHAT</MedBtn>
      </div>
    </div>
  );
};

export default DoctorCard;
