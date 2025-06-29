import "../Home/Home.scss";
import NewArrivals from "../../components/common/NewArrivals/NewArrivals.jsx";
import Rectangle from "../../assets/images/Rectangle.png";
import calvin from "../../assets/images/brands/calvin.svg";
import guccilogo11 from "../../assets/images/brands/gucci-logo-1.svg";
import pradalogo11 from "../../assets/images/brands/prada-logo-1.svg";
import versachi from "../../assets/images/brands/versachi.svg";
import zaralogo11 from "../../assets/images/brands/zara-logo-1.svg";
import TopSelling from "../../components/common/TopSelling/TopSelling.jsx";
import Categories from "../../components/common/Categories/Categories.jsx";
import Feedbacks from "../../components/common/Feedbacks/Feedbacks.jsx";

const Home = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "700px",
        }}
      >
        <h1 className="main-title">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="paragraph">
          Browse through our diverse range of meticulously crafted garments,
          designed <br /> to bring out your individuality and cater to your
          sense of style.
        </p>
        <button className="shop-now-btn">Shop Now</button>
        <div className="statics">
          <div>
            <h1>200+</h1>
            <p>International Brands</p>
          </div>
          <div>
            <h1>2,000+</h1>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h1>30,000+</h1>
            <p>Happy Customers</p>
          </div>
        </div>

        {/* <div className="right-side">
          <img src={Rectangle} alt="" />
        </div> */}
      </div>
      <div className="brands">
        <img src={versachi} alt="" />
        <img src={zaralogo11} alt="" />
        <img src={guccilogo11} alt="" />
        <img src={pradalogo11} alt="" />
        <img src={calvin} alt="" />
      </div>
      <NewArrivals />
      <TopSelling />
      <Categories />
      <Feedbacks />
    </>
  );
};

export default Home;
