import { memo } from "react";
import MenuLink from "@components/headlessui/MenuLink";

const links: string[] = [
  "Home",
  "Dashboard",
  "Profile",
  "Challenges",
  "Leaderboard",
];

function LoggedinMobileNavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {links.map((item, index) => {
        return (
          <MenuLink
            title={item === "Home" ? "Home" : item}
            key={"login-mobile-menu-link" + item + index}
            link={`/${
              item.toLowerCase() === "/home" ? "/" : item.toLowerCase()
            }`}
            className={`${
              pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) &&
              "text-primary"
            }`}
          >
            {item}
          </MenuLink>
        );
      })}
    </>
  );
}

export default memo(LoggedinMobileNavLinks);
