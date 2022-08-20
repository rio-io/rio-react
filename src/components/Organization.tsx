import React, { useState } from "react";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import styled from "styled-components";
import { A, Back, Main } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

declare global {
  interface Window extends KeplrWindow {}
}

export default function Oragnization() {
  const [event, setEvent] = useState("");
  const [reciever, setReciever] = useState("");
  const [type, setType] = useState("");

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
      <Header />
      <div>
        <h1>Org Name</h1>
      </div>
      <div>
        <input
          value={event}
          onChange={(e) => {
            setEvent(e.target.value);
          }}
        />
        <input
          value={reciever}
          onChange={(e) => {
            setReciever(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="competition">Competition</option>
          <option value="work">Work</option>
        </select>
        <button>Submit</button>
      </div>
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
