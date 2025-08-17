import Crew from "../components/crew/Crew";

export default function CrewPage() {
  return (
    <main className="bg-[url(/images/background-crew-tablet.jpg)] lg:bg-[url(/images/background-crew-desktop.jpg)] lg:bg-right 2xl:bg-center bg-cover bg-no-repeat">
      <div className="min-h-screen">
        <Crew />
      </div>
    </main>
  );
}
