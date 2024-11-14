// authService.ts
export const authService = {
  login: async ({ email, password }: { email: string; password: string }) => {
      // Simulación de una llamada a una API
      const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Error al iniciar sesión');

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data)); // Guardar datos de sesión en localStorage
      return data;
  },

  logout: () => {
      localStorage.removeItem('user');
  },

  isAuthenticated: () => {
      return Boolean(localStorage.getItem('user'));
  }
};
