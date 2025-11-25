import { create } from 'zustand';
import { MOCK_USER } from '@/mocks';
import { User } from '@/types';

interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  user: null,
  login: () => set({ isLoggedIn: true, user: MOCK_USER }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));
