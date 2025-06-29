import { useParams } from "react-router-dom";
import "../ProductSpecs/ProductSpecs.scss";
import { useEffect, useState } from "react";
import SizeBtn from "../../components/common/Buttons/SizeBtn/SizeBtn.jsx";
import Counter from "../../components/common/Buttons/Counter/Counter.jsx";
import AddToCart from "../../components/common/Buttons/AddToCart/AddToCart.jsx";
import star from "../../assets/images/product-detail-images/Star 1.svg";
import halfStar from "../../assets/images/product-detail-images/Star 5.svg";
import check from "../../assets/images/product-detail-images/check.svg";

const ProductSpecs = () => {
  const { id } = useParams();
  console.log("Product ID:", id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const fullStars = (rating) => Math.floor(rating);
  const hasHalfStar = (rating) => rating % 1 !== 0;

  return (
    <>
      <div className="navigation-history">
        <h1>Home &gt; Shop &gt; Men &gt; T-shirts</h1>
      </div>

      <div className="product-detail-container">
        <div className="product-images">
          <div className="product-vertical-images">
            <img src={product.image} alt={product.title} />
            <img src={product.image} alt={product.title} />
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-main-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="product-info">
          <h1 className="product-info-title">{product.title}</h1>
          <div className="ratings">
            <div className="rating-stars">
              <div>
                {Array.from(
                  { length: fullStars(product.rating.rate) },
                  (_, index) => (
                    <img src={star} alt="Star" key={`full-${index}`} />
                  )
                )}
                {hasHalfStar(product.rating.rate) && (
                  <img src={halfStar} alt="Half Star" />
                )}
              </div>
              <span>{product.rating.rate}/5 </span>
            </div>
          </div>
          <div className="product-price">
            <span className="current-price">${product.price}</span>
            <span className="old-price">$300</span>
            <span className="sale-amount"> -40% </span>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-colors">
            <p>Select Colors</p>
            <div className="colors">
              <span className="color-1">
                <img src={check} alt="" />
              </span>
              <span className="color-2">
                <img src={check} alt="" />
              </span>
              <span className="color-3">
                <img src={check} alt="" />
              </span>
            </div>
          </div>
          <div className="product-size">
            <p>Choose Size</p>
            <SizeBtn text="Small" key="size-small" />
            <SizeBtn text="Medium" key="size-medium" />
            <SizeBtn text="Large" key="size-large" />
            <SizeBtn text="X-Large" key="size-xlarge" />
          </div>
          <div className="add-product">
            <Counter />
            <AddToCart paddingX="10rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSpecs;
