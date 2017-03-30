import React from 'react';
import { observer } from 'mobx-react';
import { Table, Popconfirm, Button } from 'antd';
import {removeTodo} from '../../services/todo';
var _=require('lodash');


 function deleteHandler(id) {
    console.log(id)
    const todos=[...gPageTodo.todos];
    removeTodo(id).then(todos=>gPageTodo.todos=todos);
  }


const columns = [
    {
      title: 'Todo',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

const TodoList=()=>{
	const todos=gPageTodo.todos;
	return <div >
      <div style={{marginTop:"16px"}}>
        <Table
          columns={columns}
          dataSource={todos}
          rowKey={record => record.id}
        />
      </div>
    </div>
};

export default observer(TodoList);