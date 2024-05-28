import { useEffect } from "react";
import styled from "styled-components";
import { Home } from "../assets/home";
import { useEvents } from "../store/events";
import { Pages } from "../store/types";
import { useUIState } from "../store/ui";
import { DiscussEvent, EmailEvent, SideIcon } from "./SideIcon";
import { border } from "./styles";

export function Side() {
  const [events, load] = useEvents((state) => [state.events, state.loadEvents]);
  const setPage = useUIState((state) => state.setPage);
  useEffect(() => {
    load();
  }, [load]);
  return (
    <Container>
      {Object.keys(events).map((id) => {
        const event = events[id];
        switch (event.info.type) {
          case "m":
            return <EmailEvent key={id} eventId={id} />;
          case "o":
            return <DiscussEvent key={id} eventId={id} />;
          default:
            break;
        }
      })}
      <HomeIcon onClick={() => setPage(Pages.welcome)}>
        <Home />
      </HomeIcon>
    </Container>
  );
}

const HomeIcon = styled(SideIcon)`
  margin-top: auto;
  opacity: 0.2;
`;

const Container = styled.div`
  width: fit-content;
  height: 100%;
  background-color: aliceblue;
  transition: all 300ms ease;
  user-select: none;
  ${border}

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
