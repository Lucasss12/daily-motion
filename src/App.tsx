import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DesignDay from "./pages/designDay";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day/:id" element={<DesignDay />} />
    </Routes>
  );
}
