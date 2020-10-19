// package: mangostine_v0
// file: mangostine.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Transaction extends jspb.Message { 
    getSender(): string;
    setSender(value: string): Transaction;

    clearReceiverList(): void;
    getReceiverList(): Array<Send>;
    setReceiverList(value: Array<Send>): Transaction;
    addReceiver(value?: Send, index?: number): Send;

    getPublicKey(): Uint8Array | string;
    getPublicKey_asU8(): Uint8Array;
    getPublicKey_asB64(): string;
    setPublicKey(value: Uint8Array | string): Transaction;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): Transaction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        sender: string,
        receiverList: Array<Send.AsObject>,
        publicKey: Uint8Array | string,
        signature: Uint8Array | string,
    }
}

export class Send extends jspb.Message { 
    getTo(): string;
    setTo(value: string): Send;

    getAmount(): number;
    setAmount(value: number): Send;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Send.AsObject;
    static toObject(includeInstance: boolean, msg: Send): Send.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Send, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Send;
    static deserializeBinaryFromReader(message: Send, reader: jspb.BinaryReader): Send;
}

export namespace Send {
    export type AsObject = {
        to: string,
        amount: number,
    }
}

export class RawTransaction extends jspb.Message { 
    getRawtx(): Uint8Array | string;
    getRawtx_asU8(): Uint8Array;
    getRawtx_asB64(): string;
    setRawtx(value: Uint8Array | string): RawTransaction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RawTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: RawTransaction): RawTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RawTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RawTransaction;
    static deserializeBinaryFromReader(message: RawTransaction, reader: jspb.BinaryReader): RawTransaction;
}

export namespace RawTransaction {
    export type AsObject = {
        rawtx: Uint8Array | string,
    }
}

export class TransactionResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): TransactionResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionResponse;
    static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
    export type AsObject = {
        message: string,
    }
}
