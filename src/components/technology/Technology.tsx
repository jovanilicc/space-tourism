import NextTechnologyBtn from "./NextTechnologyBtn";
import { AnimatePresence, motion } from "motion/react";

type TechnologyProps = {
  name: string | undefined;
  img:
    | {
        portrait: string;
        landscape: string;
      }
    | undefined;
  description: string | undefined;
  technologyNames: string[];
  changeCurrentTechnology: (name: string) => void;
};

export default function Technology({
  name,
  img,
  description,
  technologyNames,
  changeCurrentTechnology,
}: TechnologyProps) {
  return (
    <div
      aria-live="polite"
      className="flex flex-col lg:flex-row gap-10 min-h-[700px] lg:min-h-auto"
    >
      <div className="mx-auto order-1 lg:mx-0 gap-10 text-center lg:text-left flex items-center flex-col lg:flex-row px-6 lg:px-0">
        <div className="text-xl gap-6 flex lg:flex-col font-barlow-condensed tracking-wide justify-center lg:justify-start">
          {technologyNames.map((technology, index) => (
            <NextTechnologyBtn
              key={technology}
              name={technology}
              isActive={technology === name}
              slideNum={++index}
              changeCurrentTechnology={changeCurrentTechnology}
            />
          ))}
        </div>
        <div className="min-w-[300px]">
          <motion.div
            key={`text-${name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100, transition: { duration: 1 } }}
          >
            <span className="block font-bellefair text-2xl lg:text-3xl text-white/50">
              THE TERMINOLOGY…
            </span>
            <h1 className="text-4xl md:text-5xl pt-2 pb-4 font-bellefair">
              {name?.toUpperCase()}
            </h1>
            <p className=" text-primary-light-blue leading-loose font-barlow md:max-w-[600px] lg:max-w-max">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="lg:order-1 min-h-[200px] sm:min-h-[285px] md:min-h-[310px] lg-min-h-[460px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            {" "}
            <picture>
              <source media="(max-width: 1024px)" srcSet={img?.landscape} />

              <img
                src={img?.portrait}
                alt={name}
                className=" lg:min-w-[250px] lg:max-w-[450px] mx-auto "
              />
            </picture>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
