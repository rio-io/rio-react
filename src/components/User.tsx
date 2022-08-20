import React, { useState } from "react";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import styled from "styled-components";
import { A, Back, Main } from "../App";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window extends KeplrWindow {}
}

export default function User() {
  const navigate = useNavigate();

  const getTestnetChainInfo = (): ChainInfo => ({
    chainId: "theta-testnet-001",
    chainName: "theta-testnet-001",
    rpc: "https://rpc.state-sync-01.theta-testnet.polypore.xyz/",
    rest: "https://rpc.state-sync-01.theta-testnet.polypore.xyz/",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmos" + "pub",
      bech32PrefixValAddr: "cosmos" + "valoper",
      bech32PrefixValPub: "cosmos" + "valoperpub",
      bech32PrefixConsAddr: "cosmos" + "valcons",
      bech32PrefixConsPub: "cosmos" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
      {
        coinDenom: "THETA",
        coinMinimalDenom: "theta",
        coinDecimals: 0,
      },
      {
        coinDenom: "LAMBDA",
        coinMinimalDenom: "lambda",
        coinDecimals: 0,
      },
      {
        coinDenom: "RHO",
        coinMinimalDenom: "rho",
        coinDecimals: 0,
      },
      {
        coinDenom: "EPSILON",
        coinMinimalDenom: "epsilon",
        coinDecimals: 0,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
    ],
    stakeCurrency: {
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
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
    const offlineSigner: OfflineSigner =
      window.getOfflineSigner!("theta-testnet-001");
    // Get the address and balance of your user
    const account: AccountData = (await offlineSigner.getAccounts())[0];
    return account.address;
  };

  return (
    <Main style={{ gap: "0" }}>
      <Back src={require("../images/Image.png")} />
      <Title>Login as User</Title>
      <Desc>
        Log into your account by simply connecting your <br /> Kepler wallet
        with us below
      </Desc>
      <A
        style={{ marginBottom: "34px", marginTop: "583px" }}
        onClick={async () => {
          await checkAuth().then((data) => {
            if (data) {
              navigate("/resume", { state: { address: data } });
            }
          });
        }}
      >
        Connect wallet
      </A>
    </Main>
  );
}

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -1.85114px;
  line-height: 38px;
  margin-bottom: 8px;
  margin-right: auto;
  color: #241c55;
`;

export const Desc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.022em;
  margin-right: auto;
  color: #535b5f;
`;
