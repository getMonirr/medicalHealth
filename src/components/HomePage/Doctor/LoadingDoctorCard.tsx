import { Button, Divider, Skeleton } from "antd";
import { FaThumbsUp } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";

const LoadingDoctorCard = () => {
  return (
    <div
      style={{
        boxShadow: "0px 3px 49px 9px #0000000F",
      }}
      className="bg-med-white rounded-xl p-5 relative -w-[395px]"
    >
      {/* Placeholder for Image */}
      <Skeleton.Avatar
        active
        shape="circle"
        size={93}
        className="absolute -left-[8%] -top-[8%]"
      />

      <div className="pl-10 flex flex-col">
        <Skeleton.Input
          active
          style={{ width: "120px", height: "24px", marginBottom: "8px" }}
        />
        <Skeleton.Input active style={{ width: "100px", height: "20px" }} />
      </div>

      <Divider />

      <div className="flex items-center gap-4 ">
        {/* Placeholder for Likes Button */}
        <Button type="text" icon={<FaThumbsUp color="#0000008a" />}>
          <Skeleton.Input active style={{ width: "10px", height: "20px" }} />
        </Button>
        {/* Placeholder for Experience Button */}
        <Button type="text" icon={<ImBriefcase color="#0000008a" />}>
          <Skeleton.Input active style={{ width: "10px", height: "20px" }} />
        </Button>
        {/* Placeholder for Chat Button */}
        <Skeleton.Button active style={{ width: "50px", height: "40px" }} />
      </div>
    </div>
  );
};

export default LoadingDoctorCard;
