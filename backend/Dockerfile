# 1. Use official Node.js image
FROM node:20

RUN apt-get update && apt-get install -y jq

# 2. Set working directory
WORKDIR /app/backend

# 3. Copy package.json and package-lock.json
COPY package*.json /app/backend 

# 4. Install backend dependencies
RUN npm install

# 5. Copy the rest of the backend code
COPY ./ /app/backend

# 6. Expose port 5050
EXPOSE 5050

# 7. Command to run the app
CMD ["npm", "run", "dev"]
