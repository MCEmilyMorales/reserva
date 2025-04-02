import { Route, Routes } from "react-router-dom";
import Question from "../components/question/Question";
import LandingPage from "../components/landing/LandingPage";
import Acceso from "../components/formularios/Acceso";
import { RegistroUsuario } from "../components/features/RegistroUsuario";
import Reserva from "../components/formularios/Reserva";

export function Rutas() {
  return (
    <Routes>
      <Route path="preguntas" element={<Question />} />
      <Route path="landing" element={<LandingPage />} />
      <Route path="formularios/acceso" element={<Acceso />} />
      <Route path="formularios/registro" element={<RegistroUsuario />} />
      <Route path="formularios/reserva" element={<Reserva />} />
    </Routes>
  );
}
