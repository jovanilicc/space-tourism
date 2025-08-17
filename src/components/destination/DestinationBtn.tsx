import { motion } from "motion/react";
type DestinationBtnProps = {
  name: string;
  isActive: boolean;
  changeCurrentDestination: (name: string) => void;
};
export default function DestinationBtn({
  name,
  isActive,
  changeCurrentDestination,
}: DestinationBtnProps) {
  return (
    <button
      onClick={() => changeCurrentDestination(name)}
      className={`cursor-pointer relative`}
      aria-label={name}
    >
      {" "}
      {name.toUpperCase()}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="-bottom-2 absolute h-1 bg-white w-full"
        ></motion.div>
      )}
    </button>
  );
}
