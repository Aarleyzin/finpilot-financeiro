import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export function RequireAuth({ children }: { children: ReactElement }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-6 text-slate-600">Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
