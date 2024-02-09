import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { colors: [...props.colors] };
        this.placeholder = document.createElement('li');
        this.placeholder.className = 'placeholder';
    }

    handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
    };

    handleDragOver = (e) => {
        e.preventDefault();
        const draggedIndex = +e.dataTransfer.getData('text/plain');
        const overIndex = this.findIndexFromEvent(e);

        if (draggedIndex !== overIndex) {
            this.setState(({ colors }) => {
                const updatedColors = [...colors];
                const [removed] = updatedColors.splice(draggedIndex, 1);
                updatedColors.splice(overIndex, 0, removed);
                return { colors: updatedColors };
            });
        }
    };

    findIndexFromEvent = (e) => {
        const draggedRect = this.placeholder.getBoundingClientRect();
        const midpoint = draggedRect.top + draggedRect.height / 2;
    
        return Array.from(e.currentTarget.children).findIndex((item) => {
            const rect = item.getBoundingClientRect();
            const itemMidpoint = rect.top + rect.height / 2;
    
            return midpoint < itemMidpoint;
        });
    };
    

    handleDragEnd = () => {
        this.placeholder.parentNode.removeChild(this.placeholder);
    };

    render() {
        const { colors } = this.state;

        const colorItems = colors.map((item, i) => (
            <li
                key={i}
                draggable='true'
                onDragStart={(e) => this.handleDragStart(e, i)}
                onDragOver={this.handleDragOver}
                onDragEnd={this.handleDragEnd}
            >
                {item}
            </li>
        ));

        return (
            <ul>
                {colorItems}
            </ul>
        );
    }
}

export default List;
