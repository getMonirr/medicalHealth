"use client";

import { selectUser } from "@/libs/redux/features/auth/authSlice";
import { useAppSelector } from "@/libs/redux/hooks";
import { useEffect, useState } from "react";
import ChatBox from "./ChatBox";

const DoctorChatPage = ({ doctorId }: { doctorId: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const user = useAppSelector(selectUser);
  return (
    <div className="max-w-[500px] mx-auto">
      <h3>Chat with patient</h3>
      {isClient && (
        <ChatBox userName={user?.email as string} userId={doctorId} />
      )}
    </div>
  );
};

export default DoctorChatPage;
