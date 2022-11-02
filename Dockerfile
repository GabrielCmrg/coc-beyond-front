FROM node:16

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

WORKDIR /
RUN mkdir -p /var/www/html
RUN mv /app/dist/* /var/www/html
RUN rm -rf /app
