import { create } from "zustand";

export interface EmailProps {
  receivers: string[];
  title: string;
  message: string;
  avatar?: string;
}
export interface EmailState {
  email: EmailProps;
  setEmail: (email: EmailProps) => void;
}

export const useEmail = create<EmailState>()((set) => ({
  email: { receivers: [], title: "", message: "", avatar: undefined },
  setEmail: (email) => set({ email }),
}));
