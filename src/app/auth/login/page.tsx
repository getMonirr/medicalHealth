import assets from "@/assets";
import LoginForm from "@/components/Auth/Login/LoginForm";
import RootContainer from "@/components/Shared/RootContainer";
import { Button, Divider } from "antd";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import { TfiFacebook } from "react-icons/tfi";

const LoginPage = () => {
  return (
    <RootContainer className="bg-med-white py-9">
      <div className="flex items-center justify-between gap-4">
        <div className="border border-med-primary p-12 rounded-xl w-full max-w-[690px] min-w-[600px]">
          <h3 className="font-bold text-med-primary-dark mb-12 text-center text-2xl">
            Login to Your Account
          </h3>
          <div className="mb-12  flex items-center justify-center gap-6">
            <Button
              style={{
                backgroundColor: "#3b5998",
                color: "#fff",
                borderColor: "#3b5998",
                textTransform: "uppercase",
              }}
              icon={<TfiFacebook />}
            >
              Facebook
            </Button>
            <Button
              style={{
                backgroundColor: "#00acee",
                color: "#fff",
                borderColor: "#00acee",
                textTransform: "uppercase",
              }}
              icon={<FaTwitter />}
            >
              Twitter
            </Button>
            <Button
              style={{
                backgroundColor: "#db4437",
                color: "#fff",
                borderColor: "#db4437",
                textTransform: "uppercase",
              }}
              icon={<LiaGoogle size={20} />}
            >
              Google
            </Button>
          </div>
          <div className="max-w-[348px] mx-auto">
            <Divider style={{ borderColor: "#000" }}>
              <span className="text-med-text-light w-3">
                Or login with email
              </span>
            </Divider>
          </div>
          <LoginForm className="mt-12" />
        </div>
        <div className="text-center flex flex-col justify-center items-center p-4">
          <h3 className="font-bold text-4xl text-med-primary-dark mb-6">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="font-medium text-4xl text-med-text-light">
            consectetur adipiscing elit. Suspendisse sed urna in justo euismod
            condimentum.
          </p>
          <Image
            src={assets.images.login}
            width={441}
            height={373}
            alt="register iamge"
            className="mt-12"
          />
        </div>
      </div>
    </RootContainer>
  );
};

export default LoginPage;
