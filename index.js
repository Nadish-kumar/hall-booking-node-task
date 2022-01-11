const express = require('express')
const app = express();

app.use(express.json())

let userlist = [];
app.get('/',(req,res)=>{
 res.json(userlist)
})

app.post('/create-users',(req,res) =>{
    req.body.id = userlist.length + 1;
    userlist.push(req.body)
    res.json({"message" : "value pushed"})
})

app.put('/edit-users/:id',(req,res) =>{
    let index = userlist.findIndex(obj => obj.id === req.params.id)
    let keyarray = Object.keys(req.body);
    keyarray.forEach((obj) => {
        userlist[index][obj] = req.body[obj]
    })
    res.json({"message" : "updated"})
})






app.listen(4000)