# pull official base image
FROM node:14.8.0-alpine3.11

# set working directory
WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]