import "./CartSummary.css";

const CartSummary = ({ total, onPlaceOrder }) => {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>

      <div className="row">
        <span>Order Value</span>
        <span>₹{total}</span>
      </div>

      <div className="row total">
        <span>Grand Total</span>
        <span>₹{total}</span>
      </div>

      <button className="place-order" onClick={onPlaceOrder}>
        PLACE ORDER
      </button>
    </div>
  );
};

export default CartSummary;
