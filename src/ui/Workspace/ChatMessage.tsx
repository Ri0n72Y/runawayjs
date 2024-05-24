import { useMemo } from "react";
import styled, { CSSProperties } from "styled-components";

export interface MessageProps {
  section?: "top" | "inbetween" | "bottom";
  align?: "left" | "right";
  hideLabel?: boolean;
  label: string;
  message: string;
  time?: string;
  avatar?: string;
}

export function Wechat(props: MessageProps) {
  const { section, label, hideLabel, time, align, message, avatar } = props;
  const style = useMemo<CSSProperties>(() => {
    const key =
      (align ?? "left").charAt(0).toUpperCase() + (align ?? "left").slice(1);
    return {
      ...(section === "top" || section === "inbetween"
        ? {
            [`borderBottom${key}Radius`]: 0,
          }
        : {}),
      ...(section === "bottom" || section === "inbetween"
        ? {
            [`borderTop${key}Radius`]: 0,
          }
        : {}),
    };
  }, [align, section]);
  const alignStyle = useMemo<CSSProperties>(
    () => ({
      ...(align === "right" ? { flexDirection: "row-reverse" } : {}),
    }),
    [align]
  );
  return (
    <Container style={alignStyle}>
      <AvatarContainer>
        <Avatar
          src={avatar ?? "https://i.pravatar.cc/300?u=a042581f4e29026707d"}
        />
      </AvatarContainer>
      <MessageContainer>
        {!hideLabel && align !== "right" && (
          <Name>
            <span>{label}</span>
            <Time>{time}</Time>
          </Name>
        )}
        <Message style={style}>{message}</Message>
      </MessageContainer>
    </Container>
  );
}

const Name = styled.div`
  color: #aaaaaa;
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 16rem;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Time = styled.span`
  visibility: hidden;
  font-size: 0.8rem;
`;

const Message = styled.div`
  width: fit-content;
  display: flex;
  background-color: white;
  padding: 0.6rem;
  border-radius: 0.4rem;
  max-width: 20rem;
  word-break: break-all;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
const AvatarContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  &:hover ${Time} {
    visibility: visible;
  }
`;
