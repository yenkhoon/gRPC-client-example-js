import { RpcClient } from "../proto/mangostine_grpc_pb"
import { credentials } from "grpc"

const port = 26657;

export const client = new RpcClient(
    `localhost:${port}`,
    credentials.createInsecure()
)