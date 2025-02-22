# Use an official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# List the files in the current directory to verify if package.json is copied
RUN ls -la

# Test network connectivity to npm registry
RUN curl -v https://registry.npmjs.org

# Clear npm cache and install dependencies with verbose logging
RUN npm cache clean --force


# Copy the source code
COPY . .

# Expose the port (adjust if necessary for your app)
EXPOSE 3000

# Command to run the app (adjust if necessary)
CMD ["npm", "start"]
