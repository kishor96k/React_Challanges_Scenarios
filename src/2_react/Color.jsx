// Color.jsx
import React, { Component } from 'react';

class Color extends Component {
    render() {
        const style = {
            backgroundColor: this.props.hexCodes,
            cursor: 'pointer',
            height: '100%', // Set the height to fill the container
        };

        return (
            <div className="col-md-3 p-4">
                <div className="color-box" style={style} onClick={() => this.props.update(this.props.index)}>
                    <p>{this.props.hexCodes}</p>
                </div>
            </div>
        );
    }
}

export default Color;
