FROM strapi/base:alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV development

EXPOSE 1337

CMD ["npm", "run", "develop"]
