import "./App.css";
import styled from "styled-components";
import { Side } from "./ui/Side";
import { Workspace } from "./ui/Workspace";
import { urlParams } from "./utils/url";
import { Debug } from "./utils/debug";

function App() {
  const debug = urlParams("debug");
  return (
    <Container>
      <Side />
      <Workspace />
      {!!debug && <Debug />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 12px;
  width: 800px;
  height: 600px;
  box-shadow: 0px 0px 0px 1px gray;

  display: flex;
  padding: 1rem;
  gap: 1rem;
`;
