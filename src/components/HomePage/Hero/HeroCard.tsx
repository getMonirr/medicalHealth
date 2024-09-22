import RootContainer from "@/components/Shared/RootContainer";

const HeroCardItems = [
  {
    title: "Business Solution",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
  },
  {
    title: "Free project quote",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
  },
  {
    title: "Nulla lobortis nunc",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
  },
];

const HeroCard = () => {
  return (
    <RootContainer className="flex justify-around mt-20">
      {HeroCardItems.map((item, index) => (
        <div
          key={index}
          className="group relative transition duration-150 ease-out [&:not(:last-child)]:border-r-2"
        >
          <h1 className="font-bold text-3xl text-med-text leading-[42px] group-hover:text-med-primary-dark">
            {item.title}
          </h1>
          <p className="font-normal text-lg text-med-text-light leading-6 mr-4">
            {item.description?.slice(0, 35) + "..."}
          </p>
          <div className="absolute w-[132px] h-[6px] rounded-full bg-med-primary -bottom-3 invisible group-hover:visible group-hover:ease-in-out"></div>
        </div>
      ))}
    </RootContainer>
  );
};

export default HeroCard;
