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
  creator: string;
  to: string;
  certType: string;
  title: string;
  description: string;
}

export interface MsgSendCertResponse {
  id: number;
}

export interface MsgCreateResume {
  creator: string;
  certs: number[];
  avatarUrl: string;
  name: string;
  description: string;
}

export interface MsgCreateResumeResponse {
  id: number;
}

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

const baseMsgSendCert: object = {
  creator: "",
  to: "",
  certType: "",
  title: "",
  description: "",
};

export const MsgSendCert = {
  encode(message: MsgSendCert, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.certType !== "") {
      writer.uint32(26).string(message.certType);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
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
          message.creator = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.certType = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.description = reader.string();
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
    if (object.certType !== undefined && object.certType !== null) {
      message.certType = String(object.certType);
    } else {
      message.certType = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgSendCert): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.to !== undefined && (obj.to = message.to);
    message.certType !== undefined && (obj.certType = message.certType);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendCert>): MsgSendCert {
    const message = { ...baseMsgSendCert } as MsgSendCert;
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
    if (object.certType !== undefined && object.certType !== null) {
      message.certType = object.certType;
    } else {
      message.certType = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgSendCertResponse: object = { id: 0 };

export const MsgSendCertResponse = {
  encode(
    message: MsgSendCertResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendCertResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendCertResponse } as MsgSendCertResponse;
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

  fromJSON(object: any): MsgSendCertResponse {
    const message = { ...baseMsgSendCertResponse } as MsgSendCertResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgSendCertResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendCertResponse>): MsgSendCertResponse {
    const message = { ...baseMsgSendCertResponse } as MsgSendCertResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateResume: object = {
  creator: "",
  certs: 0,
  avatarUrl: "",
  name: "",
  description: "",
};

export const MsgCreateResume = {
  encode(message: MsgCreateResume, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.certs) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.avatarUrl !== "") {
      writer.uint32(26).string(message.avatarUrl);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateResume {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResume } as MsgCreateResume;
    message.certs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.certs.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.certs.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 3:
          message.avatarUrl = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResume {
    const message = { ...baseMsgCreateResume } as MsgCreateResume;
    message.certs = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.certs !== undefined && object.certs !== null) {
      for (const e of object.certs) {
        message.certs.push(Number(e));
      }
    }
    if (object.avatarUrl !== undefined && object.avatarUrl !== null) {
      message.avatarUrl = String(object.avatarUrl);
    } else {
      message.avatarUrl = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgCreateResume): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.certs) {
      obj.certs = message.certs.map((e) => e);
    } else {
      obj.certs = [];
    }
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateResume>): MsgCreateResume {
    const message = { ...baseMsgCreateResume } as MsgCreateResume;
    message.certs = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.certs !== undefined && object.certs !== null) {
      for (const e of object.certs) {
        message.certs.push(e);
      }
    }
    if (object.avatarUrl !== undefined && object.avatarUrl !== null) {
      message.avatarUrl = object.avatarUrl;
    } else {
      message.avatarUrl = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgCreateResumeResponse: object = { id: 0 };

export const MsgCreateResumeResponse = {
  encode(
    message: MsgCreateResumeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateResumeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateResumeResponse,
    } as MsgCreateResumeResponse;
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

  fromJSON(object: any): MsgCreateResumeResponse {
    const message = {
      ...baseMsgCreateResumeResponse,
    } as MsgCreateResumeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateResumeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateResumeResponse>
  ): MsgCreateResumeResponse {
    const message = {
      ...baseMsgCreateResumeResponse,
    } as MsgCreateResumeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** Create new certifications in the store */
  CreateCert(request: MsgCreateCert): Promise<MsgCreateCertResponse>;
  SendCert(request: MsgSendCert): Promise<MsgSendCertResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateResume(request: MsgCreateResume): Promise<MsgCreateResumeResponse>;
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

  CreateResume(request: MsgCreateResume): Promise<MsgCreateResumeResponse> {
    const data = MsgCreateResume.encode(request).finish();
    const promise = this.rpc.request("rio.rio.Msg", "CreateResume", data);
    return promise.then((data) =>
      MsgCreateResumeResponse.decode(new Reader(data))
    );
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
