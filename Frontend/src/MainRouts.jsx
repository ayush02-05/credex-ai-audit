import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Result = lazy(() => import("./components/Result"));
const SpendForm = lazy(() => import("./components/SpendForm"));

export default function MainRouts() {
  return (
    <Routes>
      <Route path="/" element={<SpendForm />} />
      <Route path="/result/:auditId" element={<Result />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
