"use client";

import MedForm from "@/components/Forms/BaseForm";
import MedCheckBox from "@/components/Forms/MedCheckbox";
import MedInput from "@/components/Forms/MedInput";
import { cn } from "@/helpers/cn";
import { Button } from "antd";
import Link from "next/link";

const LoginForm = ({ className }: { className?: string }) => {
  const register = (data: any) => {
    console.log({ data });
  };

  return (
    <div className={cn(className)}>
      <MedForm onSubmit={register}>
        <div className="">
          <div className="space-y-12">
            <div className="space-y-12">
              <MedInput type="text" name="email" placeholder="Email" />
            </div>

            <MedInput type="password" name="password" placeholder="Password" />
            <div className="flex items-center justify-between">
              <MedCheckBox required name="terms" label="Remember me" />
              <Button type="link">
                <Link href="/" className="text-med-primary-dark">
                  Forgot Password?
                </Link>
              </Button>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="uppercase font-bold"
              block
              shape="round"
            >
              Continue
            </Button>
          </div>
        </div>
      </MedForm>
    </div>
  );
};

export default LoginForm;
