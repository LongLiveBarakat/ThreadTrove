// Categories.jsx
import React from "react";
import "./Categories.scss";

export const Categories = () => {
  return (
    <div className="categories-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span>Home</span> &gt; <span className="active">Casual</span>
      </div>

      <div className="container">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <h3>Filters</h3>

          {/* Category Filters */}
          <div className="filter-section">
            <div className="filter-category">
              <span>T-shirts</span>
              <span className="arrow">›</span>
            </div>
            <div className="filter-category">
              <span>Shorts</span>
              <span className="arrow">›</span>
            </div>
            <div className="filter-category">
              <span>Shirts</span>
              <span className="arrow">›</span>
            </div>
            <div className="filter-category">
              <span>Hoodie</span>
              <span className="arrow">›</span>
            </div>
            <div className="filter-category">
              <span>Jeans</span>
              <span className="arrow">›</span>
            </div>
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <div className="section-header">
              <span>Price</span>
              <span className="arrow-down">⌵</span>
            </div>
            <input type="range" min="0" max="200" className="price-slider" />
            <div className="price-labels">
              <span>$0</span>
              <span>$200</span>
            </div>
          </div>

          {/* Colors Filter */}
          <div className="filter-section">
            <div className="section-header">
              <span>Colors</span>
              <span className="arrow-down">⌵</span>
            </div>
            <div className="color-options">
              <div className="color-circle red"></div>
              <div className="color-circle blue"></div>
              <div className="color-circle green"></div>
              <div className="color-circle yellow"></div>
              <div className="color-circle purple"></div>
              <div className="color-circle black"></div>
              <div className="color-circle white"></div>
              <div className="color-circle brown"></div>
            </div>
          </div>

          {/* Size Filter */}
          <div className="filter-section">
            <div className="section-header">
              <span>Size</span>
              <span className="arrow-down">⌵</span>
            </div>
            <div className="size-options">
              <span className="size-btn">XX-Small</span>
              <span className="size-btn">Small</span>
              <span className="size-btn">Medium</span>
              <span className="size-btn">Large</span>
              <span className="size-btn">XX-Large</span>
              <span className="size-btn">3X-Large</span>
            </div>
          </div>

          {/* Dress Style Filter */}
          <div className="filter-section">
            <div className="section-header">
              <span>Dress Style</span>
              <span className="arrow-down">⌵</span>
            </div>
            <div className="style-options">
              <div className="style-item">
                <span>Casual</span>
                <span className="arrow">›</span>
              </div>
              <div className="style-item">
                <span>Formal</span>
                <span className="arrow">›</span>
              </div>
              <div className="style-item">
                <span>Party</span>
                <span className="arrow">›</span>
              </div>
              <div className="style-item">
                <span>Gym</span>
                <span className="arrow">›</span>
              </div>
            </div>
          </div>

          {/* Apply Filter Button */}
          <button className="apply-filter-btn">Apply Filter</button>
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          <h1 className="category-title">Casual</h1>

          <div className="products-grid">
            {/* Product Card 1 */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Gradient Graphic T-shirt</h4>
              <div className="rating">
                <span className="stars">★★★★</span>
                <span className="rating-value">3.5/5</span>
              </div>
              <div className="price">$145</div>
            </div>

            {/* Product Card 2 */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Polo with Tipping Details</h4>
              <div className="rating">
                <span className="stars">★★★★</span>
                <span className="rating-value">4.5/5</span>
              </div>
              <div className="price">$180</div>
            </div>

            {/* Product Card 3 - with discount */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Black Striped T-shirt</h4>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="rating-value">5.0/5</span>
              </div>
              <div className="price">
                <span className="current-price">$120</span>
                <span className="original-price">$171</span>
                <span className="discount">-30%</span>
              </div>
            </div>

            {/* Product Card 4 - with discount */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Skinny Fit Jeans</h4>
              <div className="rating">
                <span className="stars">★★★★</span>
                <span className="rating-value">3.5/5</span>
              </div>
              <div className="price">
                <span className="current-price">$240</span>
                <span className="original-price">$300</span>
                <span className="discount">-20%</span>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Checked Shirt</h4>
              <div className="rating">
                <span className="stars">★★★★</span>
                <span className="rating-value">4.5/5</span>
              </div>
              <div className="price">$180</div>
            </div>

            {/* Product Card 6 - with discount */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Sleeve Striped T-shirt</h4>
              <div className="rating">
                <span className="stars">★★★★</span>
                <span className="rating-value">4.5/5</span>
              </div>
              <div className="price">
                <span className="current-price">$130</span>
                <span className="original-price">$186</span>
                <span className="discount">-30%</span>
              </div>
            </div>

            {/* Product Card 7 - with discount */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Vertical Striped Shirt</h4>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="rating-value">5.0/5</span>
              </div>
              <div className="price">
                <span className="current-price">$212</span>
                <span className="original-price">$265</span>
                <span className="discount">-20%</span>
              </div>
            </div>

            {/* Product Card 8 */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Courage Graphic T-shirt</h4>
              <div className="rating">
                <span className="stars">★★★★</span>
                <span className="rating-value">4.0/5</span>
              </div>
              <div className="price">$145</div>
            </div>

            {/* Product Card 9 */}
            <div className="product-card">
              <div className="product-image placeholder"></div>
              <h4>Loose Fit Bermuda Shorts</h4>
              <div className="rating">
                <span className="stars">★★★</span>
                <span className="rating-value">3.0/5</span>
              </div>
              <div className="price">$80</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Categories;
