"use client";

import { cn } from "@/helpers/cn";
import { Button } from "antd";
import Link from "next/link";
import MedForm from "../../Forms/BaseForm";
import MedCheckBox from "../../Forms/MedCheckbox";
import MedInput from "../../Forms/MedInput";

const RegisterForm = ({ className }: { className?: string }) => {
  const register = (data: any) => {
    console.log({ data });
  };

  return (
    <div className={cn(className)}>
      <MedForm onSubmit={register}>
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
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </MedForm>
    </div>
  );
};

export default RegisterForm;
