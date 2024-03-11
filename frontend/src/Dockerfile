# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# List files to verify that package.json has been copied
RUN ls -la

# Install dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
