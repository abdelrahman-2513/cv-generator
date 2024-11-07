import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  userFullData: JSON.parse(localStorage.getItem("userData")) || null,
  login: (userData) => {
    set({ user: userData });
    console.log(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  },
  setUserData: (userData) => {
    set({ userFullData: userData });
    localStorage.setItem("userData", JSON.stringify(userData));
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },
  initializeAuthState: () => {
    const savedUser = localStorage.getItem("user");
    set({ user: savedUser ? JSON.parse(savedUser) : null });
  },
}));
export default useAuthStore;
