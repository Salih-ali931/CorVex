import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import "./WishlistButton.css";

const WishlistButton = ({ product }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const liked = isWishlisted(product.id);

  return (
    <button
      className={`wishlist-btn ${liked ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
      }}
      aria-label="Add to wishlist"
    >
      <Heart size={18} strokeWidth={1.5} />
    </button>
  );
};

export default WishlistButton;
