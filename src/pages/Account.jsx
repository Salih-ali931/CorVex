import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { clearWishlist } = useWishlist();

  const user = JSON.parse(localStorage.getItem("userInfo"));
  const addresses = JSON.parse(localStorage.getItem("addresses")) || [];

  /* 🔥 AUTH GUARD (CORRECT WAY) */
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  if (!user) return null;

  const logout = () => {
    clearCart();
    clearWishlist();

    localStorage.removeItem("addresses");
    localStorage.removeItem("selectedAddress");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");

    navigate("/login", { replace: true });
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
