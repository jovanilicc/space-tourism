type NextTechnologyBtnProps = {
  name: string;
  isActive: boolean;
  slideNum: number;
  changeCurrentTechnology: (name: string) => void;
};

export default function NextTechnologyBtn({
  name,
  isActive,
  slideNum,
  changeCurrentTechnology,
}: NextTechnologyBtnProps) {
  return (
    <button
      onClick={() => changeCurrentTechnology(name)}
      className={`cursor-pointer`}
      aria-label={`${name}.`}
    >
      {" "}
      <div
        className={`${
          isActive && "bg-white text-black"
        } size-14 lg:size-20 rounded-full border-1 border-white/25 hover:border-white/75 transition flex items-center justify-center`}
      >
        {slideNum}
      </div>
    </button>
  );
}
