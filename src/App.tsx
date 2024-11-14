// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { authService } from './domain/auth/services/authService';
import LoginForm from './domain/auth/components/LoginForm';
import RegisterForm from './domain/auth/components/RegisterForm';
import HomePage from './pages/HomePage';
import TheoryPracticePage from './pages/TheoryPracticePage';
const App: React.FC = () => {
  const isAuthenticated = authService.isAuthenticated();

  return (
      <Router>
          <Routes>
              {/* Ruta principal "/": Muestra Login si no está autenticado */}
              <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginForm />} />

              {/* Ruta Home: solo accesible si el usuario está autenticado */}
              <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />

              {/* Ruta de teoría-práctica, protegida por autenticación */}
              <Route path="/theory-practice" element={isAuthenticated ? <TheoryPracticePage /> : <Navigate to="/" />} />

              {/* Ruta de Registro */}
              <Route path="/register" element={<RegisterForm />} />

              {/* Redirigir cualquier otra ruta no válida a "/" (Login) */}
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
  );
};

export default App;
