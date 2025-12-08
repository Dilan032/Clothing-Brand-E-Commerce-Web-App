import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./pages/header/NavBar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Welcome from "./pages/status/Welcome";
import Home from "./pages/Home";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payment/Payment";
import OrderSuccess from "./pages/payment/OrderSuccess";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/success" element={<OrderSuccess />} />
        
      </Routes>
    </>
  );
}

export default App;
