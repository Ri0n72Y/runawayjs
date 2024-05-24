import { create } from "zustand";

interface MessageProps {
  uid: string;
  message: string;
  time: string;
}
interface MessageState {
  currentChatId: string; // current chat id
  setCurrentChatId: (id: string) => void;
  chats: Record<string, MessageProps[]>;
  addMessage: (id: string, message: MessageProps) => void;
}

const mocked = [
  {
    uid: "1",
    message: "hello",
    time: "10:00",
  },
  {
    uid: "2",
    message: "world",
    time: "10:01",
  },
  {
    uid: "self",
    message: "hello world",
    time: "10:02",
  },
];

export const useMessages = create<MessageState>()((set) => ({
  currentChatId: "",
  setCurrentChatId: (id: string) => set({ currentChatId: id }),
  chats: { mocked: mocked },
  addMessage: (id: string, message: MessageProps) => {
    set((state) => ({
      chats: {
        ...state.chats,
        [id]: [...(state.chats[id] ?? []), message],
      },
    }));
  },
}));

interface User {
  uid: string;
  name: string;
  avatar: string;
}

export const useUsers = create<{
  users: Record<string, User>;
  loadUsers: (users: User[]) => void;
}>()((set) => ({
  loadUsers: (users: User[]) =>
    set({ users: Object.fromEntries(users.map((u) => [u.uid, u])) }),
  users: {
    "1": {
      uid: "1",
      name: "Alice",
      avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
    },
    "2": {
      uid: "2",
      name: "Bob",
      avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
    },
    "3": {
      uid: "3",
      name: "Charlie",
      avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
    },
    self: {
      uid: "self",
      name: "Cute Cat",
      avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
    },
  },
}));
