import { Transaction, Send, TransactionResponse } from "../proto/mangostine_pb";
import { client } from "./connection";
import { ServiceError } from "grpc";

export default function sendTx() {

    let send = new Send();
    send.setAmount(12);
    send.setTo("cccbbaaa");

    let receiver = Array<Send>();
    receiver.push(send);

    let tx = new Transaction();
    tx.setSender("asfasdf23145");
    tx.setSignature("aaabbcccdd");
    tx.setReceiverList(receiver);

    client.sendTx(tx, (err: ServiceError | null, res: TransactionResponse) => {
        if (err) {
            return console.log(err);
        }

        console.log('Response:', res.getMessage());
    });

}