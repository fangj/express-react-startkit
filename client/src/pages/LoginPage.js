import React from 'react';
import GeoPattern from "geopattern";
require ("./LoginPage.less");

var pattern = GeoPattern.generate('olx');
const bgStyle={backgroundImage:pattern.toDataUrl()}

const LoginPage = ()=><div className="login-bg vertical-container" style={bgStyle}>
	<div>hello</div>
</div>

LoginPage.defaultProps={

}
LoginPage.propTypes={
	
}
export default LoginPage;