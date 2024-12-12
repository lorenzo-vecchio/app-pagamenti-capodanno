FROM node:20

# Install MySQL and other required packages
RUN apt-get update && apt-get install -y \
    mysql-server \
    && rm -rf /var/lib/apt/lists/*

# Set up MySQL root password and create a database, user, and set privileges
RUN service mysql start && \
    mysql -e "CREATE DATABASE IF NOT EXISTS db;" && \
    mysql -e "CREATE USER IF NOT EXISTS 'db'@'%' IDENTIFIED BY 'db';" && \
    mysql -e "GRANT ALL PRIVILEGES ON db.* TO 'db'@'%';" && \
    mysql -e "FLUSH PRIVILEGES;"

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json . 
RUN npm install

# Copy the rest of your application files
COPY . .

# Run Prisma migrations (assuming Prisma is used for database migrations)
RUN npx prisma migrate dev

# Build your application
RUN npm run build

# Start the app
ENTRYPOINT ["node", "build"]