"use client";

import MedBtn from "@/components/Shared/MedBtn";
import { selectUser } from "@/libs/redux/features/auth/authSlice";
import { useAppSelector } from "@/libs/redux/hooks";
import Link from "next/link";

const ChatOrBooking = ({ doctorId }: { doctorId: string }) => {
  const user = useAppSelector(selectUser);

  console.log({ user });

  return (
    <div>
      {!user ? (
        <Link href="/chat">
          <MedBtn className="min-w-[150px] uppercase">Chat</MedBtn>
        </Link>
      ) : (
        <Link href={`/doctor/${doctorId}`}>
          <MedBtn className="min-w-[150px] uppercase">Booking Now</MedBtn>
        </Link>
      )}
    </div>
  );
};

export default ChatOrBooking;
