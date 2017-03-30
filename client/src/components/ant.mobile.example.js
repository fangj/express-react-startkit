import {
  SearchBar, Tabs, Steps,
  NavBar, Icon, Button,
  Popup ,Picker ,List ,NoticeBar ,Checkbox,
  WhiteSpace ,WingBlank
} from 'antd-mobile';
const {CheckboxItem}=Checkbox;
// export default ()=><div>
// <NavBar leftContent="返回" mode="light"
//         onLeftClick={() => alert('onLeftClick') }>NavBar</NavBar>
// </div>

const picker= [{
    value: 'bj',
    label: '北京市',
  }, {
    value: 'zj',
    label: '浙江省',
  }, {
    value: 'gd',
    label: '广东省',
  }, {
    value: 'hn',
    label: '海南省',
  }, {
    value: 'cq',
    label: '重庆市',
  }, {
    value: 'sc',
    label: '四川省',
  }];

export default ()=>
	<div>
          <NavBar leftContent="返回" mode="light">NavBar</NavBar>
		    <WhiteSpace size="lg" />
		    <WingBlank size="lg"><h1>电源控制器</h1></WingBlank>
		    <WhiteSpace size="lg" />
          <List style={{height: document.documentElement.clientHight}}>
            {_.map(new Array(20), (i, index) => (
            <List.Item key={index}>我是第{index}个item</List.Item>
            ))}
          </List>
        </div>