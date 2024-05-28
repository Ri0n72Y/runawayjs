import { create } from "zustand";
import { DiscussColorTheme } from "../ui/styles";

export interface LevelProps {
  title?: string;
  text: string;
  time?: string;
  avatar?: string;
  name: string;
}

export interface TopicProps {
  source: string;
  topic: string;
  discussion: LevelProps[];
}

type ColorTheme = keyof typeof DiscussColorTheme;
export interface DiscussionState {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  discussions: TopicProps[];
  setDiscussion: (topics: TopicProps[]) => void;
}

export const useDiscussion = create<DiscussionState>()((set) => ({
  theme: "yellow",
  setTheme: (theme) => set({ theme }),
  discussions: [],
  setDiscussion: (topics) => set({ discussions: topics }),
}));
