import { UserProfile } from '../models/UserProfile';

export const userRepository = {
  getUserProfile: async (userId: string): Promise<UserProfile> => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser && storedUser.id === userId) {
      return storedUser;
    }
    throw new Error('User not found');
  },
};
