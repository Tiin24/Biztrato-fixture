import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
