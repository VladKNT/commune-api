FROM node:12.7.0

ARG NODE_ENV="DEV"

RUN mkdir /comune-api
WORKDIR /commune-api

COPY . .

RUN npm i -g @nestjs/cli
RUN yarn

EXPOSE 3000

CMD yarn start:dev
