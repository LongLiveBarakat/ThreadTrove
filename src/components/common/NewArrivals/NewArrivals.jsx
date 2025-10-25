import "../NewArrivals/NewArrivals.scss";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const NewArrivals = () => {
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
      <div className="new-arrivals">
        <h1 className="new-arrivals-title">NEW ARRIVALS</h1>
        <div className="new-arrivals-products">
          {products.slice(0, visibleProducts).map((product) => {
            return (
              <Link
                className="product-link"
                key={product.id}
                to={`/product/${product.id}`}
              >
                <div className="product">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
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

export default NewArrivals;
