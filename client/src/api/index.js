export const switchPower=(mac,on)=>{
	console.log(mac,on);
	//更新本地界面
	gSwitches[mac]={on};
	PubSub.publish("switches",gSwitches);
	//发送到远程
	client.publish("/switch",{mac,on})
}

