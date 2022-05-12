FROM node:16.14.2

RUN npm install -g nodemon

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
ADD decorate-angular-cli.js /tmp/decorate-angular-cli.js

RUN cd /tmp && npm install

RUN mkdir -p /app/api && cp -a /tmp/node_modules /app/api/

WORKDIR /app/api
COPY dist/apps/api/ /app/api

EXPOSE 4001

CMD [ "nodemon", "main.js" ]