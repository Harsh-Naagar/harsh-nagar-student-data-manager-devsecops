# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the frontend code
COPY . .

# Build the React app
RUN npm run build

# Install serve to host static files
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build"]
