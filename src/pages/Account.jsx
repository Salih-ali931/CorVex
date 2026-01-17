// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";



// /* ================= SAFE AUTH HELPERS ================= */

// // ❌ Old bad data (like "Ali") crash ഉണ്ടാക്കരുത്
// const getUser = () => {
//   try {
//     const user = localStorage.getItem("user");
//     return user ? JSON.parse(user) : null;
//   } catch (err) {
//     console.error("Invalid user in localStorage. Clearing...");
//     localStorage.removeItem("user");
//     return null;
//   }
// };

// const logout = () => {
//   localStorage.removeItem("user");
//   window.location.href = "/account";
// };

// /* ================= COMPONENT ================= */

// const Account = () => {
//   const navigate = useNavigate();
//   const user = getUser();

//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   // 🔐 LOGIN
//   const handleLogin = async () => {
//     try {
//       const res = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       // ✅ ALWAYS SAVE JSON
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       setMsg("Login success ✅");

//       setTimeout(() => navigate("/"), 800);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   // 📝 REGISTER
//   const handleRegister = async () => {
//     try {
//       await API.post("/auth/register", {
//         name,
//         email,
//         password,
//       });

//       setMsg("Account created ✅ Please sign in");
//       setIsLogin(true);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Register failed ❌");
//     }
//   };

//   /* ================= LOGGED-IN VIEW ================= */
//   if (user) {
//     return (
//       <div className="account-page">
//         <div className="account-box">
//           <h1>Welcome</h1>
//           <p className="sub">{user.name || user.email}</p>

//           <button className="primary-btn" onClick={logout}>
//             LOGOUT
//           </button>
//         </div>
//       </div>
//     );
//   }

//   /* ================= LOGIN / REGISTER VIEW ================= */
//   return (
//     <div className="account-page">
//       <div className="account-box">
//         <h1>{isLogin ? "Sign In" : "Create Account"}</h1>

//         <p className="sub">
//           {isLogin
//             ? "Welcome back to luxury eyewear"
//             : "Join BVLGARI for premium access"}
//         </p>

//         {!isLogin && (
//           <input
//             placeholder="Full Name"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         )}

//         <input
//           placeholder="Email Address"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />

//         <button
//           className="primary-btn"
//           onClick={isLogin ? handleLogin : handleRegister}
//         >
//           {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
//         </button>

//         <p className="msg">{msg}</p>

//         <div className="switch">
//           {isLogin ? (
//             <>
//               Don’t have an account?
//               <span onClick={() => setIsLogin(false)}> Create one</span>
//             </>
//           ) : (
//             <>
//               Already have an account?
//               <span onClick={() => setIsLogin(true)}> Sign in</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;




































// import { useState } from "react";
// import API from "../api/api";

// const Account = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogin = async () => {
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("user", JSON.stringify(res.data));
//       setMsg("Login success ✅");
//       window.location.reload();
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Login failed");
//     }
//   };

//   const handleRegister = async () => {
//     try {
//       await API.post("/auth/register", { name, email, password });
//       setMsg("Account created ✅ Please login");
//       setIsLogin(true);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Register failed");
//     }
//   };

//   const logout = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   if (user) {
//     return (
//       <div>
//         <h2>Welcome {user.name}</h2>
//         <button onClick={logout}>Logout</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>{isLogin ? "Login" : "Create Account"}</h2>

//       {!isLogin && (
//         <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
//       )}

//       <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

//       <button onClick={isLogin ? handleLogin : handleRegister}>
//         {isLogin ? "Login" : "Register"}
//       </button>

//       <p>{msg}</p>

//       <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
//         {isLogin ? "Create Account" : "Back to Login"}
//       </p>
//     </div>
//   );
// };

// export default Account;































// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";
// import "./Account.css";

// const Account = () => {
//   const navigate = useNavigate();

//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   // ✅ ONE SOURCE OF TRUTH
//   const user = JSON.parse(localStorage.getItem("userInfo"));

//   // 🔐 LOGIN (from account page)
//   const handleLogin = async () => {
//     try {
//       const res = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("userInfo", JSON.stringify(res.data));
//       setMsg("Login success ✅");
//       navigate("/", { replace: true });

//     } catch (err) {
//       setMsg(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   // 📝 REGISTER
//   const handleRegister = async () => {
//     try {
//       await API.post("/auth/register", {
//         name,
//         email,
//         password,
//       });

//       setMsg("Account created ✅ Please login");
//       setIsLogin(true);

//     } catch (err) {
//       setMsg(err.response?.data?.message || "Register failed ❌");
//     }
//   };

