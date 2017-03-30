export function addTodo(todo){
	return axios.post("/todo",todo).then(res=>res.data);
}
export function removeTodo(id){
	return axios({
	  method: 'delete',
	  url: `/todo`,
	  data: id
	}).then(res=>res.data);
}

