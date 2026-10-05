export default function Loading() {
  return (
    <section className="page-loader" aria-live="polite" aria-busy="true" aria-label="Loading page">
      <div className="page-loader-logo" aria-hidden="true">
        <img src="/images/mpho-logo-white.png" alt="" />
      </div>
      <span className="sr-only">Loading page</span>
    </section>
  );
}
