import { useState } from 'react';
import { authService } from '../services/authService';

const useAuth = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || 'null'));

  const login = async (credentials: { email: string; password: string }) => {
    const response = await authService.login(credentials);
    setUser(response.user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout };
};

export default useAuth;
