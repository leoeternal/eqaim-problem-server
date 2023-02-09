# eqaim-problem-server
This is the backend repository where you can find all the backend code written in Node JS.

Steps to run - 

1. Clone this repo.
2. Do 'npm i' or 'npm install'
3. Do 'node index.js' to start the server or 'npm start' to start the server with nodemon.

NOTE - 

1. server runs on port 8000

Highlights - 
1. I have used MVC model with Express JS in order to structure my files & folders. There is one route '/cal' which will do all the necessary work to calculate the sum of the two numbers and then return JSON.
2. I have used regex to check that the number should be positive and non-decimal. If numbers violates this check, server will return 400 error.


