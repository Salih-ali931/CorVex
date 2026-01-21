import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  // 🔐 Login check (CORRECT)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("redirectAfterLogin", "/payment");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h3>Choose Payment Method</h3>

        <button
          className="pay-btn"
          onClick={() => navigate("/payment/card")}
        >
          💳 Card Payment
        </button>

        <button
          className="pay-btn"
          onClick={() => navigate("/payment/upi")}
        >
          📱 UPI Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
