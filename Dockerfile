FROM node:11.3.0 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --ignore-engines
COPY . ./
RUN yarn build

## run build phase

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
