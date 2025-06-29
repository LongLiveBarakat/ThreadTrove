import "../TopSelling/TopSelling.scss";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const TopSelling = () => {
  const [products, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  const handleViewAll = () => {
    setVisibleProducts(products.length);
  };
  return (
    <>
      <div className="top-selling">
        <h1 className="top-selling-title">TOP SELLING</h1>
        <div className="top-selling-products">
          {products.slice(0, visibleProducts).map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Product
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            );
          })}
        </div>
        {visibleProducts < products.length && (
          <button className="view-all-btn" onClick={handleViewAll}>
            View All
          </button>
        )}
      </div>
    </>
  );
};

export default TopSelling;
