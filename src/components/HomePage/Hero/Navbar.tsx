import assets from "@/assets";
import MedBtn from "@/components/Shared/MedBtn";
import RootContainer from "@/components/Shared/RootContainer";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <RootContainer className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image src={assets.images.logo} alt="logo" width={190} height={57} />
          <ul className="flex items-center gap-8 font-bold text-med-text-light">
            <Link className="text-med-primary-dark relative" href="/">
              <div className="absolute w-6 h-[4px] rounded-full bg-med-primary -bottom-2"></div>
              Menu1
            </Link>
            <Link href="/">Menu2</Link>
            <Link href="/">Menu3</Link>
            <Link href="/">Menu4</Link>
            <Link href="/">Menu5</Link>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Button
            type="text"
            style={{
              font: "bold",
              textTransform: "uppercase",
            }}
          >
            Login
          </Button>
          <MedBtn>Register</MedBtn>
          <div className="bg-[#979797] h-[25px] w-[2px]"></div>
          <Button
            style={{
              border: "none",
            }}
            icon={
              <Image
                src={assets.images.settingIcon}
                width={29}
                height={29}
                alt="setting"
              />
            }
          />
        </div>
      </div>
    </RootContainer>
  );
};

export default Navbar;
