FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8005
CMD ["npm", "start"]