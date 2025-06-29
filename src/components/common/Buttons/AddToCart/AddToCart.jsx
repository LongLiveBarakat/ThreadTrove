import "../AddToCart/AddToCart.scss";
import PropType from "prop-types";

const AddToCart = ({ paddingX }) => {
  const buttonStyle = {
    padding: `0.9rem ${paddingX}`,
  };

  return <button style={buttonStyle}>Add To Cart</button>;
};
AddToCart.prototype = {
  paddingX: PropType.string.isRequired,
};

export default AddToCart;
