/**
 * 使用mobx的样例
 * 业务数据(数据库，REST接口,纯JSON,纯函数)->页面数据(Mobx)->页面View
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Form, Input, Button } from 'antd';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
export default ()=><Content style={{ margin: '0 16px' ,padding:'16px 0'}}>
            <TodoInput/>
            <TodoList/>
          </Content>;
