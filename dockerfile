FROM node:14 as dev

WORKDIR /app

COPY package*.json ./ 

RUN npm install
RUN npm install -g nodemon

COPY . .
EXPOSE 5000

FROM dev as production 

RUN npm run build

