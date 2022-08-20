import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <Link to={"/resume"}>Personal</Link>
      <Link to={"/stamp"}>Organization</Link>
      <Link to={"/view"}>View</Link>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10vh;
  flex-direction: column;
`;

export default App;
