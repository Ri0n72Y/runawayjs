import { HTMLAttributes, useState } from "react";
import styled from "styled-components";
import Mail from "../assets/Mail";
import { RedDot } from "../assets/redDot";
import Triangle from "../assets/triangle";
import { useEmail } from "../store/email";
import { useEvents } from "../store/events";
import { EventEmail, Pages } from "../store/types";
import { useUIState } from "../store/ui";
import { text } from "./typography";

export function EmailEvent({ eventId }: { eventId: string }) {
  const [events, updateEvent] = useEvents((state) => [
    state.events,
    state.updateEvent,
  ]);
  const [setPage] = useUIState((state) => [state.setPage]);
  const setEmail = useEmail((state) => state.setEmail);
  const event = events[eventId];
  const info = event.info as EventEmail;

  return (
    <SideIcon
      message={info.title}
      onClick={() => {
        setEmail(info);
        updateEvent(eventId, "active");
        setPage(Pages.email);
      }}
    >
      <Mail />
      {event.state === "unread" && <Alert />}
    </SideIcon>
  );
}

const Alert = styled(RedDot)`
  position: absolute;
  right: 12px;
  top: 15px;
  opacity: 0.8;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  message?: string;
}
export function SideIcon({ message, children, ...rest }: Props) {
  const [hover, setHover] = useState(false);
  const [fade, setFade] = useState(false);
  return (
    <Container
      onMouseEnter={() => {
        setHover(true);
        setFade(true);
      }}
      onMouseLeave={() => {
        setFade(false);
        setTimeout(() => setHover(false), 150);
      }}
      {...rest}
    >
      {children}
      {message && hover && (
        <Bubble
          style={{
            opacity: fade ? 1 : 0,
          }}
        >
          <BubbleText>{message}</BubbleText>
          <Arrow />
        </Bubble>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: var(--icon-size);
  height: var(--icon-size);
  border-radius: 50%;
  background-color: #f0f0f0;
  border: 2px solid lightgray;
  transition: all 150ms ease-in-out;
  user-select: none;
  cursor: pointer;
  opacity: 0.6;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    opacity: 1;
  }
`;

const Bubble = styled.div`
  position: absolute;
  left: calc(100% + 1rem);
  background-color: #f0f0f0;
  transition: all 150ms ease-in-out;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 1rem 2px lightgray;
  ${text}
`;

const BubbleText = styled.div`
  max-width: 20rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Arrow = styled(Triangle)`
  position: absolute;
  left: -8px;
  color: #f0f0f0;
`;
