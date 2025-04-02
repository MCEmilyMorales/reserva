import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import { Rutas } from "./routes";
function App() {
  return (
    <>
      <Navbar />
      <Rutas />
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
