import React, { Component } from 'react';
import Toolbar from './toolbar';
import './edit.css';

class Edit extends Component {
    render() {
        return (
            <div className="edit">
                <Toolbar />
                <textarea className="edit-textarea edit-text" />
            </div>
        );
    }
}

export default Edit;
