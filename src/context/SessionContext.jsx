// import { useLocalStorage } from '@mantine/hooks'; ... in case we use line 7
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SessionContext = createContext();

export default function SessionContextProvider({ children }) {
  // const [token, setToken] = useLocalStorage({key:'authToken'}) ... We can use it insteadof those two useEffect below, but not sure if it is just like that

  const navigate = useNavigate();

  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const verifyToken = async (currentToken) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/verify`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });
    if (response.status === 200) {
      const parsed = await response.json();
      setToken(currentToken);
      setIsLoggedIn(true);
      console.log(parsed);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const localToken = localStorage.getItem('authToken');
    if (localToken) {
      verifyToken(localToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
      setIsLoading(false);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [token]);

  const logout = () => {
    setToken();
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <SessionContext.Provider
      value={{ token, setToken, isLoggedIn, setIsLoggedIn, isLoading, logout }}
    >
      {children}
    </SessionContext.Provider>
  );
}
