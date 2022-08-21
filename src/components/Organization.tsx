import React, { useEffect, useState } from "react";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import styled from "styled-components";
import { A, Back, Main } from "../App";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Header from "./Header";
import { txClient } from "../generated/rio/rio.rio/module";
import Success from "./Success";

declare global {
  interface Window extends KeplrWindow {}
}

export default function Oragnization() {
  const [event, setEvent] = useState("");
  const [reciever, setReciever] = useState("");
  const [loading, setLoading] = useState(true);
  const [signer, setSigner] = useState<OfflineSigner>();
  const [address, setAddress] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [type, setType] = useState("competition");
  const [description, setDescription] = useState("");
  const options = [
    { value: "jobhistory", label: "Jobhistory" },
    { value: "award", label: "Award" },
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
      low: 0.0000000000001,
      average: 0.0000000000001,
      high: 0.0000000000001,
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
    setSigner(offlineSigner);
    setAddress(account.address);
  };

  useEffect(() => {
    setTimeout(async () => {
      await checkAuth().then(() => {
        setLoading(false);
      });
    }, 500);
  });

  if (loading) {
    return (
      <>
        <Header />
        <Loading>loading...</Loading>
      </>
    );
  }

  const test = async () => {
    if (signer) {
      const tx = await txClient(signer, {
        addr: "http://localhost:26657/",
      });
      await tx
        .signAndBroadcast([
          tx.msgSendCert({
            creator: address,
            to: reciever,
            title: event,
            certType: type,
            description: description,
          }),
        ])
        .then(() => {
          setSuccessMsg(true);
        });
    }
  };

  return (
    <>
      <Main>
        <Header />
        {successMsg && <Success />}
        <img src={require("../images/junction_logo.png")}></img>
        <CompanyTitle>JunctionAsia 2022</CompanyTitle>
        <div style={{ display: "flex" }}>
          <InputInstruction>Experience Type:</InputInstruction>
          <SelectComponent>
            <Select
              options={options}
              onChange={(e) => {
                console.log(e?.value);
              }}
            />
          </SelectComponent>
        </div>
        {/* <InputInstruction>
          Enter qualification
        </InputInstruction> */}
        <div style={{ position: "relative" }}>
          <TextInput
            placeholder="Enter qualification"
            value={event}
            onChange={(e) => {
              setEvent(e.target.value);
            }}
          />
          <img
            onClick={() => {
              setEvent("");
            }}
            src={require("../images/x-icon.png")}
            style={{ position: "absolute", top: "12px", right: "20px" }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <TextInput
            placeholder="Enter description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <img
            onClick={() => {
              setDescription("");
            }}
            src={require("../images/x-icon.png")}
            style={{ position: "absolute", top: "12px", right: "20px" }}
          />
        </div>
        {/* <InputInstruction>
          Enter receipient wallet address
        </InputInstruction> */}
        <div style={{ position: "relative" }}>
          <TextInput
            placeholder="Enter receipient wallet address"
            value={reciever}
            onChange={(e) => {
              setReciever(e.target.value);
            }}
            style={{ marginBottom: "55px" }}
          />
          <img
            onClick={() => {
              setReciever("");
            }}
            src={require("../images/x-icon.png")}
            style={{ position: "absolute", top: "12px", right: "20px" }}
          />
        </div>
        <A onClick={test}>Submit</A>
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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 30px;
`;
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
  width: 347px;
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
