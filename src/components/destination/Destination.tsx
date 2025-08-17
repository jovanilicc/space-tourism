import DestinationBtn from "./DestinationBtn";
import { AnimatePresence, motion } from "motion/react";

type DestinationProps = {
  name: string | undefined;
  img: { png: string; webp: string } | undefined;
  description: string | undefined;
  distance: string | undefined;
  travel: string | undefined;
  placeNames: string[];
  changeCurrentDestination: (name: string) => void;
};

export default function Destination({
  name,
  img,
  description,
  distance,
  travel,
  placeNames,
  changeCurrentDestination,
}: DestinationProps) {
  return (
    <div
      aria-live="polite"
      className="flex flex-col lg:flex-row gap-20 2xl:gap-50 min-h-[800px] lg:min-h-auto"
    >
      <div className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            {" "}
            <img
              src={img?.webp}
              alt={name}
              className="max-w-[220px] md:max-w-[300px] lg:max-w-max lg:min-w-[250px] mx-auto"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mx-auto lg:mx-0 max-w-[450px] text-center lg:text-left">
        <div className="text-xl  gap-5 flex font-barlow-condensed tracking-wide justify-center lg:justify-start">
          {placeNames.map((place) => (
            <DestinationBtn
              key={place}
              name={place}
              isActive={place === name}
              changeCurrentDestination={changeCurrentDestination}
            />
          ))}
        </div>
        <div>
          <motion.div
            key={`text-${name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100, transition: { duration: 1 } }}
          >
            <h1 className="text-7xl lg:text-8xl pt-10 pb-4 font-bellefair">
              {name?.toUpperCase()}
            </h1>
            <p className=" text-primary-light-blue leading-loose font-barlow border-b-1 pb-6 border-b-white/25">
              {description}
            </p>
            <div className="pt-7 gap-5 md:gap-25 flex-col md:flex-row flex justify-center lg:justify-start">
              <p className=" font-barlow-condensed  text-sm tracking-widest text-primary-light-blue">
                AVG. DISTANCE{" "}
                <span className="block text-white pt-2 text-2xl tracking-normal font-bellefair">
                  {distance?.toUpperCase()}
                </span>
              </p>
              <p className=" font-barlow-condensed  text-sm tracking-widest text-primary-light-blue">
                EST. TRAVEL TIME{" "}
                <span className="block text-white pt-2 text-2xl tracking-normal font-bellefair">
                  {travel?.toUpperCase()}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
