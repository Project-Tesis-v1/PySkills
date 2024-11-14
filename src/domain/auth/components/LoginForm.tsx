import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/authService';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // Estado para mostrar/ocultar contraseña
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await authService.login({ email, password });
      navigate('/'); // Redirige a la página principal
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign in</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">Sign in</button>

          {/* <div className="help-links">
            <a href="#">Need help?</a>
          </div> */}
        </form>

        <div className="additional-links">
          <p>Don’t have an account? <Link to="/register">Sign up</Link></p>
          <p className="privacy-note">This page is protected by Google reCAPTCHA to ensure you’re not a bot. <a href="#">Learn more</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
