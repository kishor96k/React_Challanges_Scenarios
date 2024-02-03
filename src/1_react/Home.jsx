import React, { useState } from 'react';
import Data from './Data';
import List from './List';

const Home = () => {
    const [details, setDetails] = useState(Data);

    return (
        <div>
            {details.length}
            <List details={details} />
            <button onClick={() => setDetails([])}>Clear Details</button>
        </div>
    );
};

export default Home;
