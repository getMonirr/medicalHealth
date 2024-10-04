import MedBtn from "@/components/Shared/MedBtn";
import { selectUser } from "@/libs/redux/features/auth/authSlice";
import { useGetPaymentsQuery } from "@/libs/redux/features/payment/paymentApi";
import { useAppSelector } from "@/libs/redux/hooks";
import { Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import ChatBox from "./ChatBox";

interface IPayment {
  _id: string;
  doctorId: {
    _id: string;
  };
  patientId: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const ChatOrBooking = ({ doctorId }: { doctorId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);

  const user = useAppSelector(selectUser);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDoctorModal = () => {
    setIsDoctorModalOpen(true);
  };

  const handleDoctorModalCancel = () => {
    setIsDoctorModalOpen(false);
  };

  const { data, isLoading } = useGetPaymentsQuery("", {
    skip: !user,
  });

  console.log(data);

  const isChatAvailable =
    !isLoading &&
    data?.data.some((payment: IPayment) => payment.doctorId._id === doctorId);

  // get the doctor name
  const doctorName = data?.data.find(
    (payment: IPayment) => payment.doctorId._id === doctorId
  )?.doctorId.name;

  return (
    <div>
      {isChatAvailable ? (
        <div>
          {/* Button for Patient */}
          <Link href={`/chat/${doctorId}`} target="blank">
            <MedBtn
              handleOnClick={showModal}
              className="min-w-[150px] uppercase"
            >
              Chat
            </MedBtn>
          </Link>
        </div>
      ) : (
        <Link href={`/doctor/${doctorId}`}>
          <MedBtn className="min-w-[150px] uppercase">Booking Now</MedBtn>
        </Link>
      )}

      {/* Patient Chat Modal */}
      <Modal
        footer={null}
        title="Chat with Doctor"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <ChatBox userName={doctorName} userId={user?.id} />
      </Modal>
    </div>
  );
};

export default ChatOrBooking;
