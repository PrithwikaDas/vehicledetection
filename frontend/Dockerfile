# Use the official Node.js image as base
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory contents to the container
COPY . .

CMD ["npm", "run","start"]
# # Build the React app
# RUN npm run build

# # Use a lightweight Node.js image as a base for serving the app
# FROM node:alpine

# # Set the working directory in the container
# WORKDIR /app

# # Copy the built React app from the build stage to the working directory
# COPY --from=build /app/frontend/build ./frontend

# # Expose the port on which the React app will run
# EXPOSE 3000

# # Command to run the React app
# CMD ["npx", "serve", "-s", "frontend", "-l", "3000"]
