

import React from 'react';

const Menu = ({ items }) => {
    return (
        <div className="menu-container">
            {items.map((menuItem) => {
                const { id, title, description, price, brand, category, thumbnail } = menuItem;

                return (
                    <div key={id} className="menu-item">
                        <img src={thumbnail} alt={title} className="menu-item-thumbnail" />
                        <div className="menu-item-details">
                            <h3 className="menu-item-title">{title}</h3>
                            <p className="menu-item-description">{description}</p>
                            <p className="menu-item-price">${price}</p>
                            <p className="menu-item-brand">{brand}</p>
                            <p className="menu-item-category">{category}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
