import SecondaryLink from "@/components/shared/SecondaryLink";
import PrimaryLink from "@components/shared/PrimaryLink";
import SimpleCard from "@components/shared/SimpleCard";
import Logo from "@components/svg/Logo";
import { IoHomeOutline } from "react-icons/io5";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-72px)]">
      <h1 className="flex items-center justify-center gap-5 text-9xl font-extrabold">
        4<Logo width={100} height={100} />4
      </h1>
      <p className="text-3xl font-extrabold mt-10 mb-10">Page not found</p>
      <SimpleCard className="text-center flex flex-col gap-3 text-sm">
        <p>
          The page you're looking for seems to have wandered off the race track.
        </p>
        <p>Don't worry, even the best developers take wrong turns sometimes!</p>
        <div className="flex gap-3 mt-5">
          <PrimaryLink link="" className="w-full">
            <IoHomeOutline />
            Back to Home
          </PrimaryLink>
          <SecondaryLink link="challenges" className="w-full">
            Challenges
          </SecondaryLink>
        </div>
      </SimpleCard>
    </div>
  );
}

export default NotFound;
