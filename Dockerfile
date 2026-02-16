FROM node:20 AS builder

WORKDIR /usr/src/app
ENV PATH=/usr/src/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

FROM nginx:alpine AS prod

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
