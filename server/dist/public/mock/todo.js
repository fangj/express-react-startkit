//axios.get("/hello").then(console.log)
Mock.mock("/hello",(options)=>"world");

var todos=[];
Mock.mock("/todo","post",({url,type,body})=>{todos.push({title:body,id:Date.now()});return todos;});
Mock.mock("/todo","delete",({url,type,body})=>{var id=body;_.remove(todos, {id});return todos;});
