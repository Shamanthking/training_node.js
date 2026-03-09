
const express = require('express');
const app = express();

app.use(express.json());

let subjects = [
 { id:1, name:"Mathematics", credits:4 },
 { id:2, name:"Physics", credits:3 }
];

app.get('/subjects',(req,res)=>{
 res.json(subjects);
});

app.listen(4002,()=>{
 console.log("Subject Service running on port 4002");
});
