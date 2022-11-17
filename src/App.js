import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from "./Components/Landing/Landing";
import F_grupos from "./Components/Face de Grupos/F_grupos";
import F_final from "./Components/Face Final/F_final";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Fase de grupos" element={<F_grupos/>} />
        <Route path="/Fase final" element={<F_final/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
