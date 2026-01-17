// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../context/CartContext";
// // import AddAddressModal from "../components/cart/AddAddressModal";

// // import "./Cart.css";

// // const Cart = () => {
// //   const { cartItems, updateQty, removeFromCart } = useCart();
// //   const navigate = useNavigate();

// //   const [showAddress, setShowAddress] = useState(false);
// //   const [savedAddress, setSavedAddress] = useState(null);
// //   const [addressSaved, setAddressSaved] = useState(false);

// //   /* ================= LOAD ADDRESS ================= */
// //   useEffect(() => {
// //     const address = localStorage.getItem("address");
// //     if (address) {
// //       setSavedAddress(JSON.parse(address));
// //       setAddressSaved(true);
// //     }
// //   }, []);

// //   const total = cartItems.reduce(
// //     (sum, item) => sum + item.price * item.qty,
// //     0
// //   );

// //   /* ================= PLACE ORDER ================= */
// //   const placeOrder = () => {
// //     if (cartItems.length === 0) {
// //       alert("Your cart is empty");
// //       return;
// //     }

// //     if (!addressSaved) {
// //       alert("Please add delivery address");
// //       return;
// //     }

// //     const checkoutData = {
// //       cartItems,
// //       total,
// //       address: savedAddress,
// //     };

// //     localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
// //     navigate("/checkout");
// //   };

// //   return (
// //     <div className="tc-cart-page">

// //       {/* LOGO */}
// //       <h1 className="tc-logo">THE COLLECTIVE</h1>

// //       {/* ================= STEPPER ================= */}
// //       <div className="lux-steps">
// //         <div className="lux-step done">
// //           <span className="lux-circle">✓</span>
// //           <p>Shopping Bag</p>
// //         </div>

// //         <div className={`lux-line ${addressSaved ? "done" : ""}`} />

// //         <div className={`lux-step ${addressSaved ? "done" : ""}`}>
// //           <span className="lux-circle">
// //             {addressSaved ? "✓" : ""}
// //           </span>
// //           <p>Address</p>
// //         </div>

// //         <div className="lux-line" />

// //         <div className="lux-step">
// //           <span className="lux-circle" />
// //           <p>Payment</p>
// //         </div>
// //       </div>

// //       <div className="tc-layout">

// //         {/* ================= LEFT ================= */}
// //         <div className="tc-left">

// //           {/* ADDRESS BAR */}
// //           <div className="address-bar">
// //             <button
// //               className="address-btn"
// //               onClick={() => setShowAddress(true)}
// //             >
// //               {addressSaved ? "Change / Add Address" : "Add Address"}
// //             </button>
// //           </div>

// //           {/* SAVED ADDRESS */}
// //           {savedAddress && (
// //             <div className="saved-address">
// //               <p>
// //                 <strong>
// //                   {savedAddress.firstName} {savedAddress.lastName}
// //                 </strong>
// //               </p>
// //               <p>
// //                 {savedAddress.address1}, {savedAddress.address2}
// //               </p>
// //               <p>
// //                 {savedAddress.city}, {savedAddress.state} –{" "}
// //                 {savedAddress.pincode}
// //               </p>
// //               <p>📞 {savedAddress.mobile}</p>
// //             </div>
// //           )}

// //           {/* BAG */}
// //           <h3 className="bag-title">
// //             Shopping Bag ({cartItems.length} item)
// //           </h3>

// //           {cartItems.map((item) => (
// //             <div className="tc-card" key={item.id}>

// //               <img
// //                 src={
// //                   Array.isArray(item.image)
// //                     ? item.image[0]
// //                     : item.image
// //                 }
// //                 alt={item.name}
// //               />

// //               <div className="tc-info">
// //                 <h4>{item.brand || "FERRAGAMO"}</h4>
// //                 <p className="price">₹{item.price}</p>

// //                 <div className="tc-actions">
// //                   <select
// //                     value={item.qty}
// //                     onChange={(e) =>
// //                       updateQty(item.id, Number(e.target.value))
// //                     }
// //                   >
// //                     <option value={1}>Qty 1</option>
// //                     <option value={2}>Qty 2</option>
// //                     <option value={3}>Qty 3</option>
// //                   </select>

// //                   <span className="only-left">Only 1 left!</span>
// //                 </div>

// //                 <p className="return">
// //                   15 days return / exchange available
// //                 </p>
// //               </div>

