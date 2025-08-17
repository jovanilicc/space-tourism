import Destination from "./Destination";
import data from "../../../data.json";
import { useState } from "react";
import MainHeading from "../MainHeading";
const destinationData = data.destinations;

export default function Destinations() {
  const [showCurrentDestination, setShowCurrentDestination] = useState("Moon");
  const currentDestination = destinationData.find(
    (destination) => destination.name === showCurrentDestination
  );
  const placeNames = destinationData.map((item) => item.name);
  const changeCurrentDestination = (name: string) => {
    setShowCurrentDestination(name);
  };
  return (
    <section className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1445px] mx-auto px-6 sm:px-20 xl:px-10">
      <div className="text-white pb-16  pt-36 lg:pt-50">
        <MainHeading title="PICK YOUR DESTINATION" headingNum="01" />
        <Destination
          name={currentDestination?.name}
          img={currentDestination?.images}
          description={currentDestination?.description}
          distance={currentDestination?.distance}
          travel={currentDestination?.travel}
          placeNames={placeNames}
          changeCurrentDestination={changeCurrentDestination}
        />
      </div>
    </section>
  );
}
