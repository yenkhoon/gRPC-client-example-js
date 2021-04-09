import sendTx from './Client/send-transaction'
import { KeyPairKeyObjectResult, generateKeyPairSync } from 'crypto'

//export function generateKey() {
export function generateKey(): KeyPairKeyObjectResult {
    let keyOptions = {
        publicKeyEncoding: {
            type: 'spki',
            format: 'der'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        }
    }
    return generateKeyPairSync('ed25519', keyOptions)
}


export function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length)
    var view = new Uint8Array(ab)
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i]
    }
    return view
}

sendTx()