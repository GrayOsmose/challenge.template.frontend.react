# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.9.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.0.17 -g --silent

# start app
CMD ["npm", "start"]