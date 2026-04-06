import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "../../components/ui/Card";

const monthlyFlow = [
  { month: "Jan", income: 9200, expense: 6200 },
  { month: "Fev", income: 9800, expense: 6800 },
  { month: "Mar", income: 10200, expense: 7100 },
  { month: "Abr", income: 11500, expense: 7600 },
  { month: "Mai", income: 11800, expense: 7900 },
];

const categoryPie = [
  { name: "Moradia", value: 2400, color: "#0f766e" },
  { name: "Alimentação", value: 1350, color: "#14b8a6" },
  { name: "Transporte", value: 880, color: "#f59e0b" },
  { name: "Lazer", value: 620, color: "#ef4444" },
];

const insights = [
  {
    title: "Assinaturas",
    value: "R$ 289",
    detail: "12% do limite da categoria de recorrentes",
  },
  {
    title: "Meta de reserva",
    value: "R$ 4.250",
    detail: "85% da meta mensal atingida",
  },
  {
    title: "Gastos variáveis",
    value: "R$ 2.680",
    detail: "Redução de 8% vs. mês anterior",
  },
];

export function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8">
      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <p className="text-sm text-slate-500">Saldo atual</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">R$ 8.420</p>
          <p className="mt-1 text-sm text-emerald-600">+12,4% no mês</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Entradas</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">R$ 12.600</p>
          <p className="mt-1 text-sm text-slate-500">Receitas registradas</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Saídas</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">R$ 4.180</p>
          <p className="mt-1 text-sm text-rose-600">-3,1% no mês</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Limites ativos</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">7</p>
          <p className="mt-1 text-sm text-slate-500">3 com alerta de uso</p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Fluxo mensal</h2>
              <p className="text-sm text-slate-500">Entradas x saídas nos últimos meses</p>
            </div>
          </div>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyFlow}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#0f766e" strokeWidth={3} />
                <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-slate-950">Uso por categoria</h2>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryPie} dataKey="value" innerRadius={70} outerRadius={110} paddingAngle={4}>
                  {categoryPie.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-lg font-semibold text-slate-950">Alertas inteligentes</h2>
          <div className="mt-4 space-y-4">
            {insights.map((insight) => (
              <div key={insight.title} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-950">{insight.title}</p>
                  <p className="text-sm font-semibold text-brand-700">{insight.value}</p>
                </div>
                <p className="mt-1 text-sm text-slate-500">{insight.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-slate-950">Distribuição de gastos</h2>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryPie}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                  {categoryPie.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>
    </main>
  );
}
