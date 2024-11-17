# Step 1: Use Node.js official image as the base image
FROM node:18-alpine AS build

# Step 2: Set working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application into the container
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Use Nginx to serve the production build
FROM nginx:alpine AS production

# Step 8: Copy build files to the Nginx server directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
