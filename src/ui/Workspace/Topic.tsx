import styled from "styled-components";
import { LevelProps, TopicProps, useDiscussion } from "../../store/discussion";
import { DiscussColorTheme } from "../styles";

export function Topic(props: TopicProps) {
  const theme = useDiscussion((state) => state.theme);
  return (
    <Container>
      <TopicTitle style={{ background: DiscussColorTheme[theme].background }}>
        <span>{props.topic}</span>
        <SourceText> - {props.source}</SourceText>
      </TopicTitle>
      {props.discussion.map((d, i) => (
        <Level key={i} index={i} {...d} title={`#${i} ${d.title}`} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  color: #10273f;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: white;
  padding: 1px;
  border-radius: 4px;
  box-shadow: 0 0 5px -3px #000;
`;

const TopicTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 0.6rem 1rem;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SourceText = styled.span`
  opacity: 0.6;
  font-size: 12px;
`;

function Level(props: LevelProps & { index: number }) {
  const userColor = DiscussColorTheme.yellow.user[props.index % 2];
  const contentColor = DiscussColorTheme.yellow.content[props.index % 2];
  return (
    <LevelContainer>
      <UserContainer style={{ backgroundColor: userColor }}>
        <Avatar src={props.avatar} />
        <Name>{props.name}</Name>
      </UserContainer>
      <ContentContainer style={{ backgroundColor: contentColor }}>
        <Title>
          {!!props.title && <span>{props.title}</span>}
          <Time>{props.time}</Time>
        </Title>
        <Text>{props.text}</Text>
      </ContentContainer>
    </LevelContainer>
  );
}

const LevelContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1px;
  min-height: 10rem;
`;

const Text = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #dfd6cb;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: #fff0cd;
  padding: 0.4rem 0.6rem;
`;

const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 4px;
`;

const Name = styled.div`
  color: #4b4b4b;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem;
`;