// //               <button
// //                 className="remove"
// //                 onClick={() => removeFromCart(item.id)}
// //               >
// //                 ×
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* ================= RIGHT ================= */}
// //         <div className="tc-right">
// //           <h3>Order Summary ({cartItems.length} item)</h3>

// //           <div className="row">
// //             <span>Order Value</span>
// //             <span>₹{total}</span>
// //           </div>

// //           <div className="row total">
// //             <span>Grand Total</span>
// //             <span>₹{total}</span>
// //           </div>

// //           <div className="coupon">Apply Coupon →</div>

// //           <button className="place-order" onClick={placeOrder}>
// //             PLACE ORDER
// //           </button>
// //         </div>
// //       </div>

// //       {/* ================= ADDRESS MODAL ================= */}
// //       {showAddress && (
// //         <AddAddressModal
// //           onClose={() => setShowAddress(false)}
// //           onSave={(data) => {
// //             localStorage.setItem("address", JSON.stringify(data));
// //             setSavedAddress(data);
// //             setAddressSaved(true);
// //             setShowAddress(false);
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;












































// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../context/CartContext";
// // import AddAddressModal from "../components/cart/AddAddressModal";
// // import "./Cart.css";

// // const Cart = () => {
// //   const { cartItems, updateQty, removeFromCart } = useCart();
// //   const navigate = useNavigate();

// //   const [showAddress, setShowAddress] = useState(false);
// //   const [savedAddress, setSavedAddress] = useState(null);
// //   const [addressSaved, setAddressSaved] = useState(false);

// //   /* LOAD ADDRESS */
// //   useEffect(() => {
// //     const address = localStorage.getItem("address");
// //     if (address) {
// //       setSavedAddress(JSON.parse(address));
// //       setAddressSaved(true);
// //     }
// //   }, []);

// //   /* ✅ SAFE TOTAL */
// //   const total = cartItems.reduce((sum, item) => {
// //     const price = Number(item.price) || 0;
// //     const qty = Number(item.qty) || 1;
// //     return sum + price * qty;
// //   }, 0);

// //   const placeOrder = () => {
// //     if (cartItems.length === 0) {
// //       alert("Cart is empty");
// //       return;
// //     }
// //     if (!addressSaved) {
// //       alert("Please add address");
// //       return;
// //     }

// //     localStorage.setItem(
// //       "checkoutData",
// //       JSON.stringify({ cartItems, total, address: savedAddress })
// //     );

// //     navigate("/checkout");
// //   };

// //   return (
// //     <div className="tc-cart-page">
// //       <h1 className="tc-logo">THE COLLECTIVE</h1>

// //       {/* BAG */}
// //       <div className="tc-layout">
// //         <div className="tc-left">
// //           <h3>Shopping Bag ({cartItems.length} items)</h3>

// //           {cartItems.map((item) => (
// //             <div className="tc-card" key={item.id}>
// //               <img src={item.image} alt={item.name} />

// //               <div className="tc-info">
// //                 <h4>{item.name}</h4>
// //                 <p>₹{item.price}</p>

// //                 <select
// //                   value={item.qty}
// //                   onChange={(e) =>
// //                     updateQty(item.id, Number(e.target.value))
// //                   }
// //                 >
// //                   <option value={1}>Qty 1</option>
// //                   <option value={2}>Qty 2</option>
// //                   <option value={3}>Qty 3</option>
// //                 </select>
// //               </div>

// //               <button onClick={() => removeFromCart(item.id)}>×</button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* ORDER SUMMARY */}
// //         <div className="tc-right">
// //           <h3>Order Summary</h3>

// //           <div className="row">
// //             <span>Order Value</span>
// //             <span>₹{total}</span>
// //           </div>

// //           <div className="row total">
// //             <span>Grand Total</span>
// //             <span>₹{total}</span>
// //           </div>

// //           <button onClick={placeOrder}>PLACE ORDER</button>
// //         </div>
// //       </div>

// //       {showAddress && (
// //         <AddAddressModal
// //           onClose={() => setShowAddress(false)}
// //           onSave={(data) => {
// //             localStorage.setItem("address", JSON.stringify(data));
// //             setSavedAddress(data);
// //             setAddressSaved(true);
// //             setShowAddress(false);
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;


































// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import AddAddressModal from "../components/cart/AddAddressModal";

