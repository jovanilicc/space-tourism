import Destinations from "../components/destination/Destinations";

export default function DestinationPage() {
  return (
    <main className="bg-[url(/images/background-destination-tablet.jpg)] lg:bg-[url(/images/background-destination-desktop.jpg)] lg:bg-right 2xl:bg-center bg-cover bg-no-repeat">
      <div className="min-h-screen">
        <Destinations />
      </div>
    </main>
  );
}
