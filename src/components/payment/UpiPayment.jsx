import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import "./UpiPayment.css";

const UpiPayment = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const [upiId, setUpiId] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    // ✅ validations
    if (!upiId.includes("@")) {
      setError("Enter valid UPI ID (example@bank)");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter valid 10-digit mobile number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const address = JSON.parse(localStorage.getItem("selectedAddress"));

      await axios.post(
        "http://localhost:5000/api/orders/create",
        {
          items: cartItems,
          totalAmount: cartTotal,
          paymentMethod: "UPI",
          upiId,
          upiPhone: phone,
          paymentStatus: "PENDING",
          deliveryAddress: address,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      clearCart();
      navigate("/order-success?status=pending", { replace: true });

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upi-page">
      <h2>Pay ₹{cartTotal}</h2>

      <input
        placeholder="UPI ID (example@bank)"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />

      <input
        type="tel"
        placeholder="UPI Linked Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={handlePay} disabled={loading}>
        {loading ? "Processing..." : `CONFIRM ₹${cartTotal}`}
      </button>

      <p className="hint">
        Payment will be verified shortly
      </p>
    </div>
  );
};

export default UpiPayment;
