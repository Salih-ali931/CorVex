// import { useNavigate } from "react-router-dom";
// import "./Payment.css";

// const Payment = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="payment-page">
//       <h1 className="brand">THE COLLECTIVE</h1>

//       <div className="method-box">
//         <h3>Select Payment Method</h3>

//         <button onClick={() => navigate("/payment/card")}>
//           Credit / Debit Card
//         </button>

//         <button onClick={() => navigate("/payment/upi")}>
//           UPI
//         </button>

//         <button onClick={() => navigate("/payment/cod")}>
//           Cash on Delivery
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;



















































// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Payment.css";

// const Payment = () => {
//   const navigate = useNavigate();
//   const { cartItems, clearCart } = useCart();

//   const placeOrder = async (paymentMethod) => {
//     try {
//       const user = JSON.parse(localStorage.getItem("userInfo"));
//       const address = JSON.parse(localStorage.getItem("checkoutAddress"));

//       const orderData = {
//         items: cartItems.map((item) => ({
//           name: item.name,
//           price: item.price,
//           quantity: item.qty || 1,
//           image: item.image,
//           productId: item.id,
//         })),
//         totalAmount: cartItems.reduce(
//           (sum, i) => sum + i.price * (i.qty || 1),
//           0
//         ),
//         paymentMethod,
//         deliveryAddress: address,
//       };

//       await axios.post(
//         "http://localhost:5000/api/orders/create",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       clearCart();
//       navigate("/order-success");
//     } catch (err) {
//       alert("Order failed");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="payment-page">
//       <h1 className="brand">THE COLLECTIVE</h1>

//       <div className="method-box">
//         <h3>Select Payment Method</h3>

//         <button onClick={() => placeOrder("CARD")}>
//           Credit / Debit Card
//         </button>

//         <button onClick={() => placeOrder("UPI")}>
//           UPI
//         </button>

//         <button onClick={() => placeOrder("COD")}>
//           Cash on Delivery
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;






























// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Payment.css";

// const Payment = () => {
//   const navigate = useNavigate();
//   const { cartItems } = useCart(); // ❌ no clearCart

//   const placeOrder = async (paymentMethod) => {
//     try {
//       const user = JSON.parse(localStorage.getItem("userInfo"));
//       const address = JSON.parse(localStorage.getItem("selectedAddress"));

//       if (!user || !user.token) {
//         alert("Please login again");
//         navigate("/login");
//         return;
//       }

//       if (!address) {
//         alert("Please add address");
//         navigate("/cart");
//         return;
//       }

//       if (cartItems.length === 0) {
//         alert("Cart is empty");
//         navigate("/cart");
//         return;
//       }

//       const orderData = {
//         items: cartItems.map((item) => ({
//           name: item.name,
//           price: item.price,
//           quantity: item.qty || 1,
//           image: item.image,
//           productId: item.id,
//         })),
//         totalAmount: cartItems.reduce(
//           (sum, i) => sum + i.price * (i.qty || 1),
//           0
//         ),
//         paymentMethod,
//         deliveryAddress: address,
//       };

//       await axios.post(
//         "http://localhost:5000/api/orders/create",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       // ✅ DO NOT call clearCart here
//       navigate("/order-success");
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Order failed");
//     }
//   };

//   return (
//     <div className="payment-page">
//       <h1 className="brand">THE COLLECTIVE</h1>

//       <div className="method-box">
//         <h3>Select Payment Method</h3>

//         <button onClick={() => placeOrder("CARD")}>
//           Credit / Debit Card
//         </button>

//         <button onClick={() => placeOrder("UPI")}>
//           UPI
//         </button>

//         <button onClick={() => placeOrder("COD")}>
//           Cash on Delivery
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;


































































// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";


// const Payment = () => {
//   const navigate = useNavigate();
//   const { cartItems } = useCart(); // ❌ no clearCart

//   const placeOrder = async (paymentMethod) => {
//     try {
//       const user = JSON.parse(localStorage.getItem("userInfo"));
//       const address = JSON.parse(localStorage.getItem("selectedAddress"));

//       if (!user || !user.token) {
//         alert("Please login again");
//         navigate("/login");
//         return;
//       }

//       if (!address) {
//         alert("Please add address");
//         navigate("/cart");
//         return;
//       }

//       if (cartItems.length === 0) {
//         alert("Cart is empty");
//         navigate("/cart");
//         return;
//       }

//       const orderData = {
//         items: cartItems.map((item) => ({
//           name: item.name,
//           price: item.price,
//           quantity: item.qty || 1,
//           image: item.image,
//           productId: item.id,
//         })),
//         totalAmount: cartItems.reduce(
//           (sum, i) => sum + i.price * (i.qty || 1),
//           0
//         ),
//         paymentMethod,
//         deliveryAddress: address,
//       };

