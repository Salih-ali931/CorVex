// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AddAddressModal from "../components/cart/AddAddressModal";
// import "./Checkout.css";

// const Checkout = () => {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);

//   const checkoutData = JSON.parse(localStorage.getItem("checkoutData"));
//   if (!checkoutData) return null;

//   const { address } = checkoutData;

//   return (
//     <div className="checkout-page">
//       <h1 className="tc-logo">THE COLLECTIVE</h1>

//       {/* STEPPER */}
//       <div className="lux-steps">
//         <div className="lux-step done">
//           <span className="lux-circle">✓</span>
//           <p>Shopping Bag</p>
//         </div>

//         <div className="lux-line done" />

//         <div className="lux-step done">
//           <span className="lux-circle">✓</span>
//           <p>Address</p>
//         </div>

//         <div className="lux-line" />

//         <div className="lux-step">
//           <span className="lux-circle" />
//           <p>Payment</p>
//         </div>
//       </div>

//       {/* ADDRESS */}
//       <div className="address-box">
//         <p className="deliver-title">Deliver to:</p>
//         <p>
//           <strong>{address.firstName} {address.lastName}</strong>
//         </p>
//         <p>
//           {address.address1}, {address.city} – {address.pincode}
//         </p>

//         <button
//           className="change-address"
//           onClick={() => setShowModal(true)}
//         >
//           Change / Add Address
//         </button>
//       </div>

//       <button
//         className="deliver-btn"
//         onClick={() => navigate("/payment")}
//       >
//         DELIVER HERE
//       </button>

//       {showModal && (
//         <AddAddressModal onClose={() => setShowModal(false)} />
//       )}
//     </div>
//   );
// };

// export default Checkout;


























import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddAddressModal from "../components/cart/AddAddressModal";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // // address saved separately
  // const address = JSON.parse(localStorage.getItem("address"));
const address = JSON.parse(localStorage.getItem("selectedAddress"));

  // cart total (example)
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (!address) return <h2>Please add address</h2>;

  const handleDeliverHere = () => {
    const checkoutData = {
      address,
      items: cartItems,
      total,
    };

    // 🔥 THIS WAS MISSING
    localStorage.setItem(
      "checkoutData",
      JSON.stringify(checkoutData)
    );

    navigate("/payment");
  };

  return (
    <div className="checkout-page">
      <h1 className="tc-logo">THE COLLECTIVE</h1>

      {/* STEPPER */}
      <div className="lux-steps">
        <div className="lux-step done">
          <span className="lux-circle">✓</span>
          <p>Shopping Bag</p>
        </div>

        <div className="lux-line done" />

        <div className="lux-step done">
          <span className="lux-circle">✓</span>
          <p>Address</p>
        </div>

        <div className="lux-line" />

        <div className="lux-step">
          <span className="lux-circle" />
          <p>Payment</p>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="address-box">
        <p className="deliver-title">Deliver to:</p>
        <p>
          <strong>{address.firstName} {address.lastName}</strong>
        </p>
        <p>
          {address.address1}, {address.city} – {address.pincode}
        </p>

        <button
          className="change-address"
          onClick={() => setShowModal(true)}
        >
          Change / Add Address
        </button>
      </div>

      <button
        className="deliver-btn"
        onClick={handleDeliverHere}
      >
        DELIVER HERE
      </button>

      {showModal && (
        <AddAddressModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Checkout;
