// import { useState } from "react";
// import API from "../api/api";


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       // ✅ SAVE USER IN LOCAL STORAGE
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // ✅ SUCCESS MESSAGE
//       setMsg(res.data.message || "Login success ✅");

//       // ✅ REDIRECT TO HOME
//       setTimeout(() => {
//         window.location.href = "/";
//       }, 1000);

//     } catch (err) {
//       setMsg(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   return (
//     <div style={{ padding: 40 }}>
//       <h2>Login</h2>

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <br /><br />

//       <button onClick={handleLogin}>Login</button>

//       <p>{msg}</p>
//     </div>
//   );
// };

// export default Login;





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       // ✅ SAVE TOKEN + USER
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data));

//       alert("Login Success ✅");
//       navigate("/"); // or /account
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={submitHandler}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">LOGIN</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
































































// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5001/api/auth/login",
//         { email, password }
//       );

//       // ✅ SAVE LOGIN
//       localStorage.setItem("userInfo", JSON.stringify(res.data));

//       alert("Login Success ✅");

//       // 🔥 GO BACK TO WHERE USER CAME FROM
//       const redirectPath =
//         localStorage.getItem("redirectAfterLogin") || "/";

//       localStorage.removeItem("redirectAfterLogin");

//       navigate(redirectPath, { replace: true });

//     } catch (error) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
//  import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       // ✅ SAVE USER + TOKEN
//       localStorage.setItem("userInfo", JSON.stringify(res.data));

//       setMsg("Login success ✅");

//       const redirectPath =
//         localStorage.getItem("redirectAfterLogin") || "/";

//       localStorage.removeItem("redirectAfterLogin");
//       navigate(redirectPath, { replace: true });

//     } catch (error) {
//       setMsg(error.response?.data?.message || "Login failed ❌");
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Login</button>
//       </form>

//       <p>{msg}</p>
//     </div>
//   );
// };

// export default Login;












































// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [isSignup, setIsSignup] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMsg("");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       localStorage.setItem("userInfo", JSON.stringify(res.data));

//       const redirect =
//         localStorage.getItem("redirectAfterLogin") || "/";
//       localStorage.removeItem("redirectAfterLogin");

//       navigate(redirect, { replace: true });
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className={`login-card ${isSignup ? "signup" : ""}`}>

//         {/* BLUE PANEL */}
//         <div className="info-panel">
//           <h1 className="logo">CorVex</h1>
//           <h2>{isSignup ? "Welcome Back" : "Hello Friend"}</h2>
//           <p>
//             {isSignup
//               ? "Login with your personal account"
//               : "Create an account and start your journey"}
//           </p>

//           <button onClick={() => setIsSignup(!isSignup)}>
//             {isSignup ? "SIGN IN" : "SIGN UP"}
//           </button>
//         </div>

//         {/* WHITE PANEL */}
//         <div className="form-panel">
//           {!isSignup ? (
//             <>
//               <h2>Sign In</h2>

//               <form onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />

//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />

//                 <button type="submit">SIGN IN</button>
//               </form>

//               {msg && <p className="msg">{msg}</p>}
//             </>
//           ) : (
//             <>
//               <h2>Create Account</h2>
//               <input placeholder="Full Name" />
//               <input placeholder="Email" />
//               <input type="password" placeholder="Password" />
//               <button>SIGN UP</button>
//             </>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;
























































// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [isSignup, setIsSignup] = useState(false);

//   // login
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // signup
//   const [name, setName] = useState("");
//   const [signupEmail, setSignupEmail] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");

//   const [msg, setMsg] = useState("");

//   // LOGIN
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMsg("");

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       localStorage.setItem("userInfo", JSON.stringify(res.data));

//       const redirect =
//         localStorage.getItem("redirectAfterLogin") || "/";
//       localStorage.removeItem("redirectAfterLogin");

//       navigate(redirect, { replace: true });
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   // REGISTER
//   const handleRegister = async () => {
//     setMsg("");

//     try {
//       await axios.post(
//         "http://localhost:5000/api/auth/register",
//         {
//           name,
//           email: signupEmail,
//           password: signupPassword,
//         }
//       );

//       setMsg("Account created ✅ Please login");
//       setIsSignup(false);

//       // clear signup fields
//       setName("");
//       setSignupEmail("");
//       setSignupPassword("");
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Register failed ❌");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className={`login-card ${isSignup ? "signup" : ""}`}>

//         {/* BLUE PANEL */}
//         <div className="info-panel">
//           <h1 className="logo">CorVex</h1>
//           <h2>{isSignup ? "Welcome Back" : "Hello Friend"}</h2>
//           <p>
//             {isSignup
//               ? "Login with your personal account"
//               : "Create an account and start your journey"}
//           </p>

//           <button onClick={() => {
//             setMsg("");
//             setIsSignup(!isSignup);
//           }}>
//             {isSignup ? "SIGN IN" : "SIGN UP"}
//           </button>
//         </div>

//         {/* WHITE PANEL */}
//         <div className="form-panel">
//           {!isSignup ? (
//             <>
//               <h2>Sign In</h2>

//               <form onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />

//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />

//                 <button type="submit">SIGN IN</button>
//               </form>

//               {msg && <p className="msg">{msg}</p>}
//             </>
//           ) : (
//             <>
//               <h2>Create Account</h2>

//               <input
//                 placeholder="Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />

//               <input
//                 placeholder="Email"
//                 value={signupEmail}
//                 onChange={(e) => setSignupEmail(e.target.value)}
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={signupPassword}
//                 onChange={(e) => setSignupPassword(e.target.value)}
//               />

//               <button onClick={handleRegister}>SIGN UP</button>

//               {msg && <p className="msg">{msg}</p>}
//             </>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;




import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/api";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signup
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [msg, setMsg] = useState("");

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/account", { replace: true });

    } catch {
      setMsg("Login failed ❌");
    }
  };

  /* ================= SIGNUP (AUTO LOGIN) ================= */
  const handleRegister = async () => {
    setMsg("");

    try {
      const { data } = await API.post("/auth/register", {
        name,
        email: signupEmail,
        password: signupPassword,
      });

      // 🔥 AUTO LOGIN
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/account", { replace: true });

    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="login-wrapper">
      <div className={`login-card ${isSignup ? "signup" : ""}`}>

        <div className="info-panel">
          <h1 className="logo">CorVex</h1>
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "SIGN IN" : "SIGN UP"}
          </button>
        </div>

        <div className="form-panel">
          {!isSignup ? (
            <>
              <h2>Sign In</h2>
              <form onSubmit={handleLogin}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button type="submit">SIGN IN</button>
              </form>
              {msg && <p>{msg}</p>}
            </>
          ) : (
            <>
              <h2>Create Account</h2>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
              <input
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Password"
              />
              <button onClick={handleRegister}>SIGN UP</button>
              {msg && <p>{msg}</p>}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Login;
