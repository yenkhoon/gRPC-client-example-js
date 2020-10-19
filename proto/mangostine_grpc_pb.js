// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// version of protocol buffer used
'use strict';
var grpc = require('grpc');
var mangostine_pb = require('./mangostine_pb.js');

function serialize_mangostine_v0_RawTransaction(arg) {
  if (!(arg instanceof mangostine_pb.RawTransaction)) {
    throw new Error('Expected argument of type mangostine_v0.RawTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mangostine_v0_RawTransaction(buffer_arg) {
  return mangostine_pb.RawTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mangostine_v0_Transaction(arg) {
  if (!(arg instanceof mangostine_pb.Transaction)) {
    throw new Error('Expected argument of type mangostine_v0.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mangostine_v0_Transaction(buffer_arg) {
  return mangostine_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mangostine_v0_TransactionResponse(arg) {
  if (!(arg instanceof mangostine_pb.TransactionResponse)) {
    throw new Error('Expected argument of type mangostine_v0.TransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mangostine_v0_TransactionResponse(buffer_arg) {
  return mangostine_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// service which can be executed
var RpcService = exports.RpcService = {
  // function which can be called
sendTx: {
    path: '/mangostine_v0.Rpc/SendTx',
    requestStream: false,
    responseStream: false,
    requestType: mangostine_pb.Transaction,
    responseType: mangostine_pb.TransactionResponse,
    requestSerialize: serialize_mangostine_v0_Transaction,
    requestDeserialize: deserialize_mangostine_v0_Transaction,
    responseSerialize: serialize_mangostine_v0_TransactionResponse,
    responseDeserialize: deserialize_mangostine_v0_TransactionResponse,
  },
  sendRawTx: {
    path: '/mangostine_v0.Rpc/SendRawTx',
    requestStream: false,
    responseStream: false,
    requestType: mangostine_pb.RawTransaction,
    responseType: mangostine_pb.TransactionResponse,
    requestSerialize: serialize_mangostine_v0_RawTransaction,
    requestDeserialize: deserialize_mangostine_v0_RawTransaction,
    responseSerialize: serialize_mangostine_v0_TransactionResponse,
    responseDeserialize: deserialize_mangostine_v0_TransactionResponse,
  },
};

exports.RpcClient = grpc.makeGenericClientConstructor(RpcService);
