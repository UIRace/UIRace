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
            link={`${item === "Home" ? "" : item.toLowerCase()}`}
            className={`px-3 py-1.5 ${
              pathname ===
                `/${item === "Home" ? "" : `${item.toLowerCase()}`}` &&
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
