
const express = require('express');
const app = express();

app.use(express.json());

let teachers = [
 { id: 1, name: "Ramesh", subject: "Mathematics" },
 { id: 2, name: "Anitha", subject: "Physics" }
];

app.get('/teachers', (req,res)=>{
 res.json(teachers);
});

app.get('/teachers/:id',(req,res)=>{
 const id = parseInt(req.params.id);
 const teacher = teachers.find(t=>t.id===id);

 if(!teacher){
  return res.status(404).json({message:"Teacher not found"});
 }

 res.json(teacher);
});

app.listen(4001,()=>{
 console.log("Teacher Service running on port 4001");
});
