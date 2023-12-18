import path from 'path';
import dotenv from "dotenv";
dotenv.config();

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from "./grpc/pb/tech-market"
import {TechMarketHandlers} from "./grpc/pb/TechMarket";
import AuthGrpcController from "./controllers/auth-grpc-controller";

import config from "./config";
import {RegistrationRequest, RegistrationResponse} from "./controllers/types/auth-grpc-controller.type";

const protoLoaderOptions: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PORT = config.PORT;
const PROTO_FILE = './grpc/proto/tech-market.proto';

const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  protoLoaderOptions
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const server = new grpc.Server();
// Post Services
server.addService(proto.TechMarket.service, {
  Registration: (req: RegistrationRequest, res: RegistrationResponse) => AuthGrpcController.registration(req,res),
} as Omit<TechMarketHandlers, "Authentication" | "UpdateCustomer">)
server.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    server.start();
    console.log(`? Server listening on ${port}`);
  }
);
