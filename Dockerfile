# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app . 

# Expose the port Next.js 
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
