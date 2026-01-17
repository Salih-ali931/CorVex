// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./AdminOrders.css";

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     const { data } = await axios.get(
//       "http://localhost:5000/api/admin/orders"
//     );
//     setOrders(data);
//   };

//   const updateStatus = async (id, status) => {
//     await axios.put(
//       `http://localhost:5000/api/admin/orders/${id}/status`,
//       { status }
//     );
//     fetchOrders();
//   };

//   const deleteOrder = async (id) => {
//     await axios.delete(
//       `http://localhost:5000/api/admin/orders/${id}`
//     );
//     fetchOrders();
//   };

//   return (
//     <div className="admin-orders">
//       <h1>Admin – Orders</h1>

//       {orders.map((order) => (
//         <div className="admin-card" key={order._id}>
//           <div className="admin-header">
//             <strong>#{order.razorpayOrderId}</strong>
//             <span>₹{order.totalAmount}</span>
//           </div>

//           {order.items.map((item, i) => (
//             <p key={i}>
//               {item.name} × {item.quantity || 1}
//             </p>
//           ))}

//           <select
//             value={order.paymentStatus}
//             onChange={(e) =>
//               updateStatus(order._id, e.target.value)
//             }
//           >
//             <option>Pending</option>
//             <option>Shipped</option>
//             <option>Delivered</option>
//             <option>Cancelled</option>
//           </select>

//           <button
//             className="delete-btn"
//             onClick={() => deleteOrder(order._id)}
//           >
//             Delete Order
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminOrders;















import { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders/admin")
      .then((res) => setOrders(res.data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Orders</h2>

      {orders.map((order) => (
        <div key={order._id} style={{ border: "2px solid black", margin: 15 }}>
          <p>Order ID: {order._id}</p>
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.totalAmount}</p>

          {order.items.map((item, i) => (
            <p key={i}>
              {item.name} – ₹{item.price} × {item.quantity}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;


