import Technology from "./Technology";
import MainHeading from "../MainHeading";
import data from "../../../data.json";
import { useState } from "react";
const technologyData = data.technology;

export default function Technologies() {
  const [showCurrentTechnology, setShowCurrentTechnology] =
    useState("Launch vehicle");
  const currentTechnology = technologyData.find(
    (technology) => technology.name === showCurrentTechnology
  );
  const technologyNames = technologyData.map((technology) => technology.name);
  const changeCurrentTechnology = (name: string) => {
    setShowCurrentTechnology(name);
  };
  return (
    <section className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1445px] mx-auto md:px-20 xl:px-10">
      <div className="text-white pb-16  pt-36 lg:pt-50">
        <MainHeading title="SPACE LAUNCH 101" headingNum="03" />
        <Technology
          name={currentTechnology?.name}
          img={currentTechnology?.images}
          description={currentTechnology?.description}
          technologyNames={technologyNames}
          changeCurrentTechnology={changeCurrentTechnology}
        />
      </div>
    </section>
  );
}
