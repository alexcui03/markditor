import React, { Component } from 'react';
import './titlebar.css';

class Titlebar extends Component {
	render() {
		return (
			<div className="titlebar">
				<span className="titlebar-title">Markditor</span>
				<span className="titlebar-description"> - A simple markdown editor.</span>
			</div>
		);
	}
}

export default Titlebar;
