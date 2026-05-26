// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import Header from "../components/layout/Header/Header.jsx";
import Footer from "../components/layout/Footer/Footer.jsx";
import ProductSpecs from "../views/ProductSpecs/ProductSpecs.jsx";
import Categories from "../views/Categories/Categories.jsx"; // Add this import

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductSpecs />} />
          <Route path="/categories" element={<Categories />} />{" "}
          {/* Add this route */}
          {/* Optional: Add a route for "casual" category specifically */}
          <Route path="/category/casual" element={<Categories />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
