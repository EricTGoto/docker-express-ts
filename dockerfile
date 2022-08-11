FROM node:14

WORKDIR /app

COPY package*.json ./ 

RUN npm install
RUN npm install -g nodemon

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]