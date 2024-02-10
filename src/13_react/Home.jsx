import React, { useState, useEffect } from 'react';
import "./style.css";

const Home = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update time every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    // Calculate the degrees for each clock hand
    const secondsDeg = (time.getSeconds() / 60) * 360;
    const minutesDeg = ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
    const hoursDeg = ((time.getHours() % 12 + time.getMinutes() / 60) / 12) * 360;

    return (
        <div className="analog-clock">
            <div>analog clock in react js</div>
            <div className="hand" style={{ transform: `rotate(${secondsDeg}deg)` }}></div>
            <div className="hand" style={{ transform: `rotate(${minutesDeg}deg)` }}></div>
            <div className="hand" style={{ transform: `rotate(${hoursDeg}deg)` }}></div>
            <div className="center"></div>
        </div>
    );
};

export default Home;
