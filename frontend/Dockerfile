# Use the official Node.js image as base
FROM node:20.10.0 AS build

# Set the working directory in the container
WORKDIR /app/frontend

# Copy the entire frontend directory contents to the container
COPY . .

# Install dependencies
RUN rm -rf node_modules

# Install dependencies
RUN rm -rf package-lock.json


# Install dependencies
RUN npm install


# Build the React app
CMD ["npm", "start"]

# # Use a lightweight Node.js image as a base for serving the app
# FROM node:alpine

# # Set the working directory in the container
# WORKDIR /app

# # Copy the built React app from the build stage to the working directory
# COPY --from=build /app/frontend/build ./frontend

# # Expose the port on which the React app will run
# EXPOSE 3000

# # Command to run the React app
# CMD ["node", "frontend/server.js"]
