import React, { Component } from 'react';
import Titlebar from './widget/titlebar';
import Topbar from './widget/topbar';
import logo from './logo.svg';
import './app.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Titlebar />
			</div>
		);
	}
}

export default App;
