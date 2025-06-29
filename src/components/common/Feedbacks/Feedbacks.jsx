import "../Feedbacks/Feedbacks.scss";
import starImage from "../../../assets/images/Star.svg";
import checkMark from "../../../assets/images/check.svg";
import arrowLeft from "../../../assets/images/arrow-left.svg";
import arrowRight from "../../../assets/images/arrow-right.svg";

const reviews = [
  {
    id: 1,
    customerName: "Ahmed",
    description:
      "I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    starsCount: 5,
    isVerified: true,
  },
  {
    id: 2,
    customerName: "Ahmed",
    description:
      "I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    starsCount: 5,
    isVerified: true,
  },
  {
    id: 3,
    customerName: "Ahmed",
    description:
      "I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    starsCount: 5,
    isVerified: true,
  },
  {
    id: 4,
    customerName: "Ahmed",
    description:
      "I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    starsCount: 5,
    isVerified: true,
  },
  {
    id: 5,
    customerName: "Ahmed",
    description:
      "I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    starsCount: 5,
    isVerified: true,
  },
  {
    id: 6,
    customerName: "Ahmed",
    description:
      "I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    starsCount: 5,
    isVerified: true,
  },
];

const Feedbacks = () => {
  return (
    <>
      <div className="reviews-title">
        <h1>OUR HAPPY CUSTOMERS</h1>
        <div className="arrows">
          <img src={arrowLeft} alt="Left Arrow" />
          <img src={arrowRight} alt="Right Arrow" />
        </div>
      </div>

      <div className="review-boxes">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="review-box">
              <div className="review-rate">
                {[...Array(review.starsCount)].map((_, index) => (
                  <img className="star" src={starImage} key={index} />
                ))}
              </div>
              <div className="customer-name">
                <h1>{review.customerName}</h1>
                {review.isVerified && <img src={checkMark} alt="Verified" />}
              </div>
              <p className="description">{review.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feedbacks;
