type NextMemberBtnProps = {
  name: string;
  isActive: boolean;
  changeCurrentMember: (name: string) => void;
};
export default function NextMemberBtn({
  name,
  isActive,
  changeCurrentMember,
}: NextMemberBtnProps) {
  return (
    <button
      onClick={() => changeCurrentMember(name)}
      className={`cursor-pointer relative `}
      aria-label={`Crew member: ${name}.`}
    >
      {" "}
      <div className="bg-white/25 hover:bg-white/50 transition size-3 lg:size-4 rounded-full">
        {isActive && (
          <div className="size-3 lg:size-4 bg-white rounded-full"></div>
        )}
      </div>
    </button>
  );
}
