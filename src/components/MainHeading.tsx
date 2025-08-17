type MainHeadingProps = {
  title: string;
  headingNum: string;
};
export default function MainHeading({ title, headingNum }: MainHeadingProps) {
  return (
    <h1 className="font-barlow-condensed pb-16 text-center md:text-left text-2xl lg:text-3xl tracking-widest lg:pb-37">
      <span className="text-white/25 font-semibold mr-5 lg:mr-0">
        {headingNum}
      </span>{" "}
      {title.toUpperCase()}
    </h1>
  );
}
