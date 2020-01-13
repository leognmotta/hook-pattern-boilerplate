FROM node:10.15.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .
