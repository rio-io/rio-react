import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Bar>
        <Icon src={require("../images/rio_icon.png")} />
      </Bar>
    </>
  );
}

const Bar = styled.div`
  position: fixed;
  top: 0;
  width: 428px;
  height: 134px;
  left: 0px;
  z-index: 3;
  background: #241c55;
`;

const Icon = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
`;
