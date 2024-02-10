import React, { useState } from 'react';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image URLs as needed
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="mt-4 p-5">
                <strong><p>On button click image silder</p></strong>
            </div>
            <button onClick={handlePrev}>Previous</button>
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            <button onClick={handleNext}>Next</button>
        </>
    );
};

export default Home;
