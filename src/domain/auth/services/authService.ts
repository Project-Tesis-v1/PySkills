export const authService = {
  login: async (credentials: { email: string; password: string }) => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      return { success: true, user: storedUser };
    }
    throw new Error('Invalid credentials');
  },
  register: async (data: { email: string; password: string }) => {
    localStorage.setItem('user', JSON.stringify(data));
    return { success: true, user: data };
  },
};
