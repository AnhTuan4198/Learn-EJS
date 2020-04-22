const epxress= require('express');
const bodyParser = require('body-parser');
const app = epxress();
const port = 3001   ;
const homePage ='/'
app.set('view engine' , 'ejs');5
app.use(bodyParser.urlencoded({extended:true}));

const taskList = [
  {
    Todo: "Hello",
    complete: false,
    delete: false,
  },
  {
    Todo: "Eat",
    complete: false,
    delete: false,
  },
  {
    Todo: "Learn JV",
    complete: false,
    delete: false,
  },
]; ;


app.get("/delete",(req,res)=>{
    res.send("Hello delete route");
})

app.post('/complete',(req,res)=>{
    
    console.log()
    res.redirect(homePage)
})

app.get(homePage,(req , res)=>{
   
    
    const today = new Date();
     var option = {
         weekday:"long",
         month:"long",
         day:"numeric"
     }
     var day = today.toLocaleDateString("vi-VN", option);
     res.render('list',{today:day,taskList})
     
})

app.post(homePage,(req,res)=>{
    const newTodo= {
        Todo:req.body.newTodo,
        complete:false,
        delete:false
    }
    taskList.unshift(newTodo);
    res.redirect(homePage);
})


app.listen(port);