// import "./Cart.css";

// const Cart = () => {
//   const { cartItems, updateQty, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const [showAddress, setShowAddress] = useState(false);
//   const [savedAddress, setSavedAddress] = useState(null);
//   const [addressSaved, setAddressSaved] = useState(false);

//   /* ================= LOAD ADDRESS ================= */
//   useEffect(() => {
//     const address = localStorage.getItem("address");
//     if (address) {
//       setSavedAddress(JSON.parse(address));
//       setAddressSaved(true);
//     }
//   }, []);

//   /* ================= SAFE TOTAL ================= */
//   const total = cartItems.reduce((sum, item) => {
//     const price = Number(item.price) || 0;
//     const qty = Number(item.qty) || 1;
//     return sum + price * qty;
//   }, 0);

//   /* ================= PLACE ORDER ================= */
//   const placeOrder = () => {
//     if (cartItems.length === 0) {
//       alert("Your cart is empty");
//       return;
//     }

//     if (!addressSaved) {
//       alert("Please add delivery address");
//       return;
//     }

//     localStorage.setItem(
//       "checkoutData",
//       JSON.stringify({ cartItems, total, address: savedAddress })
//     );

//     navigate("/checkout");
//   };

//   return (
//     <div className="tc-cart-page">
//       <h1 className="tc-logo">THE COLLECTIVE</h1>

//       {/* ================= STEPPER ================= */}
//       <div className="lux-steps">
//         <div className="lux-step done">
//           <span className="lux-circle">✓</span>
//           <p>Shopping Bag</p>
//         </div>

//         <div className={`lux-line ${addressSaved ? "done" : ""}`} />

//         <div className={`lux-step ${addressSaved ? "done" : ""}`}>
//           <span className="lux-circle">
//             {addressSaved ? "✓" : ""}
//           </span>
//           <p>Address</p>
//         </div>

//         <div className="lux-line" />

//         <div className="lux-step">
//           <span className="lux-circle" />
//           <p>Payment</p>
//         </div>
//       </div>

//       <div className="tc-layout">

//         {/* ================= LEFT ================= */}
//         <div className="tc-left">

//           <div className="address-bar">
//             <button
//               className="address-btn"
//               onClick={() => setShowAddress(true)}
//             >
//               {addressSaved ? "Change / Add Address" : "Add Address"}
//             </button>
//           </div>

//           {savedAddress && (
//             <div className="saved-address">
//               <p><strong>{savedAddress.firstName} {savedAddress.lastName}</strong></p>
//               <p>{savedAddress.address1}, {savedAddress.address2}</p>
//               <p>{savedAddress.city}, {savedAddress.state} – {savedAddress.pincode}</p>
//               <p>📞 {savedAddress.mobile}</p>
//             </div>
//           )}

//           <h3 className="bag-title">
//             Shopping Bag ({cartItems.length} items)
//           </h3>

//           {cartItems.map((item) => (
//             <div className="tc-card" key={item.id}>
//               <img
//                 src={Array.isArray(item.image) ? item.image[0] : item.image}
//                 alt={item.name}
//               />

//               <div className="tc-info">
//                 <h4>{item.brand || item.name}</h4>
//                 <p className="price">₹{item.price}</p>

//                 <div className="tc-actions">
//                   <select
//                     value={item.qty}
//                     onChange={(e) =>
//                       updateQty(item.id, Number(e.target.value))
//                     }
//                   >
//                     <option value={1}>Qty 1</option>
//                     <option value={2}>Qty 2</option>
//                     <option value={3}>Qty 3</option>
//                   </select>

//                   <span className="only-left">Only 1 left!</span>
//                 </div>

//                 <p className="return">
//                   15 days return / exchange available
//                 </p>
//               </div>

//               <button
//                 className="remove"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* ================= RIGHT ================= */}
//         <div className="tc-right">
//           <h3>Order Summary ({cartItems.length} items)</h3>

//           <div className="row">
//             <span>Order Value</span>
//             <span>₹{total}</span>
//           </div>

//           <div className="row total">
//             <span>Grand Total</span>
//             <span>₹{total}</span>
//           </div>

//           <div className="coupon">Apply Coupon →</div>

//           <button className="place-order" onClick={placeOrder}>
//             PLACE ORDER
//           </button>
//         </div>
//       </div>

