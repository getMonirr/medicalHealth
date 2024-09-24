"use client";

import { cn } from "@/helpers/cn";
import { useRegisterMutation } from "@/libs/redux/features/auth/authApi";
import { Button, Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import MedForm from "../../Forms/BaseForm";
import MedCheckBox from "../../Forms/MedCheckbox";
import MedInput from "../../Forms/MedInput";

const RegisterForm = ({ className }: { className?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [register, { data, error, isLoading }] = useRegisterMutation();

  const handleRegister = async (data: FieldValues) => {
    if (data.email && data.password && data.name) {
      const result = await register(data);

      const toastId = toast.info("Registering...", { autoClose: false });

      if (result.error) {
        toast.update(toastId, {
          render: "Error",
          type: "error",
          autoClose: 5000,
        });
      } else {
        toast.update(toastId, {
          render: "Register success",
          type: "success",
          autoClose: 5000,
        });

        // open a modal to tell user to verify email
        showModal();
      }
    }
  };

  return (
    <>
      <div className={cn(className)}>
        <MedForm onSubmit={handleRegister}>
          <div className="">
            <div className="space-y-12">
              <div className="space-y-12">
                <MedInput type="text" name="name" placeholder="Name" />
                <MedInput type="text" name="email" placeholder="Email" />
              </div>
              <div className="flex items-center gap-4">
                <MedInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <MedInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <MedCheckBox
                  required
                  name="terms"
                  label={
                    <>
                      I have read and accept the Terms of <br />
                      <Link href="/terms">Service & Privacy Policy </Link>
                    </>
                  }
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  className="uppercase font-bold"
                  shape="round"
                  loading={isLoading}
                  disabled={isLoading}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </MedForm>
      </div>
      <Modal
        title="Verify Email"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          We have sent you an email to verify your account. Please check your
          email and verify your account.
        </p>
      </Modal>
      ;
    </>
  );
};

export default RegisterForm;
