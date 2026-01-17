import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CardPayment.css";

const CardPayment = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const handlePay = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const address = JSON.parse(localStorage.getItem("selectedAddress"));

      await axios.post(
        "http://localhost:5000/api/orders/create",
        {
          items: cartItems,
          totalAmount: cartTotal,
          paymentMethod: "CARD",
          deliveryAddress: address,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}` },
        }
      );

      clearCart();
      navigate("/order-success", { replace: true });
    } catch {
      alert("Card Payment Failed");
    }
  };

  return (
    <div className="payment-page">
      <h2>Pay ₹{cartTotal}</h2>

      <input placeholder="Card Number" />
      <input placeholder="Card Holder Name" />
      <input placeholder="MM/YY" />
      <input placeholder="CVV" />

      <button onClick={handlePay}>PAY ₹{cartTotal}</button>
    </div>
  );
};

export default CardPayment;
