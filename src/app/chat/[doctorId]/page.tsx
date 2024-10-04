import DoctorChatPage from "@/components/HomePage/Doctor/ChatPage";
import RootContainer from "@/components/Shared/RootContainer";
import SectionSpacer from "@/components/Shared/SectionSpacer";
import { Suspense } from "react";

const ChatPage = ({ params }: { params: { doctorId: string } }) => {
  const { doctorId } = params;

  return (
    <RootContainer>
      <SectionSpacer>
        <Suspense fallback={<div>Loading...</div>}>
          <DoctorChatPage doctorId={doctorId} />
        </Suspense>
      </SectionSpacer>
    </RootContainer>
  );
};

export default ChatPage;
