import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedShell } from "./components/layout/ProtectedShell";
import { PublicShell } from "./components/layout/PublicShell";
import { RequireAuth } from "./components/RequireAuth";
import { LoginPage } from "./features/auth/login-page";
import { RegisterPage } from "./features/auth/register-page";
import { DashboardPage } from "./features/dashboard/page";
import { TransactionsPage } from "./features/transactions/page";
import { CategoriesPage } from "./features/categories/page";
import { BudgetsPage } from "./features/budgets/page";

export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicShell>
            <LoginPage />
          </PublicShell>
        }
      />
      <Route
        path="/register"
        element={
          <PublicShell>
            <RegisterPage />
          </PublicShell>
        }
      />
      <Route
        element={
          <RequireAuth>
            <ProtectedShell />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/budgets" element={<BudgetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
