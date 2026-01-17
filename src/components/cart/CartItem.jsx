import "./CartItem.css";

const CartItem = ({ item, updateQty, removeFromCart }) => {
  return (
    <div className="cart-item">

      {/* IMAGE */}
      <img
        src={Array.isArray(item.image) ? item.image[0] : item.image}
        alt={item.name}
        className="cart-img"
      />

      {/* INFO */}
      <div className="cart-info">
        <h4>{item.brand || item.name}</h4>
        <p className="cart-price">₹{item.price}</p>

        <div className="cart-actions">
          <select
            value={item.qty}
            onChange={(e) =>
              updateQty(item.id, Number(e.target.value))
            }
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                Qty {q}
              </option>
            ))}
          </select>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
