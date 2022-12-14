import { SigningStargateClient } from "@cosmjs/stargate";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import { MsgCreateCert } from "./generated/rio/rio.rio/module/types/rio/tx";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Back src={require("./images/Image.png")} />
        <Text>
          Revolutionizing
          <br />
          resumes through
          <br />
          blockchain
          <br />
          technology
        </Text>
        <From>
          Powered by <span>GeNovation</span>
        </From>
        <StyledLink to={"/user"}>
          <A>Login as User</A>
        </StyledLink>
        <StyledLink to={"/organization"}>
          <B>Login as Organization</B>
        </StyledLink>
        <img src={require("./images/OR.png")} />
        <StyledLink to={"/view"}>
          <C>
            View Resume here
            <img src={require("./images/Arrow.png")} />
          </C>
        </StyledLink>
      </Main>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  margin-right: auto;
  letter-spacing: -1.85114px;
  padding-top: 8px;
`;
const From = styled.div`
  letter-spacing: -0.022em;
  margin-right: auto;
  color: #151718;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  span {
    font-weight: 600;
  }
  margin-bottom: 228px;
`;
export const Back = styled.img`
  position: absolute;
  left: 158px;
  top: 268px;
  z-index: -1;
`;
export const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  align-items: center;
  max-width: 428px;
  margin: 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px;
  position: relative;
  overflow-x: hidden;
`;

export const A = styled.div`
  width: 379px;
  height: 66px;
  background-color: #241c55;
  border-radius: 999px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  letter-spacing: -0.022em;
  font-weight: 700;
`;

const B = styled.div`
  width: 379px;
  height: 66px;
  border-radius: 999px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  letter-spacing: -0.022em;
  align-items: center;
  font-weight: 700;
  border: 2px solid #241c55;
  color: #241c55;
`;

const C = styled.div`
  font-weight: 600;
  img {
    position: relative;
    top: 4px;
    left: 4px;
  }
  margin-bottom: 50px;
  letter-spacing: -0.022em;
  color: #241c55;
`;
