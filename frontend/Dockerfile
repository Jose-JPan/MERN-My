# Use Node.js to build React app
FROM node:20

# Set working directory
WORKDIR /app/frontend

# Copy package.json and install dependencies
Copy package*.json ./
RUN npm install

# Copy all source files
COPY . ./app/frontend

# Start React app (development mode)
CMD ["npm", "start"]

# Expose default React dev server port
EXPOSE 3000
