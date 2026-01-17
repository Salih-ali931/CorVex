import "./ProductReview.css";

const ProductReview = ({ rating, totalReviews }) => {
  return (
    <div className="product-review">
      <span className="rating">{rating} ★</span>
      <span className="reviews">({totalReviews} reviews)</span>
    </div>
  );
};

export default ProductReview;
