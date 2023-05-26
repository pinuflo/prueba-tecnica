FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

CMD ["node", "dist/src/main.js"]

EXPOSE 3200