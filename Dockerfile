# # nginx state for serving content
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY .next .

# WORKDIR /etc/nginx/conf.d
# RUN rm -rf ./*

# COPY default.conf .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Stage 1: Build the application
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production environment
FROM node:18-alpine AS runner

# Set the environment variable to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy the built Next.js app from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --only=production

# Expose the Next.js port (default is 3000)
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
