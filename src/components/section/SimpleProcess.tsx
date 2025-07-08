import { PiMagicWand } from "react-icons/pi";
import { MdFileDownloadDone } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { TbBrandVercelFilled } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { LuTrophy } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import SimpleCard from "@components/shared/SimpleCard";
import Separator from "@components/shared/Separator";

type ProcessTag = {
  icon: React.ElementType;
  text: string;
};

const buildDeployTags: ProcessTag[] = [
  {
    icon: RiGithubLine,
    text: "GitHub",
  },
  {
    icon: TbBrandVercelFilled,
    text: "Vercel",
  },
  {
    icon: TbWorld,
    text: "Live Demo",
  },
];

const achieveTags: ProcessTag[] = [
  {
    icon: LuTrophy,
    text: "Leaderboard",
  },
  {
    icon: PiMedal,
    text: "Certificates",
  },
  {
    icon: FaUserGroup,
    text: "Community",
  },
];

const chooseChallengeTags: string[] = [
  "Html",
  "React",
  "Next.js",
  "TypeScript",
  "+ more",
];

function SimpleProcess() {
  return (
    <div className="my-32">
      <div className="flex flex-col items-center justify-center">
        <SimpleCard className="px-4 flex items-center justify-center gap-3 w-fit py-1.5 xs:text-sm text-xs text-center !rounded-full dark:border-wt-primary/10 border-bt-primary/15 bg-wt-primary/30 shadow">
          <PiMagicWand className="text-primary" />
          Simple Process
        </SimpleCard>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mt-5">
          <span className=" leading-tight  transition-all duration-300 ">
            Your Path to{" "}
            <span className="bg-gradient-to-r text-transparent bg-[200%_auto] bg-clip-text from-bt-primary via-primary to-primary dark:from-wt-primary">
              Mastery
            </span>
          </span>
        </h2>
        <p className="text-center text-lg max-w-xl mt-3 text-bt-secondary dark:text-wt-secondary">
          Three simple steps to transform from beginner to frontend hero
        </p>
      </div>
      <div className="lg:mt-32 mt-20 lg:mx-10 flex flex-col gap-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="flex items-center justify-center rounded-xl font-bold text-2xl bg-blue-500 text-wt-primary h-14 w-14">
              1
            </div>
            <h3 className="text-xl mt-5 sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
              Choose Your Challenge
            </h3>
            <p className="mt-5 lg:text-start text-center max-w-xl lg:max-w-full lg:text-xl md:text-lg leading-7 text-bt-secondary dark:text-wt-secondary">
              Pick from 50+ carefully crafted challenges designed by industry
              experts. From beginner-friendly projects to advanced enterprise
              applications.
            </p>
            <div className="flex gap-2 mt-7 flex-wrap justify-center lg:justify-start">
              {chooseChallengeTags.map((item, index) => {
                return (
                  <SimpleCard
                    className="px-3 py-1 w-fit text-xs"
                    key={"simple-process-step-1" + item + index}
                  >
                    {item}
                  </SimpleCard>
                );
              })}
            </div>
          </div>
          <SimpleCard className="flex flex-col dark:border-wt-primary/10 border-bt-primary/15  shadow border my-auto">
            <div className="flex gap-2 py-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <Separator />
            <div className="flex flex-col gap-1 px-3 py-3 text-sm font-mono">
              <p>
                <span className="text-gray-400">
                  &#47;&#47; Challenge: E-commerce Dashboard
                </span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-black dark:text-white">Dashboard</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                <span className="text-yellow-400">()</span>{" "}
                <span className="text-pink-400">=&gt;</span>{" "}
                <span className="text-yellow-400">{`{`}</span>
              </p>
              <p className="pl-4">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-yellow-400">{`(`}</span>
              </p>
              <p className="pl-8">
                <span className="text-blue-400">&lt;div</span>{" "}
                <span className="text-green-400">className</span>
                <span className="text-pink-400">=</span>
                <span className="text-yellow-300">&quot;dashboard&quot;</span>
                <span className="text-blue-400">&gt;</span>
              </p>
              <p className="pl-12">
                <span className="text-blue-400">&lt;Analytics /&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-blue-400">&lt;/div&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-yellow-400">{`)`}</span>
              </p>
              <p>
                <span className="text-yellow-400">{`}`}</span>
              </p>
            </div>
          </SimpleCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <SimpleCard className="order-2 lg:order-1  flex flex-col dark:border-wt-primary/10 border-bt-primary/15  shadow border my-auto">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Deployment Status</p>
              <span className="bg-green-500 text-white font-semibold px-3 text-sm block h-fit rounded-full">
                Live
              </span>
            </div>
            <div>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex items-center gap-2">
                  <MdFileDownloadDone className="text-green-500" />
                  <p>Build successful</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdFileDownloadDone className="text-green-500" />
                  <p>Tests passed</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdFileDownloadDone className="text-green-500" />
                  <p>Deployed to production</p>
                </div>
              </div>
              <SimpleCard className="py-2 mt-5">
                <p className="text-sm font-semibold text-blue-500">
                  https://your-project.vercel.app
                </p>
              </SimpleCard>
            </div>
          </SimpleCard>
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start">
            <div className="flex items-center justify-center rounded-xl font-bold text-2xl bg-purple-500 text-wt-primary h-14 w-14">
              2
            </div>
            <h3 className="text-xl mt-5 sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
              Build & Deploy
            </h3>
            <p className="mt-5 lg:text-start text-center max-w-xl lg:max-w-full lg:text-xl md:text-lg leading-7 text-bt-secondary dark:text-wt-secondary">
              Code your solution using modern tools and frameworks. Deploy your
              project live and submit your GitHub repository for expert review.
            </p>
            <div className="flex gap-2 mt-7 flex-wrap justify-center lg:justify-start">
              {buildDeployTags.map((item, index) => {
                return (
                  <SimpleCard
                    className="px-3 py-1 w-fit text-xs flex items-center gap-2"
                    key={"simple-process-step-2" + item.text + index}
                  >
                    <item.icon />
                    {item.text}
                  </SimpleCard>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="flex items-center justify-center rounded-xl font-bold text-2xl bg-pink-500 text-wt-primary h-14 w-14">
              3
            </div>
            <h3 className="text-xl mt-5 sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
              Choose Your Challenge
            </h3>
            <p className="mt-5 lg:text-start text-center max-w-xl lg:max-w-full lg:text-xl md:text-lg leading-7 text-bt-secondary dark:text-wt-secondary">
              Pick from 50+ carefully crafted challenges designed by industry
              experts. From beginner-friendly projects to advanced enterprise
              applications.
            </p>
            <div className="flex gap-2 mt-7 flex-wrap justify-center lg:justify-start">
              {achieveTags.map((item, index) => {
                return (
                  <SimpleCard
                    className="px-3 py-1 w-fit text-xs flex items-center gap-2"
                    key={"simple-process-step-3" + item.text + index}
                  >
                    <item.icon />
                    {item.text}
                  </SimpleCard>
                );
              })}
            </div>
          </div>
          <SimpleCard className="flex flex-col dark:border-wt-primary/10 border-bt-primary/15  shadow border my-auto">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Your Progress</p>
              <span className="bg-primary text-white font-semibold px-3 text-sm block h-fit rounded-full">
                Level 5
              </span>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold">XP Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <p className="text-right text-sm text-bt-secondary dark:text-wt-secondary mt-1">
                2,450 / 3,000 XP
              </p>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-sm font-semibold">Global Rank</p>
                <p className="text-xl font-bold text-primary">#5</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Challenges Completed</p>
                <p className="text-xl font-bold text-primary">12</p>
              </div>
            </div>
          </SimpleCard>
        </div>
      </div>
    </div>
  );
}

export default SimpleProcess;
