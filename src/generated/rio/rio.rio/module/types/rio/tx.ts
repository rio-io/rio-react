/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "rio.rio";

export interface MsgCreateCert {
  creator: string;
  title: string;
}

export interface MsgCreateCertResponse {
  id: number;
}

export interface MsgSendCert {
  id: number;
  creator: string;
  to: string;
}

export interface MsgSendCertResponse {}

const baseMsgCreateCert: object = { creator: "", title: "" };

export const MsgCreateCert = {
  encode(message: MsgCreateCert, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCert {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCert } as MsgCreateCert;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCert {
    const message = { ...baseMsgCreateCert } as MsgCreateCert;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCert): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCert>): MsgCreateCert {
    const message = { ...baseMsgCreateCert } as MsgCreateCert;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    return message;
  },
};

const baseMsgCreateCertResponse: object = { id: 0 };

export const MsgCreateCertResponse = {
  encode(
    message: MsgCreateCertResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCertResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCertResponse } as MsgCreateCertResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCertResponse {
    const message = { ...baseMsgCreateCertResponse } as MsgCreateCertResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCertResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCertResponse>
  ): MsgCreateCertResponse {
    const message = { ...baseMsgCreateCertResponse } as MsgCreateCertResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgSendCert: object = { id: 0, creator: "", to: "" };

export const MsgSendCert = {
  encode(message: MsgSendCert, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCert {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendCert } as MsgSendCert;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCert {
    const message = { ...baseMsgSendCert } as MsgSendCert;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    return message;
  },

  toJSON(message: MsgSendCert): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendCert>): MsgSendCert {
    const message = { ...baseMsgSendCert } as MsgSendCert;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    return message;
  },
};

const baseMsgSendCertResponse: object = {};

export const MsgSendCertResponse = {
  encode(_: MsgSendCertResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCertResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendCertResponse } as MsgSendCertResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendCertResponse {
    const message = { ...baseMsgSendCertResponse } as MsgSendCertResponse;
    return message;
  },

  toJSON(_: MsgSendCertResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendCertResponse>): MsgSendCertResponse {
    const message = { ...baseMsgSendCertResponse } as MsgSendCertResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** Create new certifications in the store */
  CreateCert(request: MsgCreateCert): Promise<MsgCreateCertResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendCert(request: MsgSendCert): Promise<MsgSendCertResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCert(request: MsgCreateCert): Promise<MsgCreateCertResponse> {
    const data = MsgCreateCert.encode(request).finish();
    const promise = this.rpc.request("rio.rio.Msg", "CreateCert", data);
    return promise.then((data) =>
      MsgCreateCertResponse.decode(new Reader(data))
    );
  }

  SendCert(request: MsgSendCert): Promise<MsgSendCertResponse> {
    const data = MsgSendCert.encode(request).finish();
    const promise = this.rpc.request("rio.rio.Msg", "SendCert", data);
    return promise.then((data) => MsgSendCertResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
