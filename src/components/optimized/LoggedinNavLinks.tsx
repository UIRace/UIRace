import { memo } from "react";
import Link from "next/link";

const links: string[] = [
  "Home",
  "Dashboard",
  "Profile",
  "Challenges",
  "Leaderboard",
];

function LoggedinNavLinks({ pathname }: { pathname: string }) {
  return (
    <ul className="flex items-center justify-center gap-2">
      {links.map((item, index) => {
        return (
          <li key={"login-desktop-menu-link" + item + index}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`px-3 py-1.5 ${
                pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase()}`) &&
                "text-primary"
              } font-semibold`}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(LoggedinNavLinks);
