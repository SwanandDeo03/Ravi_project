# Use lightweight Nginx image
FROM nginx:alpine

# Remove default Nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Copy Cordova www folder to Nginx web root
COPY www/ /usr/share/nginx/html/

# Expose HTTP port
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
