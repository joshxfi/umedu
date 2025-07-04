export function HighlightText({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {children}
      </code>{" "}
    </>
  );
}
