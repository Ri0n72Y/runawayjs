import styled from "styled-components";
import Person from "../../assets/Person";
import Mail from "../../assets/Mail";
import { EmailProps, useEmail } from "../../store/email";

export function Email() {
  const email = useEmail((state) => state.email);
  return <EmailComponent {...email} />;
}

function EmailComponent({ avatar, receivers, title, message }: EmailProps) {
  return (
    <Container>
      <Line>
        {avatar ? <Avatar src={avatar} /> : <Person />}
        <Emails>
          {receivers.map((r, i) => (
            <EmailContainer key={i}>{r}</EmailContainer>
          ))}
        </Emails>
      </Line>
      <Line>
        <Mail />
        <Title>{title}</Title>
      </Line>
      <Multiline>{message}</Multiline>
    </Container>
  );
}

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Emails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Line = styled.div`
  width: 100%;
  min-height: 4rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem;
  gap: 2rem;
  border: 2px solid lightgray;
  border-radius: 0.6rem;
`;

const Multiline = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 2px solid lightgray;
  border-radius: 0.6rem;
  white-space: pre-wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmailContainer = styled.div`
  padding: 0.5rem;
  font-size: 14px;
  background-color: aliceblue;
  border-radius: 1rem;
  padding: 0.4rem 0.8rem 0.5rem;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
`;
