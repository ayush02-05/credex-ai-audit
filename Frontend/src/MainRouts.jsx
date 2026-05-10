import { Routes, Route, Navigate } from "react-router-dom";
import SpendForm from "./components/SpendForm";
import Result from "./components/Result";

export default function MainRouts() {
  return (
    <Routes>
      <Route path="/" element={<SpendForm />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
