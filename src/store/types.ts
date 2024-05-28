export enum Pages {
  welcome = 0,
  email = 1,
  chat = 2,
  discussion = 3,
}

export type EventType = "m" | "c" | "o";
export interface EventInfo {
  /* format: e<order in 000>-<m|c|o>-<lang>-name */
  eventId: string;
  eventName: string;
  type: EventType;
}

export interface EventEmail extends EventInfo {
  type: "m";
  receivers: string[];
  avatar?: string;
  title: string;
  message: string;
}

export interface EventDiscussion extends EventInfo {
  type: "c";
  source: string;
  topic: string;
  discussion: {
    title: string;
    text: string;
    time?: string;
    avatar?: string;
    name: string;
  }[];
}
