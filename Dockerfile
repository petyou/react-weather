FROM index.alauda.cn/library/node:4.2
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
VOLUME ["/app"]
WORKDIR /app
CMD ["npm", "start"]
