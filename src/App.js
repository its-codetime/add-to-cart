import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import Toolbar from "@mui/material/Toolbar";
import { MainBox } from "./components/StyledComponents.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainBox>
        <Toolbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </MainBox>
      <Footer />
    </div>
  );
}
