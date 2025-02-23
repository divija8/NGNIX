FROM node:14

WORKDIR /app

COPY index.html .
COPY server.js .
COPY package.json .
COPY images/ ./images


RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]