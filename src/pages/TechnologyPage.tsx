import Technologies from "../components/technology/Technologies";

export default function TechnologyPage() {
  return (
    <main className="bg-[url(/images/background-technology-tablet.jpg)] lg:bg-[url(/images/background-technology-desktop.jpg)] lg:bg-right 2xl:bg-center bg-cover bg-no-repeat">
      <div className="min-h-screen">
        <Technologies />
      </div>
    </main>
  );
}
