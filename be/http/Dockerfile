FROM node:18.13.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=3000
ENV DB_USER=postgres
ENV DB_PASSWORD=postgres
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_NAME=express_jwt_auth
ENV JWT_ACCESS_TOKEN=learn_express_jwt_auth_access_secret_key
ENV JWT_REFRESH_TOKEN=learn_express_jwt_auth_refresh_secret_key

RUN npm run build

EXPOSE 3000

CMD ["node", "dist"]