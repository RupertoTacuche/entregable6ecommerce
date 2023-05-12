import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Header from "./components/Layout/Header";
import Notfound from "./Pages/Notfound";
import { ProtectedAuth } from "./components/auth/ProtectedAuth";
import { Purchases } from "./Pages/Purchases";
import { Cart } from "./components/cart/Cart";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedAuth />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
        <Route path="/products/:id" element={<Product />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer/>
      <Cart />
    </section>
  );
}

export default App;
