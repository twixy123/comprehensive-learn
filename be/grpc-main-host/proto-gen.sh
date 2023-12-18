#!/bin/bash

rm -rf src/grpc/pb/
npx proto-loader-gen-types --longs=String --enums=String --defaults --keepCase --oneofs --grpcLib=@grpc/grpc-js --outDir=src/grpc/pb/ src/grpc/proto/tech-market.proto
