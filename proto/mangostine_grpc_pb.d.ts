// package: mangostine_v0
// file: mangostine.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as mangostine_pb from "./mangostine_pb";

interface IRpcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendTx: IRpcService_ISendTx;
    sendRawTx: IRpcService_ISendRawTx;
}

interface IRpcService_ISendTx extends grpc.MethodDefinition<mangostine_pb.Transaction, mangostine_pb.TransactionResponse> {
    path: "/mangostine_v0.Rpc/SendTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mangostine_pb.Transaction>;
    requestDeserialize: grpc.deserialize<mangostine_pb.Transaction>;
    responseSerialize: grpc.serialize<mangostine_pb.TransactionResponse>;
    responseDeserialize: grpc.deserialize<mangostine_pb.TransactionResponse>;
}
interface IRpcService_ISendRawTx extends grpc.MethodDefinition<mangostine_pb.RawTransaction, mangostine_pb.TransactionResponse> {
    path: "/mangostine_v0.Rpc/SendRawTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mangostine_pb.RawTransaction>;
    requestDeserialize: grpc.deserialize<mangostine_pb.RawTransaction>;
    responseSerialize: grpc.serialize<mangostine_pb.TransactionResponse>;
    responseDeserialize: grpc.deserialize<mangostine_pb.TransactionResponse>;
}

export const RpcService: IRpcService;

export interface IRpcServer {
    sendTx: grpc.handleUnaryCall<mangostine_pb.Transaction, mangostine_pb.TransactionResponse>;
    sendRawTx: grpc.handleUnaryCall<mangostine_pb.RawTransaction, mangostine_pb.TransactionResponse>;
}

export interface IRpcClient {
    sendTx(request: mangostine_pb.Transaction, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    sendTx(request: mangostine_pb.Transaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    sendTx(request: mangostine_pb.Transaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    sendRawTx(request: mangostine_pb.RawTransaction, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    sendRawTx(request: mangostine_pb.RawTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    sendRawTx(request: mangostine_pb.RawTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
}

export class RpcClient extends grpc.Client implements IRpcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendTx(request: mangostine_pb.Transaction, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTx(request: mangostine_pb.Transaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTx(request: mangostine_pb.Transaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public sendRawTx(request: mangostine_pb.RawTransaction, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public sendRawTx(request: mangostine_pb.RawTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public sendRawTx(request: mangostine_pb.RawTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mangostine_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
}
