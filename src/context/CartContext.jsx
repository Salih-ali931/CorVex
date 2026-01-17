// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   /* LOAD CART FROM LOCALSTORAGE */
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(saved);
//   }, []);

//   const saveCart = (items) => {
//     setCartItems(items);
//     localStorage.setItem("cart", JSON.stringify(items));
//   };

//   /* ADD TO CART */
//   const addToCart = (product, qty = 1) => {
//     const exist = cartItems.find((i) => i.id === product.id);

//     let updated;
//     if (exist) {
//       updated = cartItems.map((i) =>
//         i.id === product.id ? { ...i, qty: i.qty + qty } : i
//       );
//     } else {
//       updated = [...cartItems, { ...product, qty }];
//     }

//     saveCart(updated);
//   };

//   /* ✅ UPDATE QTY */
//   const updateQty = (id, qty) => {
//     const updated = cartItems.map((item) =>
//       item.id === id ? { ...item, qty } : item
//     );
//     saveCart(updated);
//   };

//   /* REMOVE */
//   const removeFromCart = (id) => {
//     const updated = cartItems.filter((item) => item.id !== id);
//     saveCart(updated);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, updateQty, removeFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

















// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
//   }, []);

//   const saveCart = (items) => {
//     setCartItems(items);
//     localStorage.setItem("cart", JSON.stringify(items));
//   };

//   const addToCart = (product, qty = 1) => {
//     const exists = cartItems.find(i => i.id === product.id);
//     let updated;

//     if (exists) {
//       updated = cartItems.map(i =>
//         i.id === product.id ? { ...i, qty: i.qty + qty } : i
//       );
//     } else {
//       updated = [...cartItems, { ...product, qty }];
//     }

//     saveCart(updated);
//   };

//   const updateQty = (id, qty) => {
//     const updated = cartItems.map(i =>
//       i.id === id ? { ...i, qty } : i
//     );
//     saveCart(updated);
//   };

//   const removeFromCart = (id) => {
//     saveCart(cartItems.filter(i => i.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       updateQty,
//       removeFromCart
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
































// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
//   }, []);

//   const saveCart = (items) => {
//     setCartItems(items);
//     localStorage.setItem("cart", JSON.stringify(items));
//   };

//   const addToCart = (product, qty = 1) => {
//     const exists = cartItems.find(i => i.id === product.id);
//     let updated;

//     if (exists) {
//       updated = cartItems.map(i =>
//         i.id === product.id ? { ...i, qty: i.qty + qty } : i
//       );
//     } else {
//       updated = [...cartItems, { ...product, qty }];
//     }

//     saveCart(updated);
//   };

//   const updateQty = (id, qty) => {
//     const updated = cartItems.map(i =>
//       i.id === id ? { ...i, qty } : i
//     );
//     saveCart(updated);
//   };

//   const removeFromCart = (id) => {
//     saveCart(cartItems.filter(i => i.id !== id));
//   };

//   // ✅ TOTAL AMOUNT (SINGLE SOURCE OF TRUTH)
//   const cartTotal = cartItems.reduce(
//     (sum, item) => sum + item.price * (item.qty || 1),
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         updateQty,
//         removeFromCart,
//         cartTotal, // ✅ FIX
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const addToCart = (product, qty = 1) => {
    const exists = cartItems.find(i => i.id === product.id);
    const updated = exists
      ? cartItems.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      : [...cartItems, { ...product, qty }];

    saveCart(updated);
  };

  const updateQty = (id, qty) => {
    saveCart(cartItems.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeFromCart = (id) => {
    saveCart(cartItems.filter(i => i.id !== id));
  };

  // 🔥 THIS FIXES LOGOUT CART ISSUE
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart, // ✅ IMPORTANT
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
