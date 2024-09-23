import RootContainer from "./RootContainer";

const SectionStarter = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <RootContainer>
      <h1 className="font-black text-[52px] text-med-text mb-6">{title}</h1>
      <p className="font-normal text-2xl leading-9 text-med-text">
        {description}
      </p>
    </RootContainer>
  );
};

export default SectionStarter;
