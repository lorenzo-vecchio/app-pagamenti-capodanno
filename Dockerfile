FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .
RUN npm run prisma-generate
RUN npm run build

ENTRYPOINT ["node", "build"]