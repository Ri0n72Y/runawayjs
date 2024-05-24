import styled from "styled-components";

export function Welcome() {
  return (
    <Container>
      Welcome! ;)
      <br />
      <br />
      <br />
      开始你的新一天工作吧！
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-align: center;
  user-select: none;
`;
