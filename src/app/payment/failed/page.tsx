import RootContainer from "@/components/Shared/RootContainer";
import SectionSpacer from "@/components/Shared/SectionSpacer";
import Title from "antd/es/typography/Title";

const PaymentFailedPage = () => {
  return (
    <RootContainer>
      <SectionSpacer>
        <Title level={1}>Payment Failed</Title>
      </SectionSpacer>
    </RootContainer>
  );
};

export default PaymentFailedPage;
