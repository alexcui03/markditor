import React, { Component } from 'react';
import Titlebar from './widget/titlebar';
import Edit from './widget/edit';
import View from './widget/view';
import logo from './logo.svg';
import './app.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Titlebar />
				<div>
					<Edit />
					<View />
				</div>
			</div>
		);
	}
}

export default App;
