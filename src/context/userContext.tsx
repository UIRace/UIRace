// context/userContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import useHasMounted from "@hooks/useHasMounted";

interface UserContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const hasMounted = useHasMounted(); // safe check
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (hasMounted) {
      const storedLoginStatus = localStorage.getItem("isLoggedIn");
      if (storedLoginStatus === null) {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        return;
      }
      if (storedLoginStatus === "true") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, [hasMounted]);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  if (!hasMounted) return null; // prevent hydration mismatch

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
