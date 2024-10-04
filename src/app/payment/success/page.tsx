import RootContainer from "@/components/Shared/RootContainer";
import SectionSpacer from "@/components/Shared/SectionSpacer";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const PaymentSuccessPage = () => {
  return (
    <RootContainer>
      <SectionSpacer>
        <Title level={1}>Payment Success</Title>
        <Link href={"/"}>
          <Button type="primary">Back to Home</Button>
        </Link>
      </SectionSpacer>
    </RootContainer>
  );
};

export default PaymentSuccessPage;