// {showAddress && (
//   <AddAddressModal
//     onClose={() => setShowAddress(false)}
//     onSave={(data) => {
//       setSavedAddress(data);
//       setAddressSaved(true);
//       setShowAddress(false);
//     }}
//   />
// )}


//     </div>
//   );
// };

// export default Cart;












// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import AddAddressModal from "../components/cart/AddAddressModal";
// import "./Cart.css";

// const Cart = () => {
//   const { cartItems, updateQty, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const [showAddress, setShowAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   /* LOAD SELECTED ADDRESS */
//   useEffect(() => {
//     const addr = localStorage.getItem("selectedAddress");
//     if (addr) setSelectedAddress(JSON.parse(addr));
//   }, []);

//   const total = cartItems.reduce(
//     (sum, i) => sum + Number(i.price) * Number(i.qty || 1),
//     0
//   );

//   return (
//     <div className="tc-cart-page">
//       <h1 className="tc-logo">THE COLLECTIVE</h1>

//       {/* STEPPER */}
//       <div className="stepper">
//         <span className="done">Shopping Bag</span>
//         <span className={selectedAddress ? "done" : ""}>Address</span>
//         <span>Payment</span>
//       </div>

//       {/* ADDRESS BAR */}
//       <div className="address-box">
//         {selectedAddress ? (
//           <>
//             <p>
//               <b>Deliver to:</b> {selectedAddress.name},{" "}
//               {selectedAddress.area}, {selectedAddress.city} –{" "}
//               {selectedAddress.pincode}
//             </p>
//             <button onClick={() => setShowAddress(true)}>
//               Change / Add Address
//             </button>
//           </>
//         ) : (
//           <button onClick={() => setShowAddress(true)}>
//             Add Address
//           </button>
//         )}
//       </div>

//       <div className="cart-layout">
//         {/* LEFT */}
//         <div className="cart-left">
//           {cartItems.map((item) => (
//             <div className="cart-card" key={item.id}>
//               <img src={item.image} alt={item.name} />
//               <div>
//                 <h4>{item.brand || item.name}</h4>
//                 <p>₹{item.price}</p>

//                 <select
//                   value={item.qty}
//                   onChange={(e) =>
//                     updateQty(item.id, Number(e.target.value))
//                   }
//                 >
//                   <option value={1}>Qty 1</option>
//                   <option value={2}>Qty 2</option>
//                 </select>
//               </div>

//               <button
//                 className="remove"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="cart-right">
//           <h3>Order Summary</h3>
//           <p>Order Value <span>₹{total}</span></p>
//           <p className="grand">Grand Total <span>₹{total}</span></p>

//           <button
//             className="place-order"
//             onClick={() => {
//               if (!selectedAddress) {
//                 alert("Please add address");
//                 return;
//               }
//               navigate("/payment");
//             }}
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>

//       {/* ADDRESS MODAL */}
//       {showAddress && (
//         <AddAddressModal
//           onClose={() => setShowAddress(false)}
//           onSelect={(addr) => {
//             setSelectedAddress(addr);
//             localStorage.setItem(
//               "selectedAddress",
//               JSON.stringify(addr)
//             );
//             setShowAddress(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Cart;


























// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import AddAddressModal from "../components/cart/AddAddressModal";
// import "./Cart.css";

// const Cart = () => {
//   const { cartItems, updateQty, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const [showAddress, setShowAddress] = useState(false);
//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("selectedAddress");
//     if (saved) setAddress(JSON.parse(saved));
//   }, []);

//   const total = cartItems.reduce(
//     (sum, i) => sum + i.price * (i.qty || 1),
//     0
//   );

//   return (
//     <div className="cart-page">
//       <h1 className="brand">THE COLLECTIVE</h1>

//       {/* STEPPER */}
//       <div className="stepper">
//         <div className="step done">
//           <span>✓</span>
//           <p>Shopping Bag</p>
//         </div>

//         <div className={`line ${address ? "done" : ""}`} />

//         <div className={`step ${address ? "done" : ""}`}>
//           <span>{address ? "✓" : ""}</span>
//           <p>Address</p>
//         </div>

//         <div className="line" />

//         <div className="step">
//           <span></span>
//           <p>Payment</p>
//         </div>
//       </div>

