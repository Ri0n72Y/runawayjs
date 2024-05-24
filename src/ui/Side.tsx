import styled from "styled-components";
import { EmailEvent } from "./SideIcon";
import { border } from "./styles";
import { useEvents } from "../store/events";
import { useEffect } from "react";

export function Side() {
  const [events, load] = useEvents((state) => [state.events, state.loadEvents]);
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
          default:
            break;
        }
      })}
    </Container>
  );
}

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
  padding: 1rem;
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
