FROM node:13-alpine
WORKDIR /graphql

# Stage 1: install Node dependencies (only runs when dependencies changed)
COPY package.json /graphql
COPY yarn.lock /graphql
RUN yarn

# Stage 2: copy code (only runs when code changed)
COPY . /graphql
RUN yarn build

CMD yarn start
