# First stage
FROM node as build
WORKDIR /frontend
COPY package.json .
RUN npm install -g npm@latest
RUN npm install --force --silent
COPY src ./src
COPY public ./public
RUN npm run-script build

# Second Stage
FROM nginx:1.21.6
WORKDIR /frontend

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /frontend/build /usr/share/nginx/html
