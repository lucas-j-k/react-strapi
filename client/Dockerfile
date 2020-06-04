FROM node:12-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install react-scripts -g
RUN npm install
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
