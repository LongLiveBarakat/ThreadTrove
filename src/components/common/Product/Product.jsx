import "../Product/Product.scss";

const Product = (props) => {
  const { image, title, price } = props;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
    </div>
  );
};

export default Product;
