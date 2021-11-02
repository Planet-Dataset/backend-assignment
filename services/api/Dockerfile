FROM node:lts-alpine

RUN mkdir /src
COPY . /src
WORKDIR /src

# Install the dependenciess
RUN yarn install

ENV MONGODB_URI=""

EXPOSE 8080