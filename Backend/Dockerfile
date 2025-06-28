# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code
COPY . .

# Expose backend port (change if needed)
EXPOSE 4000

# Start the app
CMD ["node", "server.js"]
