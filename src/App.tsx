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
        {/* Ruta principal que redirige a login si no está autenticado */}
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* Redirige rutas no válidas a la página principal */}
        <Route path="/theory-practice" element={<TheoryPracticePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
