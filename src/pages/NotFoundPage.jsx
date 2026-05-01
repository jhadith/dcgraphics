import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="container-page grid min-h-[55vh] place-items-center py-20 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-signal">404</p>
        <h1 className="mt-3 font-display text-4xl font-black text-ink">Page not found</h1>
        <p className="mt-4 text-graphite">The page you are looking for is not available.</p>
        <Link className="focus-ring mt-8 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
