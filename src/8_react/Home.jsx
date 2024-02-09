import React, { useState } from 'react';

const Home = () => {
    const [accordionItems, setAccordionItems] = useState([
        { id: 1, title: 'Accordion Item 1', content: 'Content for Item 1', isOpen: false },
        { id: 2, title: 'Accordion Item 2', content: 'Content for Item 2', isOpen: false },
        // Add more items as needed
    ]);

    const toggleAccordionItem = (id) => {
        setAccordionItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };

    return (
        <>
            <div>
                <strong>Accordion in react js</strong>
            </div>
            {accordionItems.map((item) => (
                <div key={item.id}>
                    <div
                        onClick={() => toggleAccordionItem(item.id)}
                        style={{
                            cursor: 'pointer',
                            padding: '10px',
                            border: '1px solid #ccc',
                            marginBottom: '5px',
                            backgroundColor: item.isOpen ? '#eee' : '#fff',
                        }}
                    >
                        {item.title}
                    </div>
                    {item.isOpen && <div style={{ padding: '10px' }}>{item.content}</div>}
                </div>
            ))}
        </>
    );
};

export default Home;
