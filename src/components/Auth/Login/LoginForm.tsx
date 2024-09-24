"use client";

import MedForm from "@/components/Forms/BaseForm";
import MedCheckBox from "@/components/Forms/MedCheckbox";
import MedInput from "@/components/Forms/MedInput";
import { cn } from "@/helpers/cn";
import { useLoginMutation } from "@/libs/redux/features/auth/authApi";
import { setUser } from "@/libs/redux/features/auth/authSlice";
import { useAppDispatch } from "@/libs/redux/hooks";
import { Button } from "antd";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const LoginForm = ({ className }: { className?: string }) => {
  // use login mutation
  const [login, { data, error, isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (data: FieldValues) => {
    if (data.email && data.password) {
      const result = await login(data);

      const tostId = toast.info("Login...", { autoClose: false });

      if (result.error) {
        toast.update(tostId, {
          render: "Error",
          type: "error",
          autoClose: 5000,
        });
      } else {
        toast.update(tostId, {
          render: "Login success",
          type: "success",
          autoClose: 5000,
        });

        // decode token
        const decodeToken = jwtDecode(result?.data?.data?.token);

        // set token in redux store
        dispatch(
          setUser({ token: result?.data?.data?.token, user: decodeToken })
        );

        // redirect to home page
        router.push("/");
      }
    }
  };

  return (
    <div className={cn(className)}>
      <MedForm onSubmit={handleLogin}>
        <div className="">
          <div className="space-y-12">
            <div className="space-y-12">
              <MedInput type="text" name="email" placeholder="Email" />
            </div>

            <MedInput type="password" name="password" placeholder="Password" />
            <div className="flex items-center justify-between">
              <MedCheckBox required={false} name="terms" label="Remember me" />
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
              loading={isLoading}
              disabled={isLoading}
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
