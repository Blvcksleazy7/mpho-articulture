export default function Loading() {
  return (
    <section className="page-loader" aria-live="polite" aria-busy="true" aria-label="Loading page">
      <div className="page-loader-mark" aria-hidden="true">
        <span>MPHO</span>
        <span>HLUNGWANE</span>
      </div>
      <div className="page-loader-status">
        <span>Preparing the exhibition</span>
        <i aria-hidden="true"><b /><b /><b /></i>
      </div>
    </section>
  );
}