//       {/* ADDRESS BAR */}
//       <div className="address-box">
//         {!address ? (
//           <button
//             className="add-address-btn"
//             onClick={() => setShowAddress(true)}
//           >
//             Add Address
//           </button>
//         ) : (
//           <>
//             <p>
//               <b>Deliver to:</b> {address.name},{" "}
//               {address.area}, {address.city} – {address.pincode}
//             </p>

//             <button
//               className="change-btn"
//               onClick={() => setShowAddress(true)}
//             >
//               Change / Add Address
//             </button>
//           </>
//         )}
//       </div>

//       {/* MAIN */}
//       <div className="cart-layout">
//         {/* LEFT */}
//         <div className="cart-left">
//           <h3>Shopping Bag ({cartItems.length} item)</h3>

//           {cartItems.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.image} alt={item.name} />

//               <div className="item-info">
//                 <h4>{item.brand}</h4>
//                 <p>₹{item.price}</p>

//                 <select
//                   value={item.qty}
//                   onChange={(e) =>
//                     updateQty(item.id, Number(e.target.value))
//                   }
//                 >
//                   <option value={1}>Qty 1</option>
//                   <option value={2}>Qty 2</option>
//                 </select>
//               </div>

//               <button
//                 className="remove"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="cart-right">
//           <h3>Order Summary (1 item)</h3>

//           <div className="row">
//             <span>Order Value</span>
//             <span>₹{total}</span>
//           </div>

//           <div className="row total">
//             <span>Grand Total</span>
//             <span>₹{total}</span>
//           </div>

//           <button
//             className="place-order"
//             onClick={() => {
//               if (!address) {
//                 alert("Please add address");
//                 return;
//               }
//               navigate("/payment");
//             }}
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>

//       {/* ADDRESS MODAL */}
//       {showAddress && (
//         <AddAddressModal
//           onClose={() => setShowAddress(false)}
//           onSelect={(addr) => {
//             setAddress(addr);
//             localStorage.setItem(
//               "selectedAddress",
//               JSON.stringify(addr)
//             );
//             setShowAddress(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Cart;







// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import AddAddressModal from "../components/cart/AddAddressModal";
// import "./Cart.css";

// const Cart = () => {
//   const { cartItems, updateQty, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const [showAddress, setShowAddress] = useState(false);
//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("selectedAddress");
//     if (saved) setAddress(JSON.parse(saved));
//   }, []);

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * (item.qty || 1),
//     0
//   );

//   return (
//     <div className="cart-page">
//       <h1 className="brand">THE COLLECTIVE</h1>

//       {/* STEPPER */}
//       <div className="stepper">
//         <div className="step done">
//           <span>✓</span>
//           <p>Shopping Bag</p>
//         </div>

//         <div className={`line ${address ? "done" : ""}`} />

//         <div className={`step ${address ? "done" : ""}`}>
//           <span>{address ? "✓" : ""}</span>
//           <p>Address</p>
//         </div>

//         <div className="line" />

//         <div className="step">
//           <span></span>
//           <p>Payment</p>
//         </div>
//       </div>

//       {/* ADDRESS BAR */}
//       <div className="address-box ">
//         {!address ? (
//           <button
//             className="add-address-btn"
//             onClick={() => setShowAddress(true)}
//           >
//             Add Address
//           </button>
//         ) : (
//           <>
//             <p>
//               <b>Deliver to:</b> {address.name}, {address.area},{" "}
//               {address.city} – {address.pincode}
//             </p>

//             <button
//               className="change-btn"
//               onClick={() => setShowAddress(true)}
//             >
//               Change / Add Address
//             </button>
//           </>
//         )}
//       </div>

//       {/* MAIN LAYOUT */}
//       <div className="cart-layout">
//         {/* LEFT */}
//         <div className="cart-left">
//           <h3>Shopping Bag ({cartItems.length} item)</h3>

//           {cartItems.map((item) => (
//             <div className="cart-item" key={item.id}>
//               {/* ✅ IMAGE FIX */}
//               <img
//                 src={item.image?.[0]}
//                 alt={item.name}
//               />

//               <div className="item-info">
//                 <h4>{item.name}</h4>
//                 <p>₹{item.price}</p>

//                 <select
//                   value={item.qty || 1}
//                   onChange={(e) =>
//                     updateQty(item.id, Number(e.target.value))
//                   }
//                 >
//                   <option value={1}>Qty 1</option>
//                   <option value={2}>Qty 2</option>
//                   <option value={3}>Qty 3</option>
//                 </select>
//               </div>

