# Use the official code-server base image
FROM connorlanigan/code-server-with-node:latest

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive


# Install additional dependencies if needed
# RUN apt-get update && apt-get install -y <your-dependencies>

# Expose the default port for code-server
EXPOSE 8080

# Set the default working directory
WORKDIR /home/coder/project

# Start code-server
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "."]