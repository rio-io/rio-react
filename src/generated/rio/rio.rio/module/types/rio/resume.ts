/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Cert } from "../rio/cert";

export const protobufPackage = "rio.rio";

export interface Resume {
  creator: string;
  id: number;
  certs: Cert[];
  avatarUrl: string;
  name: string;
  description: string;
  createdAt: number;
}

const baseResume: object = {
  creator: "",
  id: 0,
  avatarUrl: "",
  name: "",
  description: "",
  createdAt: 0,
};

export const Resume = {
  encode(message: Resume, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    for (const v of message.certs) {
      Cert.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.createdAt !== 0) {
      writer.uint32(56).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Resume {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResume } as Resume;
    message.certs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.certs.push(Cert.decode(reader, reader.uint32()));
          break;
        case 4:
          message.avatarUrl = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resume {
    const message = { ...baseResume } as Resume;
    message.certs = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.certs !== undefined && object.certs !== null) {
      for (const e of object.certs) {
        message.certs.push(Cert.fromJSON(e));
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    return message;
  },

  toJSON(message: Resume): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    if (message.certs) {
      obj.certs = message.certs.map((e) => (e ? Cert.toJSON(e) : undefined));
    } else {
      obj.certs = [];
    }
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Resume>): Resume {
    const message = { ...baseResume } as Resume;
    message.certs = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.certs !== undefined && object.certs !== null) {
      for (const e of object.certs) {
        message.certs.push(Cert.fromPartial(e));
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    return message;
  },
};

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