//   // 🚪 LOGOUT (CLEAR EVERYTHING)
//   const logout = () => {
//     localStorage.clear();
//     navigate("/login", { replace: true });
//   };

//   // ================= LOGGED IN =================
//   if (user) {
//     return (
//       <div className="account-page">
//         <h2>Welcome {user.name || user.email}</h2>

//         <button onClick={logout}>
//           Logout
//         </button>
//       </div>
//     );
//   }

//   // ================= LOGIN / REGISTER =================
//   return (
//     <div className="account-page">
//       <h2>{isLogin ? "Login" : "Create Account"}</h2>

//       {!isLogin && (
//         <input
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       )}

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={isLogin ? handleLogin : handleRegister}>
//         {isLogin ? "Login" : "Register"}
//       </button>

//       <p>{msg}</p>

//       <p
//         style={{ cursor: "pointer" }}
//         onClick={() => setIsLogin(!isLogin)}
//       >
//         {isLogin ? "Create Account" : "Back to Login"}
//       </p>
//     </div>
//   );
// };

// export default Account;



















// import { useNavigate } from "react-router-dom";

// import { useState } from "react";

//  import API from "../api/api";


// import "./Account.css";

// const Account = () => {
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("userInfo"));
//   const addresses =
//     JSON.parse(localStorage.getItem("savedAddresses")) || [];

//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   const logout = () => {
//     localStorage.removeItem("userInfo");
//     navigate("/login", { replace: true });
//   };

//   return (
//     <div className="account-wrapper">
//       <div className="account-card">

//         {/* PROFILE */}
//         <div className="profile">
//           <div className="avatar">
//             {(user.name || user.email)[0].toUpperCase()}
//           </div>

//           <h2>{user.name || "User"}</h2>
//           <p>{user.email}</p>

//           <button className="edit-btn">
//             Edit Profile
//           </button>
//         </div>

//         {/* ADDRESSES */}
//         <div className="section">
//           <h3>Saved Addresses</h3>

//           {addresses.length > 0 ? (
//             <div className="address-list">
//               {addresses.map((addr, index) => (
//                 <div className="address-card" key={index}>
//                   <strong>{addr.name}</strong>
//                   <p>{addr.mobile}</p>
//                   <p>{addr.area}, {addr.city}</p>
//                   <p>{addr.pincode}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="empty">No address saved</p>
//           )}
//         </div>

//         {/* ACTIONS */}
//         <div className="quick-actions">
//           <button onClick={() => navigate("/orders")}>
//             Order History
//           </button>

//           <button onClick={() => navigate("/wishlist")}>
//             Wishlist
//           </button>
//         </div>

//         {/* LOGOUT */}
//         <button className="logout" onClick={logout}>
//           Logout
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Account;



import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { clearWishlist } = useWishlist();

  const user = JSON.parse(localStorage.getItem("userInfo"));
  const addresses =
    JSON.parse(localStorage.getItem("addresses")) || [];

  if (!user) {
    navigate("/login");
    return null;
  }

  const logout = () => {
    // 🔥 CLEAR CONTEXT STATE (MOST IMPORTANT)
    clearCart();
    clearWishlist();

    // 🔥 CLEAR ADDRESS DATA
    localStorage.removeItem("addresses");
    localStorage.removeItem("selectedAddress");

    // 🔥 CLEAR AUTH DATA
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");

    // 🔄 FORCE FULL RESET (guaranteed clean UI)
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <div className="account-wrapper">
      <div className="account-card">

        {/* PROFILE */}
        <div className="profile">
          <div className="avatar">
            {(user.name || user.email)[0].toUpperCase()}
          </div>
          <h2>{user.name || "User"}</h2>
          <p>{user.email}</p>
          <button className="edit-btn">Edit Profile</button>
        </div>

        {/* ADDRESSES */}
        <div className="section">
          <h3>Saved Addresses</h3>

          {addresses.length > 0 ? (
            <div className="address-list">
              {addresses.map((addr, index) => (
                <div className="address-card" key={index}>
                  <strong>{addr.name}</strong>
                  <p>{addr.mobile}</p>
                  <p>{addr.area}, {addr.city}</p>
                  <p>{addr.pincode}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty">No address saved</p>
          )}
        </div>

        {/* ACTIONS */}
        <div className="quick-actions">
          <button onClick={() => navigate("/orders")}>
            Order History
          </button>
          <button onClick={() => navigate("/wishlist")}>
            Wishlist
          </button>
        </div>

        {/* LOGOUT */}
        <button className="logout" onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Account;
