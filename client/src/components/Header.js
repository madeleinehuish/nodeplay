import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div>
				<nav>
			    <div className="nav-wrapper">
			      <a className="left brand-logo">Emaily</a>
			      <ul className="right">
			        <li><a>Login with Google</a></li>
			        {/* <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">JavaScript</a></li> */}
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
}

export default Header;
