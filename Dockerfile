FROM node:latest

RUN apt update && \
    apt install sqlite3 -y && \
    npm i -g @nestjs/cli && \
    npm i -g ts-node