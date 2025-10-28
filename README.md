# For continue watch our .ts code and changes to in .js
 npm run watch

# for running server 
npm run dev<br>
npm run server<br>
npm start

# Brevo from smtp mail
 https://login.brevo.com/


# SMTP CREDENTIALS
PORT = 587<br>
SMTP_HOST=smtp-relay.brevo.com<br>
SMTP_USERNAME=991dbf001@smtp-brevo.com<br>
SMTP_PASSWORD=SMTP_PASSWORD<br>
SMTP_SENDER_EMAIL=yogeshs368@gmail.com <br>
REDIS_HOST = localhost


# redis/redis-stack-server
docker run -d --name redis-stack -p 6379:6379 -e REDIS_ARGS="--requirepass mypassword" redis/redis-stack-server:latest


change into ->
Redis running for PORT -> -p 6379:6379
GUI PORT for redis ->  -p 8001:8001
image-name -> redis-stack:latest

run this in docker desktop ->
docker run -d --name redis-server -p 6379:6379 -p 8001:8001 redis/redis-stack:latest


# BullMQ -> BullMQ ek high-performance **job queue library** hai jo Node.js ke liye banayi gayi hai aur
**Redis** par based hoti hai.

npm install bullmq 


