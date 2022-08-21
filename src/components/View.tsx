import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { A, Back, Main } from "../App";
import axios from "axios";

export default function View() {
  const [pending, setPending] = useState(true);
  const [address, setAddress] = useState("");
  const [value, setValue] = useState("");
  const [certs, setCerts] = useState([]);
  // rio/rio/resume id로
  /**
   * 예시
   */
  useEffect(() => {
    if (address !== "") {
      axios.get("http://localhost:1317/rio/rio/resumes/0").then((res) => {
        setPending(false);
        setCerts(res.data["Resume"].certs);
      });
    }
  }, [address]);

  if (pending) {
    return (
      <>
        <Header />
        <Wrapper>
          <InputInstruction>Enter the wallet address:</InputInstruction>
          <TextInput
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
        <Container>
          <TypeName>AWARDS</TypeName>
          {certs.map((e: any, i) => {
            if (e.creator === "rio1qpjqrx2ymw7fp7k5p360kkq83yeyd8rsewlehn") {
              return (
                <Item key={i}>
                  <Logo src={require("../images/Logo.png")} />
                  <TextBox>
                    <Title>{e.title}</Title>
                    <Description>{e.description}</Description>
                  </TextBox>
                </Item>
              );
            } else {
              return <div></div>;
            }
          })}
          <TypeName>JOB HISTORY</TypeName>
          {certs.map((e: any, i) => {
            if (e.creator === "rio1ec2dwp3wnncy74h2fa3nt086slx2mf7y0gegqv") {
              return (
                <Item key={i}>
                  <Logo src={require("../images/Logo2.png")} />
                  <TextBox>
                    <Title>{e.title}</Title>
                    <Description>{e.description}</Description>
                  </TextBox>
                </Item>
              );
            } else {
              return <div></div>;
            }
          })}
          <TypeName>EDUCATION</TypeName>
          {certs.map((e: any, i) => {
            if (e.creator === "rio1tsmmxrld973ajga4lwt60t0c3smq0eft3wf5pa") {
              return (
                <Item key={i + 1000}>
                  <Logo src={require("../images/Logo3.png")} />
                  <TextBox>
                    <Title>{e.title}</Title>
                    <Description>{e.description}</Description>
                  </TextBox>
                </Item>
              );
            } else {
              return <div></div>;
            }
          })}
        </Container>
      </Main>
    </>
  );
}
const TypeName = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.022em;
  margin-bottom: 8px;
  color: #241c55;
`;
const Logo = styled.img`
  margin-right: 25px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Creator = styled.div``;
const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.022em;

  /* Grey 400 */

  color: #535b5f;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.022em;

  color: #241c55;
`;

const Item = styled.div`
  padding: 12px 0;
  display: flex;
`;

export const InputInstruction = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  letter-spacing: -0.022em;
  color: #241c55;
  margin-right: auto;
  margin-bottom: 25px;
`;

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
  width: 100%;
`;
const TextInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid rgba(36, 28, 85, 0.5);
  border-radius: 999px;
  width: 343px;
  height: 45px;
  font-size: 20px;
  padding: 0px 16px;
  font-family: Poppins;
  margin-bottom: 75px;
`;
