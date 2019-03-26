FROM node:10.15.3-jessie

EXPOSE 8081

RUN mkdir /machine
WORKDIR /machine

COPY yarn.lock package.json /machine/

RUN yarn install

COPY . /machine
