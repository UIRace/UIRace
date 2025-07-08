import SimpleCard from "@components/shared/SimpleCard";
import SecondaryLink from "@/components/shared/SecondaryLink";
import PrimaryLink from "@components/shared/PrimaryLink";
import { FiArrowUpRight } from "react-icons/fi";

type Analytics = {
  title: string;
  value: string;
};

const analytics: Analytics[] = [
  {
    title: "Active Challenges",
    value: "50+",
  },
  {
    title: "Developers",
    value: "10K+",
  },
  {
    title: "Submissions",
    value: "25K+",
  },
];

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center my-20">
      <SimpleCard className="px-4 py-1.5 xs:text-sm text-xs text-center !rounded-full dark:border-wt-primary/10 border-bt-primary/15 bg-wt-primary/30 shadow">
        🚀 Join 10,000+ developers racing to the top
      </SimpleCard>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mt-10">
        <span className="bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 from-neutral-900 via-slate-500 to-neutral-700 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Frontend Race
        </span>
      </h2>
      <p className="text-center font-semibold max-w-xl mt-3 text-bt-secondary leading-6 dark:text-wt-secondary">
        Complete real-world UI challenges that sharpen your frontend ability,
        improve your problem-solving, and show what you can truly build — one
        submission at a time.
      </p>
      <div className="flex xxs:flex-row flex-col gap-3 mt-10 max-w-xl w-full">
        <PrimaryLink link="register" className="w-full !rounded-full">
          Start Racing 🏁
        </PrimaryLink>
        <SecondaryLink
          title="UIRace Challenges"
          link="challenges"
          className="w-full !rounded-full"
        >
          Challenges <FiArrowUpRight />
        </SecondaryLink>
      </div>
      <div className="flex flex-col gap-5 sm:gap-5 xxs:gap-3 xxs:mt-12 justify-evenly mt-10 max-w-xl w-full xxs:flex-row">
        {analytics.map((item, index) => (
          <div
            key={"hero-analytics" + item.title + index}
            className="flex flex-col items-center gap-5  w-full justify-between"
          >
            <p className="sm:text-3xl text-2xl font-bold text-primary">
              {item.value}
            </p>
            <p className="xs:text-sm text-xs text-bt-secondary dark:text-wt-secondary">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-6 h-10 mt-16 border-2 border-bt-primary dark:border-wt-primary rounded-full flex justify-center animate-updown">
        <div className="w-1 h-3 bg-bt-primary dark:bg-wt-primary rounded-full mt-2 animate-pulse"></div>
      </div>
    </section>
  );
}

export default Hero;