//       await axios.post(
//         "http://localhost:5000/api/orders/create",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       // ✅ DO NOT call clearCart here
//       navigate("/order-success");
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Order failed");
//     }
//   };

//   return (
//     <div className="payment-page">
//       <h1 className="brand">THE COLLECTIVE</h1>

//       <div className="method-box">
//         <h3>Select Payment Method</h3>

//         <button onClick={() => placeOrder("CARD")}>
//           Credit / Debit Card
//         </button>

//         <button onClick={() => placeOrder("UPI")}>
//           UPI
//         </button>

//         <button onClick={() => placeOrder("COD")}>
//           Cash on Delivery
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;



// pages/Payment.jsx








// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, clearCart } = useCart();

//   const paymentMethod = location.state?.method; // 👈 from UPI / CARD

//   const placeOrder = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("userInfo"));
//       const address = JSON.parse(localStorage.getItem("selectedAddress"));

//       if (!user?.token) return navigate("/login");
//       if (!address) return navigate("/cart");
//       if (cartItems.length === 0) return navigate("/cart");

//       const orderData = {
//         items: cartItems.map(i => ({
//           productId: i.id,
//           name: i.name,
//           price: i.price,
//           quantity: i.qty || 1,
//           image: i.image,
//         })),
//         totalAmount: cartItems.reduce(
//           (sum, i) => sum + i.price * (i.qty || 1),
//           0
//         ),
//         paymentMethod,
//         deliveryAddress: address,
//       };

//       await axios.post(
//         "http://localhost:5000/api/orders/create",
//         orderData,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       clearCart(); // ✅ ONLY HERE
//       navigate("/order-success");

//     } catch (err) {
//       alert("Order failed");
//     }
//   };

//   // 👉 If coming back from UPI / CARD success
//   if (paymentMethod) {
//     placeOrder();
//     return <p>Placing order...</p>;
//   }

//   return (
//     <div className="payment-page">
//       <h3>Select Payment Method</h3>

//       <button onClick={() => navigate("/payment/card")}>
//         Card
//       </button>

//       <button onClick={() => navigate("/payment/upi")}>
//         UPI
//       </button>

//       <button onClick={() => navigate("/payment", {
//         state: { method: "COD" }
//       })}>
//         Cash on Delivery
//       </button>
//     </div>
//   );
// };

// export default Payment;



































































































// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { useCart } from "../context/CartContext";
// import "./Payment.css";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, clearCart } = useCart();

//   const paymentMethod = location.state?.method;

//   // 🔐 LOGIN CHECK (SAVE REDIRECT)
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));

//     if (!user?.token) {
//       localStorage.setItem("redirectAfterLogin", "/payment");
//       navigate("/login", { replace: true });
//     }
//   }, [navigate]);

//   // 🔥 PLACE ORDER AFTER PAYMENT METHOD SELECT
//   useEffect(() => {
//     if (!paymentMethod) return;

//     const placeOrder = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("userInfo"));
//         const address = JSON.parse(localStorage.getItem("selectedAddress"));

//         if (!address || cartItems.length === 0) {
//           navigate("/cart");
//           return;
//         }

//         const orderData = {
//           items: cartItems.map((i) => ({
//             productId: i.id,
//             name: i.name,
//             price: i.price,
//             quantity: i.qty || 1,
//             image: i.image,
//           })),
//           totalAmount: cartItems.reduce(
//             (sum, i) => sum + i.price * (i.qty || 1),
//             0
//           ),
//           paymentMethod,
//           deliveryAddress: address,
//         };

//         await axios.post(
//           "http://localhost:5000/api/orders/create",
//           orderData,
//           {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           }
//         );

//         clearCart();
//         navigate("/order-success", { replace: true });

//       } catch {
//         alert("Order failed");
//       }
//     };

//     placeOrder();
//   }, [paymentMethod, cartItems, clearCart, navigate]);

//   return (
//     <div className="payment-page">
//       <h3>Select Payment Method</h3>

//       <button onClick={() => navigate("/payment/card")}>
//         Card
//       </button>

//       <button onClick={() => navigate("/payment/upi")}>
//         UPI
//       </button>

//       <button
//         onClick={() =>
//           navigate("/payment", { state: { method: "COD" } })
//         }
//       >
//         Cash on Delivery
//       </button>
//     </div>
//   );
// };

// export default Payment;




// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { useCart } from "../context/CartContext";
// import "./Payment.css";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, clearCart } = useCart();

//   const paymentMethod = location.state?.method;

//   // 🔐 Login check
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));
//     if (!user?.token) {
//       localStorage.setItem("redirectAfterLogin", "/payment");
//       navigate("/login", { replace: true });
//     }
//   }, [navigate]);

//   // 🔥 Place order
//   useEffect(() => {
//     if (!paymentMethod) return;

