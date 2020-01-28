FROM node:12 as base
WORKDIR ~/app/
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
#RUN npm audit fix --force
#RUN sed -i 's|protocol: \'ws\',|protocol: window.location.protocol === \'https:\' ? \'wss\' : \'ws\',' ./node_modules/react-dev-utils/webpackHotDevClient.js
ENV NODE_ENV=production
RUN npm build

FROM nginx:mainline-alpine as container
COPY --from=base ~/app/build /usr/share/nginx/html
COPY --from=base ~/app/nginx.conf /etc/nginx/conf.d/default.conf
