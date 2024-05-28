import { useControls } from "leva";
import { Pages } from "../store/types";
import { useUIState } from "../store/ui";
import { useMessages } from "../store/message";
export function Debug() {
  const [page, setPage] = useUIState((state) => [state.page, state.setPage]);
  const [current, setCurrent, chats] = useMessages((state) => [
    state.currentChatId,
    state.setCurrentChatId,
    state.chats,
  ]);
  useControls(
    () => ({
      Page: {
        value: page,
        options: {
          Welcome: Pages.welcome,
          Email: Pages.email,
          Chat: Pages.chat,
          Opinions: Pages.discussion,
        },
        onChange: (value) => {
          console.log("leva set");
          setPage(value);
        },
      },
      ...(page === Pages.chat
        ? {
            Chats: {
              value: current,
              options: Object.keys(chats),
              onChange: setCurrent,
            },
          }
        : {}),
    }),
    [page]
  );
  return null;
}
