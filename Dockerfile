FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod

FROM nginx:stable
COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/dist/esignature /usr/share/nginx/html
EXPOSE 80

# on terminal run :
# 1. docker build -t EsignatureTest:1.0.0 .  
# run the the image by running
# 2. docker run -d -p 8080:80 EsignatureTest:1.0.0
# Check if continer is up and running
# 3. docker ps
# check localhost:8080