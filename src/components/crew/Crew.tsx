import Member from "./Member";
import MainHeading from "../MainHeading";
import data from "../../../data.json";
import { useState } from "react";
const crewData = data.crew;

export default function Crew() {
  const [showCurrentMember, setShowCurrentMember] = useState("Douglas Hurley");
  const currentMember = crewData.find(
    (member) => member.name === showCurrentMember
  );
  const memberNames = crewData.map((member) => member.name);
  const changeCurrentMember = (name: string) => {
    setShowCurrentMember(name);
  };
  return (
    <section className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1445px] mx-auto px-6 sm:px-20 xl:px-10">
      <div className="text-white pb-16  pt-36 lg:pt-50">
        <MainHeading title="MEET YOUR CREW" headingNum="02" />
        <Member
          name={currentMember?.name}
          img={currentMember?.images}
          role={currentMember?.role}
          bio={currentMember?.bio}
          memberNames={memberNames}
          changeCurrentMember={changeCurrentMember}
        />
      </div>
    </section>
  );
}
