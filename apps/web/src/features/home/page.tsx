import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Card } from "../../components/ui/Card";

const highlights = [
  {
    title: "Dashboard que parece produto",
    description:
      "Resumo financeiro, gráficos, alertas e visão rápida da saúde do mês em uma interface pronta para portfólio.",
  },
  {
    title: "CRUD com regras de negócio",
    description:
      "Receitas, despesas, categorias e limites mensais com persistência real e fluxo de autenticação completo.",
  },
  {
    title: "Base pronta para evolução",
    description:
      "Estrutura preparada para recorrências, exportação, metas, notificações e recursos com IA.",
  },
];

const portfolioPoints = [
  "Autenticação com JWT",
  "Modelagem relacional com Prisma",
  "Dashboard profissional com gráficos",
  "Controle de categorias e limites",
];

export function HomePage() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,164,0.18),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)]">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-900 shadow-sm">
            FinPilot Financeiro
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Organize finanças com clareza, ritmo e cara de produto.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Uma plataforma para controlar receitas, despesas, categorias, limites mensais e
              analisar gastos em um dashboard visual, prática para uso real e forte para
              apresentação em portfólio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-brand-700 px-6 py-3 font-medium text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-900"
              to={user ? "/dashboard" : "/register"}
            >
              {user ? "Abrir painel" : "Criar conta"}
            </Link>
            <Link
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
              to="/login"
            >
              Entrar na demo
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "CRUD", value: "Completo" },
              { label: "Dashboard", value: "Profissional" },
              { label: "Banco", value: "Persistente" },
              { label: "IA", value: "Base pronta" },
            ].map((item) => (
              <Card key={item.label}>
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
                  Visão geral
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                  Painel pronto para screenshot.
                </h2>
              </div>
              <div className="rounded-2xl bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800">
                Demo ativa
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-slate-400">Saldo atual</p>
                <p className="mt-2 text-3xl font-semibold">R$ 8.420</p>
                <p className="mt-2 text-sm text-emerald-300">+12,4% no mês</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Alertas inteligentes</p>
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-full rounded-full bg-slate-200">
                    <div className="h-3 w-[78%] rounded-full bg-brand-700" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-200">
                    <div className="h-3 w-[54%] rounded-full bg-teal-500" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-200">
                    <div className="h-3 w-[32%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-3xl bg-gradient-to-r from-teal-50 via-slate-50 to-indigo-50 p-5">
              <p className="text-sm font-medium text-slate-500">Conta demo</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">ana@finpilot.com</p>
              <p className="text-sm text-slate-500">Senha: 123456</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-12 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title}>
            <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </Card>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            O que o projeto prova
          </p>
          <div className="mt-5 grid gap-3">
            {portfolioPoints.map((point) => (
              <div key={point} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Próximas evoluções
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Metas financeiras",
              "Contas recorrentes",
              "Exportação PDF/CSV",
              "Categorização com IA",
              "Resumo mensal com IA",
              "Multiusuário",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
