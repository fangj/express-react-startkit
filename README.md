# express-react-startkit

### express-react 样板工程  
* 后端：express  
* 前端：react  

前端采用bablejs编译，使用webpack打包

### 发布 

发布代码位于server/dist中

### 开发
```
cd client
webpack -w

cd server/dist
node app.js
```


样例代码：
http://localhost:3000/  
http://localhost:3000/ant.web.html  
http://localhost:3000/ant.mobile.html  
http://localhost:3000/weui.html  
http://localhost:3000/todo.html  

### Todo代码样例
http://localhost:3000/todo.html  
采用ant.design做为View,用MobX绑定页面数据与页面View。用mockjs拦截ajax请求模拟后端服务器。  
业务数据(数据库，REST接口,纯JSON,纯函数)->页面数据(Mobx全局变量)->页面View  

界面发生动作后，调用service代码更改后端数据，成功返回后刷新页面级的Mobx变量，使用了Mobx变量的View自动更新。