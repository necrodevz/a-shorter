FROM node:12 as base
WORKDIR /home/node/app/
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
#RUN npm audit fix --force
#RUN sed -i 's|protocol: \'ws\',|protocol: window.location.protocol === \'https:\' ? \'wss\' : \'ws\',' ./node_modules/react-dev-utils/webpackHotDevClient.js
ENV NODE_ENV=production
RUN npm run build

FROM nginx:mainline-alpine as container
COPY --from=base /home/node/app/build /usr/share/nginx/html
COPY --from=base /home/node/app/nginx.conf /etc/nginx/conf.d/default.conf
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
