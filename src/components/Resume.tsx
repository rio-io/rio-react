import { SigningStargateClient } from "@cosmjs/stargate";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MsgCreateCert } from "../generated/rio/rio.rio/module/types/rio/tx";
import Header from "./Header";

export const bankTypes: any = [
  ["/rio.rio.MsgCreateCert", MsgCreateCert],
  // ["http://203.254.143.165:1317/rio/rio/MsgSend", MsgSend],
];

export default function Resume() {
  const location: any = useLocation();
  console.log(location.state);

  const a = () => {
    const sendMsg = {
      typeUrl: "/rio.rio.MsgCreateCert",
      value: {
        creator: "13",
        title: "24",
      },
    };
    return location.state.client.signAndBroadcast(
      location.state.address,
      [sendMsg],
      "auto",
      ""
    );
  };

  useEffect(() => {
    a();
  });

  return (
    <>
      <Header />
    </>
  );
}
