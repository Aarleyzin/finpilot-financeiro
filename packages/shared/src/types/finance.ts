export type TransactionKind = "income" | "expense";

export type CurrencyCode = "BRL" | "USD" | "EUR";

export interface FinanceSummary {
  balance: number;
  incomeTotal: number;
  expenseTotal: number;
  periodStart: string;
  periodEnd: string;
}
