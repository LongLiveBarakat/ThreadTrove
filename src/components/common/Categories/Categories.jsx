import "../Categories/Categories.scss";

const Categories = () => {
  return (
    <div className="category">
      <div className="title">
        <h1>BROWSE BY DRESS STYLE</h1>
      </div>
      <div className="images">
        <div className="casual-formal">
          <div className="casual">
            <p>Casual</p>
          </div>
          <div className="formal">
            <p>Formal</p>
          </div>
        </div>
        <div className="party-gym">
          <div className="party">
            <p>Party</p>
          </div>
          <div className="gym">
            <p>Gym</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
