export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-lg text-foreground">Vertex</span>
          <span className="h-px w-6 bg-gold" />
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Design
          </span>
        </div>
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} Vertex Exterior Design. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
