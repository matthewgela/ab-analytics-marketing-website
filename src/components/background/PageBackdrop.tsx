export default function PageBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface-page"
      aria-hidden="true"
    >
      <div className="grid-bg absolute inset-0 opacity-[0.04]" />
    </div>
  );
}
