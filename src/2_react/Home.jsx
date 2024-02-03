// Home.jsx
import React, { Component } from 'react';
import Color from './Color';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            colorNo: 100,
            colors: [],
        };

        for (let i = 0; i < this.state.colorNo; i++) {
            this.state.colors.push({ hexCodes: this.generateColor() });
        }
    }

    // generateColor
    generateColor() {
        return '#' + Math.random().toString(16).substring(2, 8);
    }

    updateColor(id) {
        let colors = this.state.colors.slice();
        const currentColor = this.generateColor();
        colors[id].hexCodes = currentColor;
        this.setState({
            colors: colors,
            colorNo: id + 1,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.colors.map((color, id) => (
                        <Color
                            key={`color-${id}`}
                            index={id}
                            update={this.updateColor.bind(this)}
                            hexCodes={color.hexCodes}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
