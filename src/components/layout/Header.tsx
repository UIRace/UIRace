"use client";
import Logo from "@components/svg/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import PrimaryLink from "@components/shared/PrimaryLink";
import DropDown from "@components/headlessui/DropDown";
import Separator from "@components/shared/Separator";
import { FaRegUser } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import MenuBtn from "@components/headlessui/MenuBtn";
import MenuLink from "@components/headlessui/MenuLink";
import { MenuButton } from "@headlessui/react";
import EllipsisText from "@components/shared/EllipsisText";
import useWidth from "@hooks/useWidth";
import { IoMdMenu } from "react-icons/io";
import generateUniqueId from "@/utils/generateUniqueId";

function Header() {
  const login = false;
  const width = useWidth();
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">(
    typeof window !== "undefined"
      ? (localStorage.theme as "light" | "dark") || "light"
      : "light"
  );

  const handleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  if (!width) return null;

  return (
    <div className="fixed top-0 z-[10000] backdrop-blur w-full">
      <header className="max-w-7xl gap-4 w-full mx-auto grid h-[72px] px-5 py-4 grid-cols-[auto_1fr_auto]">
        {width <= 915 && (
          <DropDown
            className="text-bt-primary dark:text-wt-primary"
            anchor="bottom start"
            mainButton={<SideBarButton />}
          >
            <div className="px-3 py-1.5">Navigation Links</div>
            <Separator />
            {login ? (
              <>
                {[
                  "Home",
                  "Dashboard",
                  "Profile",
                  "Challenges",
                  "Leaderboard",
                ].map((item) => {
                  return (
                    <MenuLink
                      key={generateUniqueId("login-mobile-menu-link")}
                      link={`/${
                        item.toLowerCase() === "/home"
                          ? "/"
                          : item.toLowerCase()
                      }`}
                      className={`${
                        pathname ===
                          (item === "Home" ? "/" : `/${item.toLowerCase()}`) &&
                        "text-primary"
                      }`}
                    >
                      {item}
                    </MenuLink>
                  );
                })}
              </>
            ) : (
              <>
                {["Home", "Challenges", "Leaderboard", "About", "Contact"].map(
                  (item) => {
                    return (
                      <MenuLink
                        key={generateUniqueId("non-login-mobile-menu-link")}
                        link={`/${
                          item.toLowerCase() === "home"
                            ? "/"
                            : item.toLowerCase()
                        }`}
                        className={`${
                          pathname ===
                            (item === "Home"
                              ? "/"
                              : `/${item.toLowerCase()}`) && "text-primary"
                        }`}
                      >
                        {item}
                      </MenuLink>
                    );
                  }
                )}
                {width <= 430 && (
                  <>
                    <Separator />
                    <MenuLink
                      link="/login"
                      className={`bg-primary  data-focus:!bg-primary font-semibold text-wt-primary`}
                    >
                      <span className="flex items-center justify-center w-full">
                        Login
                      </span>
                    </MenuLink>
                  </>
                )}
              </>
            )}
          </DropDown>
        )}
        <Link href="/" className={`flex items-center gap-2 cursor-pointer`}>
          <Logo height={30} width={30} />

          <h1 className="font-bold text-2xl text-bt-primary dark:text-wt-primary tracking-tight">
            UIRace
          </h1>
        </Link>
        {width > 915 && (
          <nav className="flex items-center justify-center gap-2 text-bt-primary dark:text-wt-primary">
            {login ? (
              <ul className="flex items-center justify-center gap-2">
                {[
                  "Home",
                  "Dashboard",
                  "Profile",
                  "Challenges",
                  "Leaderboard",
                ].map((item) => {
                  return (
                    <li key={generateUniqueId("login-desktop-menu-link")}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className={`px-3 py-1.5 ${
                          pathname ===
                            (item === "Home"
                              ? "/"
                              : `/${item.toLowerCase()}`) && "text-primary"
                        } font-semibold`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className="flex items-center justify-center gap-2">
                {["Home", "Challenges", "Leaderboard", "About", "Contact"].map(
                  (item) => {
                    return (
                      <li key={generateUniqueId("non-login-desktop-menu-link")}>
                        <Link
                          href={
                            item === "Home" ? "/" : `/${item.toLowerCase()}`
                          }
                          className={`px-3 py-1.5 ${
                            pathname ===
                              (item === "Home"
                                ? "/"
                                : `/${item.toLowerCase()}`) && "text-primary"
                          } font-semibold`}
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            )}
          </nav>
        )}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center">
            <button
              className="px-4 py-2  font-semibold cursor-pointer text-xl"
              onClick={handleTheme}
              type="button"
              aria-label="Toggle Dark Mode"
              title="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <MdOutlineDarkMode />
              ) : (
                <MdOutlineLightMode />
              )}
            </button>
          </div>
          {login ? (
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
                <MenuLink link="/profile">
                  <FaRegUser className="text-bt-secondary dark:text-wt-secondary" />
                  <EllipsisText>Profile</EllipsisText>
                </MenuLink>
                <MenuLink link="/leaderboard">
                  <LuTrophy className="text-bt-secondary dark:text-wt-secondary" />
                  <EllipsisText>Leaderboard</EllipsisText>
                </MenuLink>
                <MenuLink link="/settings">
                  <CiSettings className="text-bt-secondary dark:text-wt-secondary" />
                  <EllipsisText>Settings</EllipsisText>
                </MenuLink>
                <Separator />
                <MenuBtn handleClick={() => {}} title="Log out">
                  <RxExit className="text-bt-secondary dark:text-wt-secondary" />
                  <EllipsisText>Log out</EllipsisText>
                </MenuBtn>
              </DropDown>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {width > 430 && (
                <Link href="/login" className="px-3 py-2 font-semibold">
                  Login
                </Link>
              )}
              <PrimaryLink link="register">Register</PrimaryLink>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;

function UserProfileButton() {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <MenuButton className={"cursor-pointer"}>
        <img
          src="https://avatars.githubusercontent.com/u/164610449?v=4"
          alt="Sandeep Image"
          draggable="false"
          className="w-full h-full rounded-full object-cover scale-110"
        />
      </MenuButton>
    </div>
  );
}

function SideBarButton() {
  return (
    <MenuButton className="h-full flex items-center cursor-pointer focus:outline-none">
      <IoMdMenu size={20} />
    </MenuButton>
  );
}
