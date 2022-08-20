import React, { useState } from "react";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import styled from "styled-components";
import { A, Back, Main } from "../App";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Header from "./Header";

declare global {
  interface Window extends KeplrWindow {}
}

export default function Oragnization() {
  const [event, setEvent] = useState("");
  const [reciever, setReciever] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const options = [
    { value: "comptition", label: "Competition" },
    { value: "work", label: "Work" },
  ];

  const getTestnetChainInfo = (): ChainInfo => ({
    chainId: "rio",
    chainName: "RIO",
    // rpc: "https://rpc.state-sync-01.theta-testnet.polypore.xyz/",
    rpc: "http://localhost:26657/",
    // rest: "https://rpc.state-sync-01.theta-testnet.polypore.xyz/",
    rest: "http://localhost:1317/",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "rio",
      bech32PrefixAccPub: "rio" + "pub",
      bech32PrefixValAddr: "rio" + "valoper",
      bech32PrefixValPub: "rio" + "valoperpub",
      bech32PrefixConsAddr: "rio" + "valcons",
      bech32PrefixConsPub: "rio" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "STAKE",
        coinMinimalDenom: "stake",
        coinDecimals: 0,
      },
      {
        coinDenom: "TOKEN",
        coinMinimalDenom: "token",
        coinDecimals: 0,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STAKE",
        coinMinimalDenom: "stake",
        coinDecimals: 0,
      },
    ],
    stakeCurrency: {
      coinDenom: "STAKE",
      coinMinimalDenom: "stake",
      coinDecimals: 0,
    },
    coinType: 118,
    gasPriceStep: {
      low: 1,
      average: 1,
      high: 1,
    },
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
  });
  const checkAuth = async () => {
    // Detect Keplr
    const { keplr } = window;
    if (!keplr) {
      alert("You need to install Keplr");
      return;
    }
    // Get the current state and amount of tokens that we want to transfer
    // Suggest the testnet chain to Keplr
    await keplr.experimentalSuggestChain(getTestnetChainInfo());
    // Create the signing client
    const offlineSigner: OfflineSigner = window.getOfflineSigner!("rio");
    // Get the address and balance of your user
    const account: AccountData = (await offlineSigner.getAccounts())[0];
    return account.address;
  };

  return (
    <>
      <Main>
        <Header />
        <img src={require("../images/junction_logo.png")}></img>
        <CompanyTitle>JunctionAsia 2022</CompanyTitle>
        <div style={{ display: "flex" }}>
          <InputInstruction>Experience Type:</InputInstruction>
          <SelectComponent>
            <Select options={options} />
          </SelectComponent>
        </div>
        {/* <InputInstruction>
          Enter qualification
        </InputInstruction> */}
        <TextInput
          placeholder="Enter qualification"
          value={event}
          onChange={(e) => {
            setEvent(e.target.value);
          }}
        />
        <TextInput
          placeholder="Enter description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        {/* <InputInstruction>
          Enter receipient wallet address
        </InputInstruction> */}
        <TextInput
          placeholder="Enter receipient wallet address"
          value={reciever}
          onChange={(e) => {
            setReciever(e.target.value);
          }}
          style={{ marginBottom: "55px" }}
        />
        <A>Submit</A>
        <Goback style={{ marginBottom: "34px" }}>Go Back</Goback>
      </Main>
    </>
  );
}

//   return (
//     <>
//       <Header />
//       <Main style={{ gap: "0" }}>
//         <Back src={require("../images/Image.png")} />
//         <Title>Login as Organization</Title>
//         <Desc>
//           Log into your account by simply connecting your <br /> Kepler wallet
//           with us below
//         </Desc>
//         <A
//           style={{ marginBottom: "34px", marginTop: "575px" }}
//           onClick={async () => {
//             await checkAuth().then((data) => {
//               if (data) {
//                 navigate("/stamp", { state: { address: data } });
//               }
//             });
//           }}
//         >
//           Connect wallet
//         </A>
//       </Main>
//     </>
//   );
// }

// export const Title = styled.div`
//   font-weight: 700;
//   font-size: 32px;
//   letter-spacing: -1.85114px;
//   line-height: 38px;
//   margin-bottom: 8px;
//   margin-right: auto;
//   color: #241c55;
// `;

// export const Desc = styled.div`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   letter-spacing: -0.022em;
//   margin-right: auto;
//   color: #535b5f;
// `;

export const SelectComponent = styled.div`
  margin-right: auto;
  width: 10rem;
`;

export const TextInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid rgba(36, 28, 85, 0.5);
  border-radius: 999px;
  width: 378px;
  height: 45px;
  font-size: 20px;
  padding: 0px 16px;
  font-family: Poppins;
`;

export const InputInstruction = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 35px;
  letter-spacing: -0.022em;
  color: #241c55;
  margin-right: 10px;
`;

export const CompanyTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -1.85114px;
  color: #241c55;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -1.85114px;
  line-height: 38px;
  margin-bottom: 8px;
  margin-right: auto;
  color: #241c55;
`;

export const Goback = styled.div`
  width: 379px;
  height: 66px;
  background-color: #fff;
  border-radius: 999px;
  border: 2px solid #241c55;
  color: #241c55;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  letter-spacing: -0.022em;
  font-weight: 700;
`;
