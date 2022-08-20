import React, { useEffect, useState } from "react";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import styled from "styled-components";
import { A, Back, Main } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { SigningStargateClient } from "@cosmjs/stargate";
import { txClient } from "../generated/rio/rio.rio/module";

declare global {
  interface Window extends KeplrWindow {}
}

export default function User() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

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

    const account: AccountData = (await offlineSigner.getAccounts())[0];

    /**
     * 예시
     */
    // const tx = await txClient(offlineSigner, {
    //   addr: "http://localhost:26657/",
    // });
    // await tx.signAndBroadcast([
    //   tx.msgCreateCert({
    //     creator: account.address,
    //     title: "test",
    //   }),
    // ]);

    // Get the address and balance of your user
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

  return (
    <>
      <Header />
      <Main>
        <Img />
        <Name>Nam YEJI</Name>
        <Stamps></Stamps>
      </Main>
    </>
  );
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 30px;
`;

const Img = styled.img``;
const Name = styled.div``;
const Stamps = styled.div``;

// return (
//   <>
//     <Header />
//     <Main style={{ gap: "0" }}>
//       <Back src={require("../images/Image.png")} />
//       <Title>Login as User</Title>
//       <Desc>
//         Log into your account by simply connecting your <br /> Kepler wallet
//         with us below
//       </Desc>
//       <A
//         style={{ marginBottom: "34px", marginTop: "575px" }}
//         onClick={async () => {
//           await checkAuth().then((data) => {
//             if (data) {
//               navigate(`/resume?address=${data.address}`);
//             }
//           });
//         }}
//       >
//         Connect wallet
//       </A>
//     </Main>
//   </>
// );

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
