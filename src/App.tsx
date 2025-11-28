import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./pages/header/NavBar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Welcome from "./pages/status/Welcome";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
