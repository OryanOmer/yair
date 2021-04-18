FROM node:12.16.1 as build-stage
# Create Directory for the Container

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app

COPY ./ /app

RUN npm run build

FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/googled677ba7bb6ccf297.html /usr/share/nginx/html/
