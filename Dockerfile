FROM node:8.14-alpine as client-builder
RUN apk update && \
    apk add --no-cache git \
                       openssh && \
    mkdir -p /opt/Myapp/workoutapp


WORKDIR /opt/Myapp/workoutapp
COPY package.json yarn.lock ./
RUN yarn cache clean && yarn install --frozen-lockfile 

FROM node:8.14-alpine
RUN mkdir -p /opt/Myapp/workoutapp
WORKDIR /opt/Myapp/workoutapp
COPY src ./src
COPY public ./public
COPY package.json yarn.lock ./
COPY --from=client-builder /opt/Myapp/workoutapp/node_modules ./node_modules

EXPOSE 3000
CMD yarn start