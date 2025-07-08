import { memo } from "react";
import MenuLink from "@components/headlessui/MenuLink";

const links: string[] = [
  "Home",
  "Challenges",
  "Leaderboard",
  "About",
  "Contact",
];

function LoggedoutMobileNavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {links.map((item, index) => {
        return (
          <MenuLink
            title={item === "Home" ? "Home" : item}
            key={"non-login-mobile-menu-link" + item + index}
            link={`${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
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

export default memo(LoggedoutMobileNavLinks);
