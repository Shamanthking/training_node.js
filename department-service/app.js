
const express = require('express');
const app = express();

app.use(express.json());

let departments = [
 { id:1, name:"Computer Science", block:"A"},
 { id:2, name:"Mechanical", block:"B"}
];

app.get('/departments',(req,res)=>{
 res.json(departments);
});

app.listen(4003,()=>{
 console.log("Department Service running on port 4003");
});
