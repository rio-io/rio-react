import React, { useEffect, useState } from "react";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";
import { AccountData, OfflineSigner } from "@cosmjs/proto-signing";
import styled from "styled-components";
import { A, Back, Main } from "../App";
import Header from "./Header";
import axios from "axios";
import { txClient } from "../generated/rio/rio.rio/module";
import Success2 from "./Success2";

declare global {
  interface Window extends KeplrWindow {}
}

export default function User() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [certs, setCerts] = useState([]);
  const [checks, setChecks] = useState([]);
  const [signer, setSigner] = useState<OfflineSigner>();
  const [successMsg, setSuccessMsg] = useState(false);

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

  const sendResume = async () => {
    if (signer) {
      const tx = await txClient(signer, {
        addr: "http://localhost:26657/",
      });
      const test = await tx
        .signAndBroadcast([
          tx.msgCreateResume({
            creator: address,
            name: "NAM YEJI",
            avatarUrl: "/",
            description: "desc",
            certs: certs,
          }),
        ])
        .then(() => {
          setSuccessMsg(true);
        });
    }
  };

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
    setSigner(offlineSigner);
    // Get the address and balance of your user
    setAddress(account.address);
  };

  useEffect(() => {
    setTimeout(async () => {
      await checkAuth().then(() => {
        setLoading(false);
      });
    }, 500);
  }, []);

  /**
   * query
   */
  useEffect(() => {
    if (!loading) {
      axios
        .get("http://localhost:1317/rio/rio/certs", {
          params: { address },
        })
        .then((res) => {
          setCerts(res.data["Cert"]);
        });
    }
  }, [loading]);

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
      {successMsg && <Success2 />}
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
                  <CheckBox
                    type="checkbox"
                    onClick={() => {
                      // @ts-ignore
                      setChecks([...checks, e.id]);
                      // console.log(e.id);
                    }}
                  />
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
                  <CheckBox
                    type="checkbox"
                    onClick={() => {
                      // @ts-ignore

                      setChecks([...checks, e.id]);
                    }}
                  />
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
      <A
        style={{ position: "fixed", top: "828px", left: "25px" }}
        onClick={sendResume}
      >
        Generate link
      </A>
    </>
  );
}
const CheckBox = styled.input`
  width: 25px;
  margin-left: auto;
`;

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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 30px;
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
