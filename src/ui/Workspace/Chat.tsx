import styled from "styled-components";
import { MessageProps, Wechat } from "./ChatMessage";
import { useMessages, useUsers } from "../../store/message";
import { useMemo } from "react";

export function Chat() {
  const [id, chats] = useMessages((state) => [
    state.currentChatId,
    state.chats,
  ]);
  const users = useUsers((state) => state.users);
  const messages = useMemo<MessageProps[]>(
    () =>
      chats[id]?.map((m) => {
        const user = users[m.uid];
        return {
          section: "bottom",
          align: user.uid === "self" ? "right" : "left",
          label: user.name,
          message: m.message,
          time: m.time,
          avatar: user.avatar,
        };
      }) ?? [],
    [id, chats, users]
  );
  const isGroup = id.slice(0, 2) === "g_";

  return <ChatComponent messages={messages} isGroup={isGroup} />;
}

interface Props {
  isGroup?: boolean;
  messages: MessageProps[];
}

function ChatComponent({ messages, isGroup }: Props) {
  return (
    <Container>
      {messages.map((message, index) => (
        <Wechat
          key={index}
          section={message.section}
          hideLabel={!isGroup}
          align={message.label === "self" ? "right" : message.align}
          label={message.label}
          message={message.message}
          avatar={message.avatar}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
