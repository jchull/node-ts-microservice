FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ENV PORT 3000
EXPOSE 3000


# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

COPY . .
RUN npm run build



CMD [ "npm", "start" ]
