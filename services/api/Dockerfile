FROM node:lts-alpine

RUN mkdir /app
COPY . /app
WORKDIR /app

# Install the dependenciess
ENV MONGODB_URI="mongodb://home-assignment-db:27017/testdb"
RUN yarn install
RUN yarn build

EXPOSE 8080