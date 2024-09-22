import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import { Button } from "antd";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${assets.images.bannerImage.src})`,
      //   backgroundPosition: "right",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="h-[380px] flex items-center"
    >
      <RootContainer className="flex justify-between items-center">
        <div className="max-w-[532px] space-y-8">
          <h1 className="font-bold text-5xl text-med-text leading-[57px]">
            Lorem ipsum dolor amet
          </h1>
          <p className="font-normal text-3xl text-med-text-light leading-8">
            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
          </p>
          <div className="flex items-center gap-6">
            <button className="font-bold text-lg text-[#357A38] uppercase">
              More Info
            </button>
            <Button
              type="primary"
              className="uppercase"
              size="large"
              shape="round"
            >
              Register Now
            </Button>
          </div>
        </div>
        <div className="z-50">
          <Image
            src={assets.images.bannerImage}
            width={659}
            height={381}
            alt="Banner Image"
          />
        </div>
      </RootContainer>
    </div>
  );
};

export default Banner;
