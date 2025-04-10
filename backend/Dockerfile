# 1. Use official Node.js image
FROM node:20

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install backend dependencies
RUN npm install

# 5. Copy the rest of the backend code
COPY . .

# 6. Expose port 5000
EXPOSE 5000

# 7. Command to run the app
CMD ["npm", "run", "dev"]