//     const placeOrder = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("userInfo"));
//         const address = JSON.parse(localStorage.getItem("selectedAddress"));

//         if (!address || cartItems.length === 0) {
//           navigate("/cart");
//           return;
//         }

//         const orderData = {
//           items: cartItems.map((i) => ({
//             productId: i.id,
//             name: i.name,
//             price: i.price,
//             quantity: i.qty || 1,
//             image: i.image,
//           })),
//           totalAmount: cartItems.reduce(
//             (sum, i) => sum + i.price * (i.qty || 1),
//             0
//           ),
//           paymentMethod,
//           deliveryAddress: address,
//         };

//         await axios.post(
//           "http://localhost:5000/api/orders/create",
//           orderData,
//           {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           }
//         );

//         clearCart();
//         navigate("/order-success", { replace: true });
//       } catch {
//         alert("Payment Failed");
//       }
//     };

//     placeOrder();
//   }, [paymentMethod, cartItems, clearCart, navigate]);

//   return (
//     <div className="payment-page">
//       <div className="payment-card">
//         <h3>Choose Payment Method</h3>

//         <button
//           className="pay-btn"
//           onClick={() => navigate("/payment/card")}
//         >
//           <span className="icon">💳</span>
//           <div>
//             <p>Card Payment</p>
//             <small>Visa · Mastercard · RuPay</small>
//           </div>
//         </button>

//         <button
//           className="pay-btn"
//           onClick={() => navigate("/payment/upi")}
//         >
//           <span className="icon">📱</span>
//           <div>
//             <p>UPI</p>
//             <small>GPay · PhonePe · Paytm</small>
//           </div>
//         </button>

//         <button
//           className="pay-btn cod"
//           onClick={() =>
//             navigate("/payment", { state: { method: "COD" } })
//           }
//         >
//           <span className="icon">💼</span>
//           <div>
//             <p>Cash on Delivery</p>
//             <small>Pay when product arrives</small>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;


























// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { useCart } from "../context/CartContext";
// import "./Payment.css";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, clearCart } = useCart();

//   const paymentMethod = location.state?.method;

//   // 🔐 Login check
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));
//     if (!user?.token) {
//       localStorage.setItem("redirectAfterLogin", "/payment");
//       navigate("/login", { replace: true });
//     }
//   }, [navigate]);

//   // 🔥 Place order
//   useEffect(() => {
//     if (!paymentMethod) return;

//     const placeOrder = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("userInfo"));
//         const address = JSON.parse(localStorage.getItem("selectedAddress"));

//         if (!address || cartItems.length === 0) {
//           navigate("/cart");
//           return;
//         }

//         const orderData = {
//           items: cartItems.map((i) => ({
//             productId: i.id,
//             name: i.name,
//             price: i.price,
//             quantity: i.qty || 1,
//             image: i.image,
//           })),
//           totalAmount: cartItems.reduce(
//             (sum, i) => sum + i.price * (i.qty || 1),
//             0
//           ),
//           paymentMethod,
//           deliveryAddress: address,
//         };

//         await axios.post(
//           "http://localhost:5000/api/orders/create",
//           orderData,
//           {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           }
//         );

//         clearCart();
//         navigate("/order-success", { replace: true });
//       } catch {
//         alert("Payment Failed");
//       }
//     };

//     placeOrder();
//   }, [paymentMethod, cartItems, clearCart, navigate]);

//   return (
//     <div className="payment-page">
//       <div className="payment-card">
//         <h3>Choose Payment Method</h3>

//         <button className="pay-btn" onClick={() => navigate("/payment/card")}>
//           <span className="icon">💳</span>
//           <div>
//             <p>Card Payment</p>
//             <small>Visa · Mastercard · RuPay</small>
//           </div>
//         </button>

//         <button className="pay-btn" onClick={() => navigate("/payment/upi")}>
//           <span className="icon">📱</span>
//           <div>
//             <p>UPI</p>
//             <small>GPay · PhonePe · Paytm</small>
//           </div>
//         </button>

//         <button
//           className="pay-btn cod"
//           onClick={() =>
//             navigate("/payment", { state: { method: "COD" } })
//           }
//         >
//           <span className="icon">💼</span>
//           <div>
//             <p>Cash on Delivery</p>
//             <small>Pay when product arrives</small>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  // 🔐 login check
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user?.token) {
      localStorage.setItem("redirectAfterLogin", "/payment");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h3>Choose Payment Method</h3>

        <button className="pay-btn" onClick={() => navigate("/payment/card")}>
          💳 Card Payment
        </button>

        <button className="pay-btn" onClick={() => navigate("/payment/upi")}>
          📱 UPI Payment
        </button>

        <button className="pay-btn cod" onClick={() => navigate("/payment/cod")}>
          💼 Cash on Delivery
        </button>
      </div>
    </div>
  );
};

export default Payment;
