import type { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold text-slate-950">FinPilot Financeiro</p>
            <p className="text-sm text-slate-500">Plataforma financeira</p>
          </div>
          <div className="rounded-full bg-brand-700 px-4 py-2 text-sm font-medium text-white">
            MVP
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

