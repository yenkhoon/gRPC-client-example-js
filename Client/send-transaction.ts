import { Transaction, Send, TransactionResponse } from '../proto/mangostine_pb'
import { client } from './connection'
import { ServiceError } from 'grpc'

export default function sendTx() {

    let send = new Send()
    send.setAmount(10)
    send.setTo('0000000000000000000000000000000000000000')

    let receiver = Array<Send>()
    receiver.push(send)

    let tx = new Transaction()
    tx.setSender('0000000000000000000000000000000000000000')
    tx.setSignature(new Uint8Array([159, 34, 50, 97, 131, 231, 84, 3, 40, 101, 99, 214, 88, 236, 217, 38, 23, 106, 10, 150, 194, 171, 38, 54, 3, 9, 210, 201, 5, 154, 75, 69, 0, 14, 97, 150, 141, 202, 99, 176, 201, 76, 70, 77, 91, 105, 6, 22, 54, 238, 52, 37, 38, 255, 109, 93, 115, 6, 1, 16, 203, 199, 178, 13]))
    tx.setReceiverList(receiver)
    tx.setPublicKey(new Uint8Array([133, 41, 42, 30, 62, 137, 36, 206, 183, 130, 135, 158, 65, 211, 155, 12, 184, 187, 10, 230, 34, 111, 130, 43, 212, 59, 241, 55, 32, 50, 129, 0]))

    client.sendTx(tx, (err: ServiceError | null, res: TransactionResponse) => {
        if (err) {
            return console.log(err)
        }

        console.log('Response:', res.getMessage())
    })
}