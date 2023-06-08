import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  toggleLogin: () => void {},
});
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: React.PropsWithChildren<object>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// import { createContext, useContext, useEffect, useState } from "react";

// interface ContextProps {
//   auth: boolean | false;
//   setAuth: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const AuthContext = createContext(false);

// export const useAuth = () => useContext(AuthContext);
// import React from "react";

// function AutContextProvider({ children }: any) {
//   const [auth, setAuth] = useState<boolean>(false);
//   return (
//     <div>
//       <AuthContext.Provider value={false}>{children}</AuthContext.Provider>{" "}
//     </div>
//   );
// }

// export default AutContextProvider;
