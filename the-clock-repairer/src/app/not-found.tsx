import { Button, Eyebrow } from "@/components/Primitives";

/* A dial frozen at the moment the page went missing */
function StoppedDial() {
  return (
    <svg className="stopped" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="96" className="stopped__bezel" />
      <circle cx="100" cy="100" r="86" className="stopped__face" />
      {Array.from({ length: 60 }).map((_, i) => (
        <line key={i} x1="100" y1="18" x2="100" y2={i % 5 === 0 ? 27 : 22} transform={`rotate(${i * 6} 100 100)`} className="stopped__tick" />
      ))}
      <line x1="100" y1="100" x2="100" y2="50" transform="rotate(122 100 100)" className="stopped__hand stopped__hand--h" />
      <line x1="100" y1="100" x2="100" y2="32" transform="rotate(240 100 100)" className="stopped__hand" />
      <circle cx="100" cy="100" r="5" className="stopped__cap" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="wrap notfound__inner">
        <StoppedDial />
        <div>
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="h1">
            This page has <em>stopped</em>
          </h1>
          <p className="lede">
            The page you were looking for has been moved or no longer exists. Let us wind you back to somewhere useful.
          </p>
          <div className="notfound__actions">
            <Button href="/">Back to home</Button>
            <Button href="/contact" variant="outline">
              Contact the workshop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
