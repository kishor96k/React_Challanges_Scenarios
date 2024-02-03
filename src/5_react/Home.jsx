import React from 'react';
import Menu from './Menu';

const Home = () => {
    // Example data, replace it with your actual data
    const menuItems = [
        {
            id: 1,
            title: 'Item 1',
            description: 'Description for item 1',
            price: 10.99,
            brand: 'Brand 1',
            category: 'Category 1',
            thumbnail: 'url-to-thumbnail-1',
        },
    ];

    return (
        <>
            <div className="">
                <p>Content changes with its tab</p>
            </div>
            <Menu items={menuItems} />
        </>
    );
};

export default Home;
