// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import {
  Registry,
  OfflineSigner,
  EncodeObject,
  DirectSecp256k1HdWallet,
} from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateResume } from "./types/rio/tx";
import { MsgCreateCert } from "./types/rio/tx";
import { MsgSendCert } from "./types/rio/tx";

const types = [
  ["/rio.rio.MsgCreateResume", MsgCreateResume],
  ["/rio.rio.MsgCreateCert", MsgCreateCert],
  ["/rio.rio.MsgSendCert", MsgSendCert],
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string;
}

interface SignAndBroadcastOptions {
  fee: StdFee;
  memo?: string;
}

const txClient = async (
  wallet: OfflineSigner,
  { addr }: TxClientOptions = { addr: "http://localhost:26657" }
) => {
  if (!wallet) throw MissingWalletError;
  let client: SigningStargateClient;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, {
      registry,
    });
  } else {
    client = await SigningStargateClient.offline(wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (
      msgs: EncodeObject[],
      { fee, memo }: SignAndBroadcastOptions = { fee: defaultFee, memo: "" }
    ) => client.signAndBroadcast(address, msgs, fee, memo),
    msgCreateResume: (data: MsgCreateResume): EncodeObject => ({
      typeUrl: "/rio.rio.MsgCreateResume",
      value: MsgCreateResume.fromPartial(data),
    }),
    msgCreateCert: (data: MsgCreateCert): EncodeObject => ({
      typeUrl: "/rio.rio.MsgCreateCert",
      value: MsgCreateCert.fromPartial(data),
    }),
    msgSendCert: (data: MsgSendCert): EncodeObject => ({
      typeUrl: "/rio.rio.MsgSendCert",
      value: MsgSendCert.fromPartial(data),
    }),
  };
};

interface QueryClientOptions {
  addr: string;
}

const queryClient = async (
  { addr }: QueryClientOptions = { addr: "http://localhost:1317" }
) => {
  return new Api({ baseUrl: addr });
};

export { txClient, queryClient };
