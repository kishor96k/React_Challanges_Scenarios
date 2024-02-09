import React from 'react';
import List from './List';

const Home = () => {
    const colorsArray = ['Red', 'Green', 'Blue','Black','yellow'];
    return (
        <>
            <div><p>Drag and drop in react js</p></div>
            <List colors={colorsArray} />
        </>
    );
};

export default Home;