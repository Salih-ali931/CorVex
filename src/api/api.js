// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // ✅ PLACE ORDER
// export const placeOrder = async (orderData) => {
//   const res = await API.post("/orders/create", orderData);
//   return res.data;
// };

// // ✅ GET MY ORDERS
// export const getMyOrders = async () => {
//   const res = await API.get("/orders/admin"); 
//   return res.data;
// };



// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export default API;



// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// export default API;
import axios from "axios";

const API = axios.create({
  baseURL: "https://corvex-b-1.onrender.com/api",
  withCredentials: false,
});

export default API;

