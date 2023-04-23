import React, { FC, useEffect, useState } from "react";

import { AuthContext } from "./context";
import { AppRouter } from "./components/AppRouter";

export const App: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
