import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CodPayment.css";

const CodPayment = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const confirmOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const address = JSON.parse(localStorage.getItem("selectedAddress"));

      await axios.post(
        "http://localhost:5000/api/orders/create",
        {
          items: cartItems,
          totalAmount: cartTotal,
          paymentMethod: "COD",
          deliveryAddress: address,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      clearCart();
      navigate("/order-success", { replace: true });
    } catch {
      alert("COD Failed");
    }
  };

  return (
    <div className="cod-box">
      <h4>Cash on Delivery</h4>
      <p>Pay when your order is delivered.</p>
      <button onClick={confirmOrder}>CONFIRM ORDER</button>
    </div>
  );
};

export default CodPayment;
