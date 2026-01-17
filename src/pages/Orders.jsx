// import "./Orders.css";

// const Orders = () => {
//   return (
//     <div className="orders-page">
//       <h2 className="orders-title">My Orders</h2>

//       <div className="order-card">
//         <div className="order-header">
//           <div>
//             <p className="order-id">
//               Order <span>#8374915036</span>
//             </p>
//             <small>Order placed: Thu, 17 Nov 2016</small>
//           </div>
//           <button className="track-btn">TRACK ORDER</button>
//         </div>

//         <div className="order-item">
//           <img src="/images/men/men1.jpg" alt="product" className="order-img" />

//           <div className="item-details">
//             <h4>Netting Mykonos Tunic Dress</h4>
//             <p>Size: S | Qty: 1</p>
//             <p className="price">₹1250</p>
//           </div>

//           <div className="item-status">
//             <span className="status">In Transit</span>
//             <small>Delivery by 26 Dec 2016</small>
//           </div>
//         </div>

//         <div className="order-item">
//           <img
//             src="/images/women/women1.jpg"
//             alt="product"
//             className="order-img"
//           />

//           <div className="item-details">
//             <h4>Embroidered Sequin Mini Dress</h4>
//             <p>Size: S | Qty: 1</p>
//             <p className="price">₹1760</p>
//           </div>

//           <div className="item-status">
//             <span className="status">In Transit</span>
//             <small>Delivery by 26 Dec 2016</small>
//           </div>
//         </div>

//         <div className="order-footer">
//           <button className="cancel-btn">✕ Cancel Order</button>
//           <h3>Total: ₹3010</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;












// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Orders = () => {
//   const navigate = useNavigate();

//   const [orders, setOrders] = useState(
//     JSON.parse(localStorage.getItem("orders")) || []
//   );

//   // ❌ DELETE ORDER
//   const cancelOrder = (orderId) => {
//     const updated = orders.filter(
//       (order) => order.orderId !== orderId
//     );

//     setOrders(updated);
//     localStorage.setItem("orders", JSON.stringify(updated));
//   };

//   if (orders.length === 0) {
//     return (
//       <div className="orders-page">
//         <h2 className="orders-title">My Orders</h2>
//         <p className="empty">No orders found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="orders-page">
//       <h2 className="orders-title">My Orders</h2>

//       {/* 🔥 LATEST ORDER FIRST */}
//       {[...orders].reverse().map((order) => (
//         <div className="order-card" key={order.orderId}>
//           {/* HEADER */}
//           <div className="order-header">
//             <div>
//               <p className="order-id">
//                 Order <span>#{order.orderId}</span>
//               </p>
//               <small>Order placed: {order.orderDate}</small>
//             </div>

//             <button className="track-btn">TRACK ORDER</button>
//           </div>

//           {/* ITEMS */}
//           {order.items.map((item, index) => (
//             <div className="order-item" key={`${order.orderId}-${index}`}>
//               <img
//                 src={
//                   Array.isArray(item.image)
//                     ? item.image[0]
//                     : item.image
//                 }
//                 alt={item.name}
//                 className="order-img"
//                 onClick={() => navigate(`/product/${item.id}`)}
//               />

//               <div
//                 className="item-details"
//                 onClick={() => navigate(`/product/${item.id}`)}
//               >
//                 <h4>{item.name}</h4>
//                 <p>Qty: {item.quantity || 1}</p>
//                 <p className="price">₹{item.price}</p>
//               </div>

//               <div className="item-status">
//                 <span className="status">{order.status}</span>
//                 <small>Delivery by {order.deliveryDate}</small>
//               </div>
//             </div>
//           ))}

//           {/* FOOTER */}
//           <div className="order-footer">
//             <button
//               className="cancel-btn"
//               onClick={() => cancelOrder(order.orderId)}
//             >
//               ✕ Cancel Order
//             </button>

//             <h3>Total: ₹{order.total}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Orders;


































































































import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = JSON.parse(localStorage.getItem("userInfo"));

      const { data } = await axios.get(
        "http://localhost:5000/api/orders/my",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setOrders(data);
    };

    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return <p className="empty">No orders found</p>;
  }

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <h4>Status: {order.status}</h4>
          <p>Total: ₹{order.totalAmount}</p>

          {order.items.map((item, i) => (
            <div key={i} className="order-item">
              <img src={item.image?.[0]} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;















// import { useEffect, useState } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/orders/admin"
//       );
//       setOrders(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>My Orders</h2>

//       {orders.length === 0 && <p>No orders yet</p>}

//       {orders.map((order) => (
//         <div
//           key={order._id}
//           style={{
//             border: "1px solid #ddd",
//             padding: "15px",
//             marginBottom: "20px",
//           }}
//         >
//           <p><b>Order ID:</b> {order._id}</p>
//           <p><b>Status:</b> {order.status}</p>
//           <p><b>Total:</b> ₹{order.totalAmount}</p>
//           <p><b>Payment:</b> {order.paymentMethod}</p>

//           <h4>Products</h4>
//           {order.items?.map((item, i) => (
//             <p key={i}>
//               {item.name} – ₹{item.price} × {item.quantity}
//             </p>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Orders;
