import { IClinic } from "@/types/clinic";
import { Button } from "antd";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ClinicCard = ({ clinic }: { clinic: IClinic }) => {
  const { clinic_name, contact_number, email, location, image } = clinic;
  return (
    <div
      style={{
        boxShadow: "0px 3px 49px 9px #0000000F",
      }}
      className="bg-med-white rounded-2xl p-4 flex gap-4 items-center mt-10"
    >
      <Image
        src={image}
        alt={clinic_name}
        width={146}
        height={150}
        className="rounded-lg"
        style={{
          height: "160px",
        }}
      />
      <div className="space-y-4 w-full">
        <h1 className="font-black text-base text-med-text">{clinic_name}</h1>
        <div className="space-x-4">
          <Button
            style={{
              fontSize: "16px",
              paddingLeft: "0px",
            }}
            type="text"
            icon={<FaPhoneAlt color="#4CAF50" size={18} />}
          >
            {contact_number}
          </Button>
          <Button
            style={{
              fontSize: "16px",
              paddingLeft: "0px",
            }}
            type="text"
            icon={<MdEmail color="#2196F3" size={18} />}
          >
            {email}
          </Button>
        </div>
        <Button
          style={{
            fontSize: "16px",
            paddingLeft: "0px",
          }}
          type="text"
          icon={<FaLocationDot color="#E91E63" size={18} />}
        >
          {location}
        </Button>
        <div>
          <Button
            style={{
              color: "#4CAF50",
              borderColor: "#4CAF50",
            }}
            block
            shape="round"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;
