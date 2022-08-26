import styled from "styled-components";
import React from "react";
import animationData from "../ani.json";
import Lottie from "react-lottie";

export default function Success() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Background />
      <Modal>
        <Lottie
          options={defaultOptions}
          style={{ width: "200px", height: "200px" }}
        />
        <Message>CERTIFICATE ISSUED!</Message>
        <GotIt>Got it!</GotIt>
      </Modal>
    </>
  );
}

const GotIt = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 10px;

  position: absolute;
  width: 320px;
  height: 66px;
  left: 28px;
  bottom: 32px;

  background: #241c55;
  border-radius: 999px;
  /* Body (Bold) */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.022em;

  color: #f6f5fa;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 300px;
  height: 39px;
  left: 38px;
  bottom: 122px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -1.85114px;
  font-feature-settings: "case" on;
  color: #241c55;
`;

const Modal = styled.div`
  display: inline-block;
  background: #f6f5fa;
  z-index: 1001;
  position: absolute;
  width: 375px;
  height: 406px;
  left: 27px;
  bottom: 259px;
  border-radius: 50px;
`;

const Background = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0.25;
  background: #000000;
`;
