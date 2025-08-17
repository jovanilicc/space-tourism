import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <main className="bg-primary-dark-blue min-h-screen">
      <section className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1480px] pt-54 mx-auto px-6  xl:px-10">
        <div className="mx-auto max-w-3xl text-center bg-primary-light-blue p-5 rounded-2xl font-bold">
          <h1 className="text-4xl font-barlow text-white">Error: 404</h1>
          <p className="text-white font-barlow pt-2">
            Ooops, there was an issue. Click the button to return to home.
            <Link
              to="/"
              className="border-2 p-2 rounded-2xl bg-blue-950 border-primary-dark-blue hover:bg-blue-900 transition block max-w-xs text-2xl mx-auto mt-5 cursor-pointer"
            >
              Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
