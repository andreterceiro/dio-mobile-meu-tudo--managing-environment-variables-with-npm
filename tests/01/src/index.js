import connectToDatabase from './database/data.js';
connectToDatabase("andre", "123");
connectToDatabase("naruto", "uzumaki");
console.log(process.env.USER_DATABASE);
