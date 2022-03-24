# First stage
FROM node as build
ARG REACT_APP_DOMAIN
ARG REACT_APP_PORT
ENV REACT_APP_DOMAIN=$REACT_APP_DOMAIN
ENV REACT_APP_PORT=$REACT_APP_PORT
WORKDIR frontend
COPY package.json .
RUN npm install -g npm@latest
RUN npm install --force --silent
COPY src ./src
COPY public ./public
RUN npm run-script build

# Second Stage
FROM nginx:1.21.6
WORKDIR /frontend


COPY --from=build /frontend/build /usr/share/nginx/html
ENTRYPOINT tail -f > /dev/null


