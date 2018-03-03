const expect=require("expect");
const request=require("supertest");

const {app}=require('./../server');
const {Todo}=require('./../models/todo');
var {ObjectID}=require("mongodb");

let todos=[{text:"first text todo",_id:new ObjectID()},{text:"second text todo",_id:new ObjectID()}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=>done());
});

describe("POST /todos",()=>{

//Should add new todo
  it('should create a new todo',(done)=>{
    var text="From a testing todo";
    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
      return done(err);
      }

    Todo.find({text}).then((todos)=>{
      expect(todos.length).toBe(1);
      expect(todos[0].text).toBe(text);
      done();
    }).catch((e)=>done(e));
  });
});

//should not add todo with bad input
it('should not create todo with invalid body data',(done)=>{
  request(app)
  .post('/todos')
  .send()
  .expect(400)
  .end((err,res)=>{
    if(err){
    return done(err);
    }

  Todo.find().then((todos)=>{
    expect(todos.length).toBe(2); //toBe value enterted is 2 cause in beforeEach we've added 2 values in collection. So before every "it" block runs that whole beforeEach block runs first.
    done();
    }).catch((e)=>done(e));
  });
});

});

//Describe method for Get Todos
describe("GET /Todos",()=>{
  it("should return todo using GET METHOD",(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
    });
  });

  //Describe for GET /todos/:id
  describe("GET /todos/:id",()=>{
    it("should return todo/:id if todo found",(done)=>{
      request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res)=>{
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done)
    });

      it('should return 404 error if todo not found',(done)=>{
        request(app)
        .get(`/todos/${(new ObjectID).toHexString()}`)
        .expect(404)
        .end(done);
      })

      it('should return 404 for non objectIDs',(done)=>{
        request(app)
        .get(`/todo/1234`)
        .expect(404)
        .end(done);
      });

  });
