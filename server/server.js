const express=require('express');
const bodyParser=require('body-parser');
const _ = require('lodash');
const {ObjectID}=require("mongodb");

require('./config/config');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {Users}=require('./models/users');

var app=express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.send("hello");
})

// ============POST Todo Route ================ //
app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

// ============GET Todo Route ================ //
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.status(400).send(err)
  });
});

// ============Get Todo when user inputs ID in URL. =========== //
app.get('/todos/:id',(req,res)=>{
  let id=req.params.id;

  // check if enterted ID is a valid ID. //
  if(!ObjectID.isValid(id)){
    return res.status(404).send("Invalid ID");
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send("ID not found");
    }

    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});

// ============ Delete Todo ============= //
app.delete('/todos/:id',(req,res)=>{
    let id=req.params.id;

    // check if enterted ID is a valid ID. //
    if(!ObjectID.isValid(id)){
      return res.status(404).send("Invalid ID");
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
      if(!todo){
        return res.status(404).send("ID not found");
      }

      res.send({todo});
    }).catch((e)=>{
      res.status(400).send();
    });
  });

  // ============ Update Todo ============= //

app.patch('/todos/:id',(req,res)=>{
  let id=req.params.id;
  let body=_.pick(req.body,['text','completed'])

  // check if enterted ID is a valid ID. //
  if(!ObjectID.isValid(id)){
    return res.status(404).send("Invalid ID");
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt=new Date().getTime();
  }
    else{
      body.completed=false;
      body.completedAt=null;
  }

  Todo.findByIdAndUpdate(id, {$set:body} , {new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send("todo not found");
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
  });

/* ===============Starting Express Server================ */
//Dynamic port is used alongwith 3000 port, if used in heroku dynamic assigned port is used ,Locally 3000 port is used.
let port=process.env.PORT;
let uri=process.env.MONGODB_URI;
app.listen(port,()=>{
  console.log(`Started on port ${port +" "+ uri}`);

});

module.exports={app};
