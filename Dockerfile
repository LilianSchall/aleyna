# build environment
FROM node:21-alpine3.17 as build
ARG BACKEND_URL
ARG LOGIN_URL
ARG LOGIN_BACKEND_URL
ENV VITE_BACKEND_URL $BACKEND_URL
ENV VITE_LOGIN_URL $LOGIN_URL
ENV VITE_LOGIN_BACKEND_URL $LOGIN_BACKEND_URL
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY src src/
COPY public public/
COPY index.html index.html
COPY tsconfig.json tsconfig.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.node.json tsconfig.node.json
COPY tailwind.config.js tailwind.config.js
COPY vite.config.ts vite.config.ts
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
