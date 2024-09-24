import assets from "@/assets";
import RootContainer from "@/components/Shared/RootContainer";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import ProfileOrRegister from "./ProfileOrRegister";

const NavItems = [
  {
    name: "Menu1",
    link: "/",
  },
  {
    name: "Menu2",
    link: "/",
  },
  {
    name: "Menu3",
    link: "/",
  },
  {
    name: "Menu4",
    link: "/",
  },
  {
    name: "Menu5",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <RootContainer className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image src={assets.images.logo} alt="logo" width={190} height={57} />
          <ul className="flex items-center gap-8 font-bold text-med-text-light">
            {NavItems.map((item, index) => (
              <Link
                key={item.name}
                className={`text-med-primary-dark relative  ${
                  index === 0 ? "text-med-primary" : "text-med-text-light"
                }`}
                href={item.link}
              >
                {
                  // Add active class for active menu
                  index === 0 && (
                    <div className="absolute w-6 h-[4px] rounded-full bg-med-primary -bottom-2"></div>
                  )
                }
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <ProfileOrRegister />
          <div className="bg-[#979797] h-[25px] w-[2px]"></div>
          <Button
            style={{
              border: "none",
              background: "none",
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
