## Node

**Dockerfile**

```dockerfile
FROM node:16.14.2

RUN apt update -y && apt upgrade -y
RUN apt install -y protobuf-compiler

RUN npm install -g protoc-gen-grpc-web

CMD protoc -I=./path/to/proto {file-name}.proto --js_out=import_style=commonjs,binary:./path/to/grpc/code-gen --grpc-web_out=import_style=typescript,mode=grpcwebtext:./path/to/grpc/code-gen
```

**Makefile**

```makefile
proto-gen:
    docker stop proto-generate-container
	docker rm proto-generate-container --force
	docker build -t proto-generate-image .
	docker run -d -v ./:/protobuf-gen/grpc --name proto-generate-container proto-generate-image

delete-proto-payload:
	docker rm proto-generate-container --force
	docker rmi proto-generate-image --force

gen-proto-with-remove:
	make proto-gen
	make delete-proto-payload
```

**Execute .sh file**

```shell
#!/bin/bash
cd src/grpc && make proto-gen
```

* Start docker on your machine
* Run executable file
  * `/bin/bash ./{executable-file-name}.sh`
