import { ITestimonial } from "@/types/testimonial";
import { Rate } from "antd";
import Image from "next/image";

const TestimonialCard = ({ testimonial }: { testimonial: ITestimonial }) => {
  const { name, designation, rating, review, image } = testimonial;

  return (
    <div
      style={{
        boxShadow: "0px 3px 49px 9px #0000000F",
      }}
      className="rounded-r-full rounded-b-full rounded-t-none rounded-tr-full max-h-[327px] max-w-[319px] bg-med-white p-6 relative"
    >
      <h3 className="font-normal text-base text-med-text mb-8 max-w-[208px]">
        {review}
      </h3>
      <Rate allowHalf defaultValue={rating} disabled />
      <div className="flex items-center justify-center">
        <div className="text-center mt-12 mb-4">
          <h4 className="text-lg font-black text-med-text text-end ">{name}</h4>
          <p className="text-sm font-normal text-med-text-light text-end ">
            {designation}
          </p>
        </div>
      </div>
      <Image
        src={image}
        alt={name}
        className="rounded-r-full rounded-b-full rounded-t-full rounded-br-none w-20 h-20 absolute bottom-[6%] right-0"
        width={93}
        height={93}
      />
    </div>
  );
};

export default TestimonialCard;
