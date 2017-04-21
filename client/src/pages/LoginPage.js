import React from 'react';
import GeoPattern from "geopattern";
require ("./LoginPage.less");

import LoginForm from './LoginForm';

var pattern = GeoPattern.generate('olx');
const bgStyle={backgroundImage:pattern.toDataUrl()}

const LoginPage = ()=><div className="login-bg vertical-container" style={bgStyle}>
	<LoginForm/>
</div>


export default LoginPage;