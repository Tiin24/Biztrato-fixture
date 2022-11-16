import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
