FROM node:24 AS build-stage

WORKDIR /usr/src/app

# use caching
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# FROM build-stage AS test

# RUN npm test

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html