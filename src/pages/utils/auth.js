// Get logged-in user from localStorage
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Check if user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};

// Logout user
export const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/account";
};-['']