//               <button
//                 className="remove"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="cart-right">
//           <h3>Order Summary ({cartItems.length} item)</h3>

//           <div className="row">
//             <span>Order Value</span>
//             <span>₹{total}</span>
//           </div>

//           <div className="row total">
//             <span>Grand Total</span>
//             <span>₹{total}</span>
//           </div>

//           <button
//             className="place-order"
//             onClick={() => {
//               if (!address) {
//                 alert("Please add address");
//                 return;
//               }
//               navigate("/payment");
//             }}
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>

      

//       {/* ADDRESS MODAL */}


//       {showAddress && (
//   <AddAddressModal
//     onClose={() => setShowAddress(false)}
//     onSelect={(addr) => {
//       setAddress(addr);
//       localStorage.setItem("selectedAddress", JSON.stringify(addr));
//       setShowAddress(false);
//     }}
//     onDelete={(deletedId) => {
//       if (address?.id === deletedId) {
//         setAddress(null); // 🔥 Cart page also cleared
//       }
//     }}
//   />
// )}
//       {/* {showAddress && (
//         <AddAddressModal
//           onClose={() => setShowAddress(false)}
//           onSelect={(addr) => {
//             setAddress(addr);
//             localStorage.setItem(
//               "selectedAddress",
//               JSON.stringify(addr)
//             );
//             setShowAddress(false);
//           }}
//         />
//       )} */}
//     </div>
//   );
// };

// export default Cart;








































































// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import AddAddressModal from "../components/cart/AddAddressModal";
// import "./Cart.css";

// const Cart = () => {
//   const { cartItems, updateQty, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const [showAddress, setShowAddress] = useState(false);
//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("selectedAddress");
//     if (saved) setAddress(JSON.parse(saved));
//   }, []);

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * (item.qty || 1),
//     0
//   );

//   return (
//     <div className="cart-page">
//       <h1 className="brand">THE COLLECTIVE</h1>

//       {/* STEPPER */}
//       <div className="stepper">
//         <div className="step done">
//           <span>✓</span>
//           <p>Shopping Bag</p>
//         </div>

//         <div className={`line ${address ? "done" : ""}`} />

//         <div className={`step ${address ? "done" : ""}`}>
//           <span>{address ? "✓" : ""}</span>
//           <p>Address</p>
//         </div>

//         <div className="line" />

//         <div className="step">
//           <span></span>
//           <p>Payment</p>
//         </div>
//       </div>

//       {/* ADDRESS BAR */}
//       <div className={`address-box ${!address ? "center" : ""}`}>
//         {!address ? (
//           <button
//             className="add-address-btn"
//             onClick={() => setShowAddress(true)}
//           >
//             Add Address
//           </button>
//         ) : (
//           <>
//             {/* LEFT */}
//             <div className="address-left">
//               <p className="deliver">Deliver to</p>
//               <p className="address-text">
//                 <strong>{address.name}</strong><br />
//                 {address.area}, {address.city} – {address.pincode}
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div className="address-right">
//               <button
//                 className="change-btn"
//                 onClick={() => setShowAddress(true)}
//               >
//                 Change / Add Address
//               </button>
//             </div>
//           </>
//         )}
//       </div>

//       {/* MAIN LAYOUT */}
//       <div className="cart-layout">
//         {/* LEFT */}
//         <div className="cart-left">
//           <h3>Shopping Bag ({cartItems.length} item)</h3>

//           {cartItems.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.image?.[0]} alt={item.name} />

//               <div className="item-info">
//                 <h4>{item.name}</h4>
//                 <p>₹{item.price}</p>

//                 <select
//                   value={item.qty || 1}
//                   onChange={(e) =>
//                     updateQty(item.id, Number(e.target.value))
//                   }
//                 >
//                   <option value={1}>Qty 1</option>
//                   <option value={2}>Qty 2</option>
//                   <option value={3}>Qty 3</option>
//                 </select>
//               </div>

//               <button
//                 className="remove"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="cart-right">
//           <h3>Order Summary ({cartItems.length} item)</h3>

//           <div className="row">
//             <span>Order Value</span>
//             <span>₹{total}</span>
//           </div>

//           <div className="row total">
//             <span>Grand Total</span>
//             <span>₹{total}</span>
//           </div>

