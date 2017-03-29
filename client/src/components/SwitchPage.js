import React from 'react';
import SwitchItem from '../components/SwitchItem';

export default class SwitchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state={switches:{}}
  }

  render() {
  	const {switches}=this.state;
  	var switcheList=[];
  	Object.keys(switches).map(mac=>switcheList.push({mac,...switches[mac]}))
    return (
      <div className="weui-cells weui-cells_form">
      {switcheList.map(({mac,on})=><SwitchItem key={mac} mac={mac} on={on}/>)}
      {switcheList.length===0?"目前没有电源控制器接入":null}
      </div>
    );
  }

  componentDidMount() {
     this.token=PubSub.subscribe("switches",this.handleMsg.bind(this))
  }
  componentWillUnmount() {
     PubSub.unsubscribe(this.token);
  }
  handleMsg(target,switches){
  	this.setState({switches})
  }
}

/**
 PubSub.publish("switches",{"abc":{on:true},"def":{on:false}})

 */