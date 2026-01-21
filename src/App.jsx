
















// import { Routes, Route, useLocation } from "react-router-dom";

// /* PAGES */
// import Home from "./pages/Home";
// import Men from "./pages/Men";
// import Women from "./pages/Women";
// import AllProducts from "./pages/AllProducts";
// import ProductDetail from "./pages/ProductDetail";
// import Wishlist from "./pages/Wishlist";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Orders from "./pages/Orders";
// import OrderSuccess from "./pages/OrderSuccess";
// import SearchResult from "./pages/SearchResult";
// import Account from "./pages/Account";
// import AdminOrders from "./pages/admin/AdminOrders";
// import Login from "./pages/Login";

// /* PAYMENT */
// import Payment from "./pages/Payment";
// import CardPayment from "./components/payment/CardPayment";
// import UpiPayment from "./components/payment/UpiPayment";
// import CodPayment from "./components/payment/CodPayment";

// /* ROUTE GUARD */
// import ProtectedRoute from "./components/ProtectedRoute";

// /* LAYOUT */
// import Footer from "./components/layout/Footer";

// function App() {
//   const location = useLocation();

//   const hideFooterRoutes = [
//     "/login",
//     "/order-success",
//     "/payment",
//     "/payment/card",
//     "/payment/upi",
//     "/payment/cod",
//   ];

//   const hideFooter = hideFooterRoutes.includes(location.pathname);

//   return (
//     <>
//       <Routes>
//         {/* PUBLIC */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />

//         <Route path="/men" element={<Men />} />
//         <Route path="/women" element={<Women />} />
//         <Route path="/shop" element={<AllProducts />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//         <Route path="/search" element={<SearchResult />} />

//         {/* USER */}
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/account" element={<Account />} />

//         {/* 🔐 PAYMENT (PROTECTED) */}
//         <Route
//           path="/payment"
//           element={
//             <ProtectedRoute>
//               <Payment />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/payment/card"
//           element={
//             <ProtectedRoute>
//               <CardPayment />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/payment/upi"
//           element={
//             <ProtectedRoute>
//               <UpiPayment />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/payment/cod"
//           element={
//             <ProtectedRoute>
//               <CodPayment />
//             </ProtectedRoute>
//           }
//         />

//         {/* ADMIN */}
//         <Route path="/admin/orders" element={<AdminOrders />} />

//         {/* SUCCESS */}
//         <Route path="/order-success" element={<OrderSuccess />} />
//       </Routes>

//       {!hideFooter && <Footer />}
//     </>
//   );
// }

// export default App;
















import { Routes, Route, useLocation } from "react-router-dom";

/* PAGES */
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Optical from "./pages/Optical";
import Jewelleries from "./pages/Jewelleries";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import OrderSuccess from "./pages/OrderSuccess";
import SearchResult from "./pages/SearchResult";
import Account from "./pages/Account";
import Login from "./pages/Login";

/* STATIC PAGES */
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

/* PAYMENT */
import Payment from "./pages/Payment";
import CardPayment from "./components/payment/CardPayment";
import UpiPayment from "./components/payment/UpiPayment";

/* LOADING */
import Loading from "./pages/Loading";

/* ADMIN */
import AdminOrders from "./pages/admin/AdminOrders";

/* ROUTE GUARD */
import ProtectedRoute from "./components/ProtectedRoute";

/* LAYOUT */
import Footer from "./components/layout/Footer";

function App() {
  const location = useLocation();

  const hideFooterRoutes = [
    "/login",
    "/order-success",
    "/payment",
    "/payment/card",
    "/payment/upi",
    "/loading",
  ];

  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/optical" element={<Optical />} />
        <Route path="/jewelleries" element={<Jewelleries />} />

        <Route path="/shop" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResult />} />

        {/* STATIC */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* USER */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Account />} />

        {/* 🔐 PAYMENT (PROTECTED) */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment/card"
          element={
            <ProtectedRoute>
              <CardPayment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment/upi"
          element={
            <ProtectedRoute>
              <UpiPayment />
            </ProtectedRoute>
          }
        />

        {/* ⏳ LOADING PAGE */}
        <Route path="/loading" element={<Loading />} />

        {/* ADMIN */}
        <Route path="/admin/orders" element={<AdminOrders />} />

        {/* SUCCESS */}
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
