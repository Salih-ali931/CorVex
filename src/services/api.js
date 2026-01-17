





import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useCart();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const id = "ORD" + Date.now();
    setOrderId(id);

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    const orderData = {
      orderId: id,
      items: cartItems,
      total: cartTotal,
      status: "In Transit",
      orderDate: new Date().toDateString(),
      deliveryDate: deliveryDate.toDateString(),
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, orderData])
    );
  }, []);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-ring">
          <div className="check-circle">✓</div>
        </div>

        <h1>Payment Successful</h1>

        {/* SAME ORDER ID */}
        <div className="order-id-box">
          <span>Order ID</span>
          <strong>{orderId}</strong>
        </div>

        {/* SAME TOTAL */}
        <div className="paid-box">
          <span>Amount Paid</span>
          <strong>₹{cartTotal}</strong>
        </div>

        <div className="success-actions">
          <button
            className="success-btn"
            onClick={() => navigate("/orders")}
          >
            VIEW ORDERS
          </button>

          <button
            className="success-btn outline"
            onClick={() => navigate("/")}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
