# First stage
FROM node as build


WORKDIR /frontend
COPY package.json .
RUN npm install -g npm@latest
RUN npm install --force --silent
COPY src ./src
COPY public ./public
COPY .env ./.env
RUN npm run-script build

# Second Stage
FROM node:slim
WORKDIR /frontend
COPY --from=build /frontend/build ./build
ENTRYPOINT tail -f > /dev/null


