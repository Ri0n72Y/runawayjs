import { useMemo } from "react";
import styled from "styled-components";
import { Pages } from "../store/types";
import { useUIState } from "../store/ui";
import { Chat } from "./Workspace/Chat";
import { Discussion } from "./Workspace/Discussion";
import { Email } from "./Workspace/Email";
import { Welcome } from "./Workspace/Welcome";
import { DiscussColorTheme, border } from "./styles";
import { text } from "./typography";
import { useDiscussion } from "../store/discussion";

export function Workspace() {
  const page = useUIState((state) => state.page);
  const theme = useDiscussion((state) => state.theme);
  const backgroundColor = useMemo(() => {
    switch (page) {
      case Pages.welcome:
        return "aliceblue";
      case Pages.email:
        return "white";
      case Pages.chat:
        return "#f1f1f1";
      case Pages.discussion:
        return DiscussColorTheme[theme].background;
    }
  }, [page, theme]);
  return (
    <Container style={{ backgroundColor }}>
      {page === Pages.welcome && <Welcome />}
      {page === Pages.email && <Email />}
      {page === Pages.chat && <Chat />}
      {page === Pages.discussion && <Discussion />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  ${border}
  ${text}
`;
