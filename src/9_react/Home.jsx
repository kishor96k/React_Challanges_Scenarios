import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

const Home = () => {
    const lorem = new LoremIpsum();

    return (
        <>
            <div>
                <strong>on page refresh random lorem ipsum generataor</strong>
            </div>
            <h1>Lorem Ipsum Generator</h1>
            <p>{lorem.generateSentences(18)}</p>
        </>
    );
};

export default Home;
