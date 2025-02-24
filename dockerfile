FROM node:18

WORKDIR /book/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3004

CMD [ "node", "orderServer.js" ]
