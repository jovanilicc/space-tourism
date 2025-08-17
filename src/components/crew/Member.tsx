import NextMemberBtn from "./NextMemberBtn";
import { AnimatePresence, motion } from "motion/react";

type MemberProps = {
  name: string | undefined;
  img: { png: string; webp: string } | undefined;
  role: string | undefined;
  bio: string | undefined;
  memberNames: string[];
  changeCurrentMember: (name: string) => void;
};

export default function Member({
  name,
  img,
  role,
  bio,
  memberNames,
  changeCurrentMember,
}: MemberProps) {
  return (
    <div className="min-h-[980px] lg:min-h-auto flex flex-col lg:flex-row gap-14 lg:gap-20 2xl:gap-45">
      <div
        aria-live="polite"
        className="min-h-[380px] md:min-h-[320px] lg:min-h-auto mx-auto flex flex-col justify-between lg:mx-0 text-center lg:text-left "
      >
        <div className=""></div>
        <motion.div
          key={`text-${name}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100, transition: { duration: 1 } }}
          className=""
        >
          <span className="font-bellefair text-2xl lg:text-4xl text-white/40">
            {role?.toUpperCase()}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl md:pt-5 pb-5 font-bellefair">
            {name?.toUpperCase()}
          </h1>
          <p className=" text-primary-light-blue leading-loose md:max-w-[400px] 2xl:max-w-max">
            {bio}
          </p>
        </motion.div>

        <div className="text-xl pt-16 md:pt-14 lg:pt-0 gap-5 lg:gap-10 flex justify-center lg:justify-start font-barlow-condensed tracking-wide">
          {memberNames.map((member) => (
            <NextMemberBtn
              key={member}
              name={member}
              isActive={member === name}
              changeCurrentMember={changeCurrentMember}
            />
          ))}
        </div>
      </div>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className=""
          >
            {" "}
            <img
              src={img?.webp}
              alt={name}
              className="max-w-[270px] md:max-w-[450px] lg:max-w-max lg:min-w-[250px] mx-auto max-h-[600px] mask-b-from-95% "
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
