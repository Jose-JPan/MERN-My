# 1. Use official Node.js image
FROM node:20

# 2. Optional tools
RUN apt-get update && apt-get install -y netcat-openbsd jq vim

# 3. Set working directory
WORKDIR /app/backend

# 4. Copy package.json and package-lock.json
COPY package*.json /app/backend 

# 5. Install backend dependencies
RUN npm install

# 6. Copy the rest of the backend code
COPY ./ /app/backend

# 7. Make wait-for-it executable
RUN chmod +x wait-for-it.sh

# 7. Expose port 5050
EXPOSE 5050

# 8. Start app after DB is ready
CMD ["./wait-for-it.sh", "mysql:3306", "--", "npm", "run", "dev"]
