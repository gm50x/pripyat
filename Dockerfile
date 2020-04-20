FROM node:lts-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install PM2 in the container
RUN npm install -g pm2

# LINK pm2.io keys
ENV PM2_PUBLIC_KEY <YOUR PUBLIC PM2 KEY>
ENV PM2_SECRET_KEY <YOUR SECRET PM2 KEY>

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE ${PORT}
CMD [ "pm2-runtime", "ecosystem.config.js"]