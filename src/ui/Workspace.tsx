import styled from "styled-components";
import { Pages } from "../store/types";
import { useUIState } from "../store/ui";
import { Chat } from "./Workspace/Chat";
import { Email } from "./Workspace/Email";
import { Opinions } from "./Workspace/Opinions";
import { border } from "./styles";
import { text } from "./typography";
import { useMemo } from "react";
import { Welcome } from "./Workspace/Welcome";

export function Workspace() {
  const page = useUIState((state) => state.page);
  console.log(page);
  const backgroundColor = useMemo(() => {
    switch (page) {
      case Pages.welcome:
        return "aliceblue";
      case Pages.email:
        return "white";
      case Pages.chat:
        return "#f1f1f1";
      case Pages.opinions:
        return "#fff0cd";
    }
  }, [page]);
  return (
    <Container style={{ backgroundColor }}>
      {page === Pages.welcome && <Welcome />}
      {page === Pages.email && <Email />}
      {page === Pages.chat && <Chat />}
      {page === Pages.opinions && <Opinions />}
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
