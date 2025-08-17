import { NavLink } from "react-router";
import logo from "../assets/shared/logo.svg";
import menuIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
const navList = ["home", "destination", "crew", "technology"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = (type: string) => {
    if (type === "open") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="">
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed md:hidden z-10 tracking-widest min-h-screen  top-0 right-0 w-4/6 text-white pl-6 bg-white/1 backdrop-blur-xl"
            >
              <button
                onClick={() => menuHandler("close")}
                aria-label="Close menu button."
                className="block ml-auto pt-8 pr-6 pb-20"
              >
                <img src={closeIcon} alt="" />
              </button>
              <ul>
                {navList.map((navItem, index) => (
                  <li key={navItem}>
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to={`/${navItem === "home" ? "" : navItem}`}
                      className={({ isActive }) =>
                        isActive
                          ? "my-6 block border-r-5 border-white"
                          : "my-6 block hover:border-r-5 hover:border-white/50"
                      }
                    >
                      <span className="font-bold mr-4">{`0${index}`}</span>
                      {navItem.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        <div className="absolute py-6 md:py-0 lg:top-10 pl-6  md:pl-10 lg:pl-16 w-full max-w-[1920px] left-1/2 -translate-x-1/2 mx-auto">
          <nav className="flex items-center justify-between relative">
            <NavLink to="/" className="">
              <img
                src={logo}
                alt="Space Tourism logo"
                className="w-10 md:w-auto"
              />
            </NavLink>
            <div className="md:hidden font-barlow-condensed">
              {!isOpen && (
                <button
                  onClick={() => menuHandler("open")}
                  className="pr-6"
                  aria-label="Open menu button"
                >
                  <img src={menuIcon} alt="" />
                </button>
              )}
            </div>

            <ul className="hidden md:flex gap-10 text-white font-barlow-condensed lg:text-2xl tracking-wide bg-white/5 backdrop-blur-md pl-28 pr-10 lg:pr-16 lg:pl-40 relative">
              <div className="hidden xl:block absolute w-[28vw] 2xl:w-[38vw] origin-left rotate-180 z-10 translate-x-10 left-0 top-1/2 bg-white/25 h-[1px]"></div>
              {navList.map((navItem, index) => (
                <li key={navItem}>
                  <NavLink
                    to={`/${navItem === "home" ? "" : navItem}`}
                    className={({ isActive }) =>
                      isActive
                        ? "py-9 block border-b-4 border-transparent relative"
                        : "py-9 block hover:border-b-4 border-transparent hover:border-white/50 relative transition duration-300"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="font-bold mr-4">{`0${index}`}</span>
                        {navItem.toUpperCase()}
                        {isActive && (
                          <motion.div
                            layoutId="navunderline"
                            className="-bottom-1 absolute h-1 bg-white w-full"
                          ></motion.div>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
