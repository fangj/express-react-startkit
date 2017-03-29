import React from 'react';
import {switchPower} from '../api';

export default ({mac="标题文字",on=false})=><div className="weui-cell weui-cell_switch">
                <div className="weui-cell__bd">{mac}</div>
                <div className="weui-cell__ft">
                    <input className="weui-switch" type="checkbox" checked={on} onChange={(e)=>switchPower(mac,e.target.checked)}/>
                </div>
            </div>;