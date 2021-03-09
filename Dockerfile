FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY front.js .

EXPOSE 8080
CMD [ "node", "front.js" ]
