# 1. Use Node.js to build React app
FROM node:20

# 2. Optional tools
RUN apt-get update && apt-get install -y vim

# 3. Set working directory
WORKDIR /app/frontend

# 4. Copy package.json and package-lock.json
Copy package*.json ./

# 5. Install frontend dependencies
RUN npm install

# 6. Copy the rest of the frontend code
COPY . ./app/frontend

ENV HOST 0.0.0.0

# 7. Expose default React dev server port
EXPOSE 3000

# 8. Start React app (development mode)
CMD ["npm", "start"]

