import { create } from "zustand";
import { EventEmail, EventInfo } from "./types";
import { getEventList, getTextFile } from "../service/events";
import { useGame } from "./game";

type EventStatusType = "backlog" | "unread" | "active" | "pending" | "finished";
interface Event {
  info: EventInfo;
  state: EventStatusType;
}

interface EventState {
  events: Record<string, Event>;
  updateEvent: (id: string, status: EventStatusType) => void;
  loadEvents: () => void;
}
export const useEvents = create<EventState>()((set) => ({
  events: {},
  updateEvent: (id, status) => {
    set((state) => ({
      events: {
        ...state.events,
        [id]: {
          ...state.events[id],
          state: status,
        },
      },
    }));
  },
  loadEvents: async () => {
    const events: Event[] = [];
    const res = await getEventList();
    for (const id of res) {
      const file = await fetch(`/events/${id}.json`);
      const data: EventInfo = await file.json();
      switch (data.type) {
        case "m":
          (data as EventEmail).message = await replaceFile(
            (data as EventEmail).message
          );
          (data as EventEmail).message = replaceData(
            (data as EventEmail).message,
            useGame.getState().getVariables()
          );
          (data as EventEmail).title = replaceData(
            (data as EventEmail).title,
            useGame.getState().getVariables()
          );
          (data as EventEmail).receivers = (data as EventEmail).receivers.map(
            (r) => replaceData(r, useGame.getState().getVariables())
          );
          break;
        case "c":
        case "o":
      }
      events.push({ info: data, state: "unread" }); // FIXME: default should be backlog
    }
    set({ events: Object.fromEntries(events.map((e) => [e.info.eventId, e])) });
  },
}));

/**
 * replace {<param name>} with given data.
 * @param text contains '{}'
 */
function replaceData(text: string, data?: Record<string, string>) {
  data &&
    Object.keys(data).forEach((key) => {
      const pattern = `{${key}}`;
      if (text.includes(pattern)) {
        text = text.replace(pattern, data[key]);
      }
    });
  return text;
}

async function replaceFile(text: string) {
  const urlPattern = /\{\[([a-zA-Z0-9_\-./]+)?\]\}/g;
  // get url pattern from text, replace with getTextFile response
  const urlList = text.match(urlPattern);
  if (urlList) {
    for (const url of urlList) {
      const urlName = url.slice(2, -2);
      const urlValue = await getTextFile(urlName);
      text = text.replace(url, urlValue);
    }
  }
  return text;
}
