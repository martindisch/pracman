FROM node:13-alpine
WORKDIR /pracman

# Stage 1: install Node dependencies (only runs when dependencies changed)
COPY package.json /pracman
COPY yarn.lock /pracman
RUN yarn

# Stage 2: copy code (only runs when code changed)
COPY . /pracman
RUN yarn build

CMD yarn start
