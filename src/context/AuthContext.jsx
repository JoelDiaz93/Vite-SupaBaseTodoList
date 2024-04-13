import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const userData = await supabase.auth.getUser();
      setUser(userData.data.user);
    } catch (error) {}
    setLoading(false);
  };

  const loginMagicLink = async (email) => {
    setLoading(true);
    try {
      const result = await supabase.auth.signInWithOtp({
        email: email,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        getUser,
        loginMagicLink,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
