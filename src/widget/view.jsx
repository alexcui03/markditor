import React, { Component } from 'react';
import Fileinfo from './fileinfo';
import './view.css';

class View extends Component {
    render() {
        return (
            <div className="view">
                <Fileinfo />
                <div className="view-div" />
            </div>
        );
    }
}

export default View;
