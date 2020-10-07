# pull official base image
FROM node:14.8.0-alpine3.11

WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY . ./app

RUN npm install --silent

# add app

# start app
CMD ["npm", "start"]