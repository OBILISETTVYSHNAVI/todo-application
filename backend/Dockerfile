
# Use an official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the API port
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
