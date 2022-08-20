import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { A, Back, Main } from "../App";
import axios from "axios";

export default function View() {
  const [pending, setPending] = useState(true);
  const [address, setAddress] = useState("");
  const [value, setValue] = useState("");

  /**
   * 예시
   */
  useEffect(() => {
    if (address !== "") {
      axios
        .get("http://localhost:1317/rio/rio/certs", {
          params: { address },
        })
        .then((res) => {
          setPending(false);
          console.log(res);
        });
    }
  }, [address]);

  if (pending) {
    return (
      <>
        <Header />
        <Wrapper>
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <A
            onClick={() => {
              setAddress(value);
            }}
          >
            Find
          </A>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <Main
        style={{
          gap: 0,
          justifyContent: "flex-start",
          minHeight: "100vh",
          height: "unset",
        }}
      >
        <Img src={require("../images/profile.png")} />
        <Name>NAM YEJI</Name>
        <Desc>PRODUCT OWNER</Desc>
        <Container>hi</Container>
      </Main>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  padding: 0 25px;
`;
const Input = styled.input`
  margin-bottom: 20px;
`;

const Img = styled.img`
  margin-top: 158px;
`;
const Name = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height, or 120% */
  margin-top: 8px;
  text-align: center;

  color: #241c55;

  letter-spacing: -1.85114px;
`;
const Desc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Grey 400 */

  color: #535b5f;

  text-align: center;
  letter-spacing: -0.022em;
  margin-bottom: 30px;
`;
const Container = styled.div`
  height: 900px;
  background-color: gray;
`;
