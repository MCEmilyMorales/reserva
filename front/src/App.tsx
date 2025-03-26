import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Acceso from "./components/formularios/Acceso";
import Registro from "./components/formularios/Registro";
import Reserva from "./components/formularios/Reserva";
import LandingPage from "./components/landing/LandingPage";
import Question from "./components/question/Question";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="preguntas" element={<Question />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="formularios/acceso" element={<Acceso />} />
        <Route path="formularios/registro" element={<Registro />} />
        <Route path="formularios/reserva" element={<Reserva />} />
      </Routes>
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
