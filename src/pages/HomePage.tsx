import { motion } from "motion/react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="bg-[url(/images/background-home-tablet.jpg)] lg:bg-[url(/images/background-home-desktop.jpg)] lg:bg-right 2xl:bg-center bg-cover bg-no-repeat">
      <main className="min-h-screen">
        <section className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1680px] mx-auto px-6 sm:px-20 xl:px-10 ">
          <div className="text-primary-light-blue font-barlow-condensed pt-28 md:pt-72 lg:pt-120 pb-32 lg:pb-0 flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100, transition: { duration: 1 } }}
              className="basis-1/2 text-center lg:text-left"
            >
              <h1 className="text-xl md:text-3xl tracking-widest lg:tracking-normal lg:text-base">
                SO, YOU WANT TO TRAVEL TO{" "}
                <span className="block text-white text-8xl md:text-[144px] font-bellefair py-8 md:py-9">
                  SPACE
                </span>
              </h1>
              <p className="font-barlow leading-loose">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100, transition: { duration: 1 } }}
              className="basis-1/2 flex justify-end items-center pt-30 md:pt-20 lg:pt-0"
            >
              <Link
                to="/destination"
                className="size-36 md:size-68 bg-white rounded-full text-xl md:text-4xl font-bellefair flex items-center justify-center text-primary-dark-blue hover:shadow-[0_0_0_80px] hover:shadow-white/10 transition-shadow duration-200 ease-in"
              >
                <span>EXPLORE</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
