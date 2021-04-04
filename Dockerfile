FROM node:latest AS builder

RUN apt update && \
    apt install sqlite3 -y && \
    npm i -g @nestjs/cli && \
    npm i -g ts-node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]