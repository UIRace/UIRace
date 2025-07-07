import { memo } from "react";
import { RxExit } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { LuTrophy } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import DropDown from "@components/headlessui/DropDown";
import Separator from "@components/shared/Separator";
import MenuLink from "@components/headlessui/MenuLink";
import EllipsisText from "@components/shared/EllipsisText";
import MenuBtn from "@components/headlessui/MenuBtn";
import { MenuButton } from "@headlessui/react";
import { useUser } from "@/context/userContext";
import Image from "next/image";

function HeaderProfile() {
  const { logout } = useUser();
  return (
    <div>
      <DropDown mainButton={<UserProfileButton />}>
        <div className="px-3 py-0.5">
          <h3 className="font-semibold ">
            <EllipsisText>Sandeep Rajput</EllipsisText>
          </h3>
          <p className="text-sm/6 -mt-1 text-bt-secondary dark:text-wt-secondary">
            <EllipsisText>rajputsandeep@gmail.com</EllipsisText>
          </p>
        </div>
        <Separator />
        <MenuLink title="Profile" link="/profile">
          <FaRegUser className="text-bt-secondary dark:text-wt-secondary" />
          <EllipsisText>Profile</EllipsisText>
        </MenuLink>
        <MenuLink title="Leaderboard" link="/leaderboard">
          <LuTrophy className="text-bt-secondary dark:text-wt-secondary" />
          <EllipsisText>Leaderboard</EllipsisText>
        </MenuLink>
        <MenuLink title="Settings" link="/settings">
          <CiSettings className="text-bt-secondary dark:text-wt-secondary" />
          <EllipsisText>Settings</EllipsisText>
        </MenuLink>
        <Separator />
        <MenuBtn handleClick={() => logout()} title="Log out">
          <RxExit className="text-bt-secondary dark:text-wt-secondary" />
          <EllipsisText>Log out</EllipsisText>
        </MenuBtn>
      </DropDown>
    </div>
  );
}

export default memo(HeaderProfile);

function UserProfileButton() {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <MenuButton className={"cursor-pointer"}>
        <Image
          width={32}
          height={32}
          src="/user.jpg"
          alt="Sandeep Image"
          draggable="false"
          className="w-full h-full rounded-full object-cover scale-110"
        />
      </MenuButton>
    </div>
  );
}
