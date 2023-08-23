import "@stripe/stripe-js";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PruductPage from "./pages/PruductPage";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import Cart from "./pages/Cart";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import SearchPage from "./pages/SearchPage";

export default function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Fotter />
      </>
    );
  };
  return (
    <div>
      <Routes basename="/">
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="product/:name" element={<PruductPage />} />
          <Route path="product/:name/:id" element={<PruductPage />} />
          <Route path="about" element={<About />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="search/:word" element={<SearchPage />} />
        </Route>
        <Route path="success" element={<Success />} />
      </Routes>
    </div>
  );
}
