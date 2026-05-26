import { useParams } from "react-router-dom";
import "../ProductSpecs/ProductSpecs.scss";
import { useEffect, useState } from "react";
import SizeBtn from "../../components/common/Buttons/SizeBtn/SizeBtn.jsx";
import Counter from "../../components/common/Buttons/Counter/Counter.jsx";
import AddToCart from "../../components/common/Buttons/AddToCart/AddToCart.jsx";
import star from "../../assets/images/product-detail-images/Star 1.svg";
import halfStar from "../../assets/images/product-detail-images/Star 5.svg";
import check from "../../assets/images/product-detail-images/check.svg";

const REVIEWS = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 4.5,
    verified: true,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    verified: true,
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 3.5,
    verified: true,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "August 16, 2023",
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 4,
    verified: true,
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "August 17, 2023",
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 5,
    verified: true,
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "August 18, 2023",
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 4.5,
    verified: true,
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "August 19, 2023",
  },
];

const REVIEWS_PER_PAGE = 6;

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="review-stars">
      {Array.from({ length: full }, (_, i) => (
        <span key={`full-${i}`} className="star star--full">
          ★
        </span>
      ))}
      {half && <span className="star star--half">★</span>}
      {Array.from({ length: empty }, (_, i) => (
        <span key={`empty-${i}`} className="star star--empty">
          ★
        </span>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <div className="review-card__header">
      <StarRating rating={review.rating} />
      <button className="review-card__menu" aria-label="More options">
        ···
      </button>
    </div>
    <div className="review-card__author">
      <span className="review-card__name">{review.name}</span>
      {review.verified && (
        <span className="review-card__verified" title="Verified Purchase">
          ✓
        </span>
      )}
    </div>
    <p className="review-card__text">"{review.text}"</p>
    <p className="review-card__date">Posted on {review.date}</p>
  </div>
);

const ProductSpecs = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState(REVIEWS);
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);
  const [sortBy, setSortBy] = useState("Latest");
  const [filterOpen, setFilterOpen] = useState(false);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(0);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formText, setFormText] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen]);

  const openModal = () => {
    setFormName("");
    setFormRating(0);
    setFormHoverRating(0);
    setFormText("");
    setFormError("");
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleAddReview = () => {
    if (!formName.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (formRating === 0) {
      setFormError("Please select a star rating.");
      return;
    }
    if (!formText.trim()) {
      setFormError("Please write your review.");
      return;
    }

    const today = new Date();
    const dateStr = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newReview = {
      id: Date.now(),
      name: formName.trim(),
      rating: formRating,
      verified: false,
      text: formText.trim(),
      date: dateStr,
    };

    setReviews((prev) => [newReview, ...prev]);
    setVisibleCount((prev) => prev + 1);
    closeModal();
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const fullStars = (rating) => Math.floor(rating);
  const hasHalfStar = (rating) => rating % 1 !== 0;

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "Latest") return b.id - a.id;
    if (sortBy === "Top Rated") return b.rating - a.rating;
    if (sortBy === "Oldest") return a.id - b.id;
    return 0;
  });

  const visibleReviews = sortedReviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

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

      {/* ── Rating & Reviews Section ── */}
      <div className="reviews-section">
        {/* Tab Bar */}
        <div className="reviews-tabs">
          <button className="reviews-tab">Product Details</button>
          <button className="reviews-tab reviews-tab--active">
            Rating &amp; Reviews
          </button>
          <button className="reviews-tab">FAQs</button>
        </div>

        {/* Controls Row */}
        <div className="reviews-controls">
          <h2 className="reviews-heading">
            All Reviews{" "}
            <span className="reviews-count">({reviews.length})</span>
          </h2>
          <div className="reviews-actions">
            <button
              className="reviews-filter-btn"
              onClick={() => setFilterOpen(!filterOpen)}
              aria-label="Filter reviews"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="11" y1="18" x2="13" y2="18" />
              </svg>
            </button>
            <div className="reviews-sort">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="reviews-sort__select"
              >
                <option>Latest</option>
                <option>Top Rated</option>
                <option>Oldest</option>
              </select>
            </div>
            <button className="reviews-write-btn" onClick={openModal}>
              Write a Review
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="reviews-grid">
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="reviews-load-more">
            <button
              className="reviews-load-more__btn"
              onClick={() => setVisibleCount((prev) => prev + REVIEWS_PER_PAGE)}
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>

      {/* ── Write a Review Modal ── */}
      {modalOpen && (
        <div className="review-modal-overlay" onClick={closeModal}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="review-modal__header">
              <h3 className="review-modal__title">Write a Review</h3>
              <button
                className="review-modal__close"
                onClick={closeModal}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="review-modal__field">
              <label className="review-modal__label">Your Name</label>
              <input
                className="review-modal__input"
                type="text"
                placeholder="e.g. John D."
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>

            <div className="review-modal__field">
              <label className="review-modal__label">Rating</label>
              <div className="review-modal__stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`review-modal__star ${
                      n <= (formHoverRating || formRating)
                        ? "review-modal__star--active"
                        : ""
                    }`}
                    onMouseEnter={() => setFormHoverRating(n)}
                    onMouseLeave={() => setFormHoverRating(0)}
                    onClick={() => setFormRating(n)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="review-modal__field">
              <label className="review-modal__label">Your Review</label>
              <textarea
                className="review-modal__textarea"
                placeholder="Share your experience with this product..."
                value={formText}
                onChange={(e) => setFormText(e.target.value)}
                rows={5}
              />
            </div>

            {formError && <p className="review-modal__error">{formError}</p>}

            <button className="review-modal__submit" onClick={handleAddReview}>
              Add Review
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSpecs;
