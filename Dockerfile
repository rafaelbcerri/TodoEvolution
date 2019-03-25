FROM node:10.15.3-jessie

RUN mkdir /machine
WORKDIR /machine

COPY yarn.lock package.json /machine/

RUN yarn install

COPY . /machine

VOLUME app:/machine/app
