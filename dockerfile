FROM node:18

WORKDIR /book/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "orderServer.js" ]
