.PHONY: protogen

docker-build:
	docker rmi --force vue-main-host-image && docker build -t vue-main-host-image .

protogen:
	rm -rf $(CURDIR)/src/grpc/code-gen
	docker rmi --force protogen
	docker build --tag protogen ./src/grpc/
	docker run -v $(CURDIR)/src/grpc/proto:/proto:ro -v $(CURDIR)/src/grpc/grpc-web-client-gen:/gen -v $(CURDIR)/src/grpc/code-gen:/code-gen protogen
