#Node
FROM node:alpine as prshete
WORKDIR /prshete
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=prshete /prshete/build .
ENTRYPOINT [ "nginx", "-g","daemon off;" ]
