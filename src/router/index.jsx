import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import Header from "../components/layout/Header/Header.jsx";
import Footer from "../components/layout/Footer/Footer.jsx";
import ProductSpecs from "../views/ProductSpecs/ProductSpecs.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductSpecs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
