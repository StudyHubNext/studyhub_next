import { create } from 'zustand';
import { MOCK_USER } from '@/mocks';
import { User } from '@/types';
import { persist } from 'zustand/middleware';

interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: () => set({ isLoggedIn: true, user: MOCK_USER }),
      logout: () => set({ isLoggedIn: false, user: null }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
