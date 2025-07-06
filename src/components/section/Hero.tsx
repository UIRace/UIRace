import SimpleCard from "@components/shared/SimpleCard";
import SecondaryLink from "@/components/shared/SecondaryLink";
import PrimaryLink from "@components/shared/PrimaryLink";
import { FiArrowUpRight } from "react-icons/fi";

type Analatyics = {
  title: string;
  value: string;
};

function Hero() {
  const analatyics: Analatyics[] = [
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

  return (
    <section className="flex flex-col items-center justify-center my-20">
      <SimpleCard className="px-4 py-1.5 xs:text-sm text-xs text-center !rounded-full dark:border-wt-primary/10 border-bt-primary/15 bg-wt-primary/30 shadow">
        🚀 Join 10,000+ developers racing to the top
      </SimpleCard>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mt-10">
        <span className="bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 from-neutral-900 via-slate-500 to-neutral-700 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Frontend Battle
        </span>
      </h2>
      <p className="text-center text-sm max-w-xl mt-3 text-bt-secondary font-medium dark:text-wt-secondary">
        Complete real-world UI challenges that sharpen your frontend ability,
        improve your problem-solving, and show what you can truly build — one
        submission at a time.
      </p>
      <div className="flex xxs:flex-row flex-col gap-3 mt-10 max-w-xl w-full">
        <PrimaryLink link="" className="w-full !rounded-full">
          Dashboard <FiArrowUpRight />
        </PrimaryLink>
        <SecondaryLink link="challenges" className="w-full !rounded-full">
          Challenges <FiArrowUpRight />
        </SecondaryLink>
      </div>
      <div className="flex flex-col gap-5 mt-10 max-w-xl w-full xs:flex-row">
        {analatyics.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5  w-full justify-between"
          >
            <p className="text-3xl font-bold text-primary">{item.value}</p>
            <p className="text-sm text-bt-secondary dark:text-wt-secondary">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
