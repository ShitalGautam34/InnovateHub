import { useContext } from "react";
import { AuthProvider } from "./AuthContext";

export const useAuth = () => {
  return useContext(AuthProvider);
};
