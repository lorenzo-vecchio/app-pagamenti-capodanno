FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .
RUN npx prisma migrate dev
RUN npm run build

ENTRYPOINT ["node", "build"]