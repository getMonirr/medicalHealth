import Payment from "@/components/Payment/Payment";
import RootContainer from "@/components/Shared/RootContainer";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

const PaymentPage = ({ params }: { params: { paymentId: string } }) => {
  const { paymentId } = params;
  return (
    <RootContainer>
      <Title level={1}>Payment Page</Title>
      <Text>Payment ID: {paymentId}</Text>
      <Payment paymentId={paymentId} price={12} />
    </RootContainer>
  );
};

export default PaymentPage;
