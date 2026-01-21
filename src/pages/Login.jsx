// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import API from "../api/api";
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
//   const [loading, setLoading] = useState(false);

//   /* 🔥 BACKEND WARM-UP (FREE HOST FIX) */
//   useEffect(() => {
//     API.get("/").catch(() => {});
//   }, []);

//   /* ================= LOGIN ================= */
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     setMsg("");
//     setLoading(true);

//     try {
//       const { data } = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("userInfo", JSON.stringify(data));
//       localStorage.setItem("token", data.token);

//       navigate("/account", { replace: true });
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Login failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= SIGNUP ================= */
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     setMsg("");
//     setLoading(true);

//     try {
//       const { data } = await API.post("/auth/register", {
//         name,
//         email: signupEmail,
//         password: signupPassword,
//       });

//       localStorage.setItem("userInfo", JSON.stringify(data));
//       localStorage.setItem("token", data.token);

//       navigate("/account", { replace: true });
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Signup failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className={`login-card ${isSignup ? "signup" : ""}`}>

//         <div className="info-panel">
//           <h1 className="logo">CorVex</h1>
//           <button
//             disabled={loading}
//             onClick={() => setIsSignup(!isSignup)}
//           >
//             {isSignup ? "SIGN IN" : "SIGN UP"}
//           </button>
//         </div>

//         <div className="form-panel">
//           {!isSignup ? (
//             <>
//               <h2>Sign In</h2>
//               <form onSubmit={handleLogin}>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   required
//                 />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                   required
//                 />
//                 <button type="submit" disabled={loading}>
//                   {loading ? "SIGNING IN..." : "SIGN IN"}
//                 </button>
//               </form>
//               {msg && <p className="error">{msg}</p>}
//             </>
//           ) : (
//             <>
//               <h2>Create Account</h2>
//               <form onSubmit={handleRegister}>
//                 <input
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Full Name"
//                   required
//                 />
//                 <input
//                   type="email"
//                   value={signupEmail}
//                   onChange={(e) => setSignupEmail(e.target.value)}
//                   placeholder="Email"
//                   required
//                 />
//                 <input
//                   type="password"
//                   value={signupPassword}
//                   onChange={(e) => setSignupPassword(e.target.value)}
//                   placeholder="Password"
//                   required
//                 />
//                 <button type="submit" disabled={loading}>
//                   {loading ? "CREATING ACCOUNT..." : "SIGN UP"}
//                 </button>
//               </form>
//               {msg && <p className="error">{msg}</p>}
//             </>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);

  /* 🔥 BACKEND WARM-UP (FREE HOST FIX) */
  useEffect(() => {
    API.get("/").catch(() => {});
  }, []);

  /* 🔁 COMMON REDIRECT HANDLER */
  const handleRedirect = () => {
    const redirect = localStorage.getItem("redirectAfterLogin");

    if (redirect) {
      localStorage.removeItem("redirectAfterLogin");
      navigate(redirect, { replace: true });
    } else {
      navigate("/account", { replace: true });
    }
  };

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;

    setMsg("");
    setLoading(true);

    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      handleRedirect(); // ✅ FIX
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SIGNUP ================= */
  const handleRegister = async (e) => {
    e.preventDefault();
    if (loading) return;

    setMsg("");
    setLoading(true);

    try {
      const { data } = await API.post("/auth/register", {
        name,
        email: signupEmail,
        password: signupPassword,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      handleRedirect(); // ✅ FIX
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className={`login-card ${isSignup ? "signup" : ""}`}>

        <div className="info-panel">
          <h1 className="logo">CorVex</h1>
          <button
            disabled={loading}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "SIGN IN" : "SIGN UP"}
          </button>
        </div>

        <div className="form-panel">
          {!isSignup ? (
            <>
              <h2>Sign In</h2>
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? "SIGNING IN..." : "SIGN IN"}
                </button>
              </form>
              {msg && <p className="error">{msg}</p>}
            </>
          ) : (
            <>
              <h2>Create Account</h2>
              <form onSubmit={handleRegister}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? "CREATING ACCOUNT..." : "SIGN UP"}
                </button>
              </form>
              {msg && <p className="error">{msg}</p>}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Login;
