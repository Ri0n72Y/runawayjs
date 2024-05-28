import styled from "styled-components";
import { useDiscussion } from "../../store/discussion";
import { Topic } from "./Topic";

export function Discussion() {
  const discussion = useDiscussion((state) => state.discussions);
  return (
    <Container>
      {discussion.map((d, i) => (
        <Topic key={i} {...d} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 4px;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
