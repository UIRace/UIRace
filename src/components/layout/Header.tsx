"use client";
import Logo from "@components/svg/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import PrimaryLink from "@components/shared/PrimaryLink";
import DropDown from "@components/headlessui/DropDown";
import Separator from "@components/shared/Separator";
import MenuLink from "@components/headlessui/MenuLink";
import { MenuButton } from "@headlessui/react";
import useWidth from "@hooks/useWidth";
import { IoMdMenu } from "react-icons/io";
import LoggedinMobileNavLinks from "@components/optimized/LoggedinMobileNavLinks";
import LoggedoutMobileNavLinks from "@components/optimized/LoggedoutMobileNavLinks";
import HeaderProfile from "@components/optimized/HeaderProfile";
import LoggedoutNavLinks from "@components/optimized/LoggedoutNavLinks";
import LoggedinNavLinks from "@components/optimized/LoggedinNavLinks";
import { useUser } from "@/context/userContext";
import { useTheme } from "@/context/changeTheme";

function Header() {
  const { isLoggedIn } = useUser();
  const { theme, setThemeDark, setThemeLight } = useTheme();
  const width = useWidth();
  const pathname = usePathname();

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
            {isLoggedIn ? (
              <>
                <LoggedinMobileNavLinks pathname={pathname} />
              </>
            ) : (
              <>
                <LoggedoutMobileNavLinks pathname={pathname} />
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
            {isLoggedIn ? (
              <LoggedinNavLinks pathname={pathname} />
            ) : (
              <LoggedoutNavLinks pathname={pathname} />
            )}
          </nav>
        )}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center">
            <button
              className="px-4 py-2  font-semibold cursor-pointer text-xl"
              onClick={theme === "dark" ? setThemeLight : setThemeDark}
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
          {isLoggedIn ? (
            <HeaderProfile />
          ) : (
            <div className="flex items-center gap-2">
              {width > 430 && (
                <Link href="/login" className="px-3 py-2 font-semibold">
                  Login
                </Link>
              )}
              <PrimaryLink title="Register to UI Race" link="register">
                Register
              </PrimaryLink>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;

function SideBarButton() {
  return (
    <MenuButton className="h-full flex items-center cursor-pointer focus:outline-none">
      <IoMdMenu size={20} />
    </MenuButton>
  );
}