//           <button
//             className="place-order"
//             onClick={() => {
//               if (!address) {
//                 alert("Please add address");
//                 return;
//               }
//               navigate("/payment");
//             }}
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>

//       {/* ADDRESS MODAL */}
//       {showAddress && (
//         <AddAddressModal
//           onClose={() => setShowAddress(false)}
//           onSelect={(addr) => {
//             setAddress(addr);
//             localStorage.setItem(
//               "selectedAddress",
//               JSON.stringify(addr)
//             );
//             setShowAddress(false);
//           }}
//           onDelete={(deletedId) => {
//             if (address?.id === deletedId) {
//               setAddress(null);
//               localStorage.removeItem("selectedAddress");
//             }
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Cart;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AddAddressModal from "../components/cart/AddAddressModal";
import "./Cart.css";

const Cart = () => {
  const { cartItems, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [showAddress, setShowAddress] = useState(false);
  const [address, setAddress] = useState(null);

  // ✅ Load selected address
  useEffect(() => {
    const saved = localStorage.getItem("selectedAddress");
    if (saved) setAddress(JSON.parse(saved));
  }, []);

  // ✅ Total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // ✅ Go to payment (NO API CALL HERE)
  const goToPayment = () => {
    if (!address) {
      alert("Please add address");
      return;
    }

    // 🔥 Save address for payment page
    localStorage.setItem("checkoutAddress", JSON.stringify(address));

    navigate("/payment");
  };

  return (
    <div className="cart-page">
      <h1 className="brand">CorVex</h1>

      {/* ================= STEPPER ================= */}
      <div className="stepper">
        <div className="step done">
          <span>✓</span>
          <p>Shopping Bag</p>
        </div>

        <div className={`line ${address ? "done" : ""}`} />

        <div className={`step ${address ? "done" : ""}`}>
          <span>{address ? "✓" : ""}</span>
          <p>Address</p>
        </div>

        <div className="line" />

        <div className="step">
          <span></span>
          <p>Payment</p>
        </div>
      </div>

      {/* ================= ADDRESS ================= */}
      <div className={`address-box ${!address ? "center" : ""}`}>
        {!address ? (
          <button
            className="add-address-btn"
            onClick={() => setShowAddress(true)}
          >
            Add Address
          </button>
        ) : (
          <>
            <div className="address-left">
              <p className="deliver">Deliver to</p>
              {/* <p className="address-text">
                <strong>{address.name}</strong><br />
                {address.area}, {address.city} – {address.pincode}
              </p> */}
              <p className="address-text">
  <strong>{address.name}</strong><br />
  {address.mobile}<br />
  {address.area}, {address.city} – {address.pincode}
</p>

            </div>

            <div className="address-right">
              <button
                className="change-btn"
                onClick={() => setShowAddress(true)}
              >
                Change / Add Address
              </button>
            </div>
          </>
        )}
      </div>

      {/* ================= CART ================= */}
      <div className="cart-layout">
        {/* LEFT */}
        <div className="cart-left">
          <h3>Shopping Bag ({cartItems.length} item)</h3>

          {cartItems.length === 0 && <p>Cart is empty</p>}

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image?.[0]} alt={item.name} />

              <div className="item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <select
                  value={item.qty || 1}
                  onChange={(e) =>
                    updateQty(item.id, Number(e.target.value))
                  }
                >
                  <option value={1}>Qty 1</option>
                  <option value={2}>Qty 2</option>
                  <option value={3}>Qty 3</option>
                </select>
              </div>

              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="cart-right">
          <h3>Order Summary</h3>

          <div className="row">
            <span>Order Value</span>
            <span>₹{total}</span>
          </div>

          <div className="row total">
            <span>Grand Total</span>
            <span>₹{total}</span>
          </div>

          <button className="place-order" onClick={goToPayment}>
            PLACE ORDER
          </button>
        </div>
      </div>

      {/* ================= ADDRESS MODAL ================= */}
      {showAddress && (
        <AddAddressModal
          onClose={() => setShowAddress(false)}
          onSelect={(addr) => {
            setAddress(addr);
            localStorage.setItem(
              "selectedAddress",
              JSON.stringify(addr)
            );
            setShowAddress(false);
          }}
          onDelete={(deletedId) => {
            if (address?.id === deletedId) {
              setAddress(null);
              localStorage.removeItem("selectedAddress");
            }
          }}
        />
      )}
    </div>
  );
};

export default Cart;

