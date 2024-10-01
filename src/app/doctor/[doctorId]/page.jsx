import RootContainer from "@/components/Shared/RootContainer";
import SectionSpacer from "@/components/Shared/SectionSpacer";
import { Button } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const DoctorPage = ({ params }) => {
  const { doctorId } = params;
  return (
    <RootContainer>
      <SectionSpacer>
        <Title level={2}>Doctor Page</Title>
        <Text>Doctor ID: {doctorId}</Text>
        <div>
          <Link href={`/payment/${doctorId}`}>
            <Button type="primary">Payment Now</Button>
          </Link>
        </div>
      </SectionSpacer>
    </RootContainer>
  );
};

export default DoctorPage;
